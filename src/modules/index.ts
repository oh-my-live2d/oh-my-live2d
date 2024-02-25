import { defaultOptions } from '@/config';
import { Application } from 'pixi.js';
import {
  createElementByConfig,
  formatUnit,
  generateControlByConfig,
  getScreenSize,
  handleSplicingModelSource,
  printProjectInfo,
  setElStyle
} from '../utils';
import { changeLevitatedBtnContent, displayLevitatedBtn, hiddenLevitatedBtn } from './levitated-btn';
import { onTips, startPlayIdleTips, stopPlayIdleTips } from './tips';

import { Model } from '@/modules/model';
import { Stage } from '@/modules/stage';
import type { ControlID, DefaultModel, DefaultOptions, ElementList, ImportType, Live2DModelType } from '@/types';
import { Options } from '@/types/options';
import type CSS from 'csstype';
import { isNumber, mergeDeep } from 'tianjie';

class OhMyLive2D {
  // elementList: ElementList;
  // currentModelIndex: number;
  loadLive2DModel: any;
  importType: ImportType;
  app?: Application;

  // method
  displayLevitatedBtn = displayLevitatedBtn;
  hiddenLevitatedBtn = hiddenLevitatedBtn;
  changeLevitatedBtnContent = changeLevitatedBtnContent;

  onTips = onTips;
  startPlayIdleTips = startPlayIdleTips;
  stopPlayIdleTips = stopPlayIdleTips;

  _omlScreenSize = 'xl';
  _omlStatus = 'hidden';

  // ---------------------------------------------------- start
  private stage: Stage; //  舞台整体
  private application: Application;
  // models: Model[] = []; // 模型实例列表
  private modelIndex = 0; // 当前模型索引
  // ---------------------------------------------------- end
  constructor(private options: DefaultOptions, private live2dModel: Live2DModelType, importType: ImportType) {
    // this.currentModelIndex = 0;
    // this.importType = importType;
    // this.elementList = this.mountElement(options?.mountTarget as HTMLElement);
    // this.setGlobalStyle();
    // this.addEventListen();
    // this.modelLoader(options.models[this.currentModelIndex]);

    // ---------------------------------------------------------重构 start

    this.options.sayHello && this.sayHello();
    this.stage = new Stage(this.options.mountTarget);
    this.application = this.createApplication();

    this.stage.onSlideChangeEnd((status) => {
      // 出场入场执行完之后的回调
      console.log(status, '-------------------');
    });

    this.loadModel();
    // ---------------------------------------------------------重构 end
  }

  // ---------------------------------------------------------重构 start
  /**
   * 加载模型
   */
  loadModel() {
    // config.logLevel = config.LOG_LEVEL_VERBOSE;
    const model = new Model(this.live2dModel, this.options.models[this.modelIndex], this.application);
    model.setScale(this.currentModelOption.scale, this.currentModelOption.scale);
    model.setPosition(...(this.currentModelOption.position || []));
    model.loaded(({ width, height }) => {
      this.setStageStyle({
        width: this.currentModelOption.stageStyle?.width || width,
        height: this.currentModelOption.stageStyle?.height || height,
        backgroundColor: this.currentModelOption.stageStyle?.backgroundColor || 'rgba(0, 0, 0, 0)'
      });

      this.stage.slideIn(this.options.transitionTime);
    });
  }

  setStageStyle(style) {
    formatUnit(style);
    this.stage.setStyle(style);
    this.application.resize();
  }

  get currentModelOption() {
    return this.options.models[this.modelIndex];
  }
  /**
   * 加载下一个模型
   */
  loadNextModel() {
    if (isNumber(this.options.models?.length)) {
      if (this.modelIndex < this.options.models.length) {
        this.modelIndex++;
      } else {
        this.modelIndex = 0;
      }
      this.loadModel();
    }
  }

  sayHello() {
    printProjectInfo(this.importType);
  }

  /**
   * 创建pixi应用实例
   * @returns
   */
  private createApplication() {
    return new Application({
      view: this.stage.canvasElement,
      resolution: 2,
      autoStart: true,
      autoDensity: true,
      backgroundAlpha: 0,
      resizeTo: this.stage.element
    });
  }
  // ---------------------------------------------------------重构 end

  set omlStatus(val: 'hidden' | 'display') {
    switch (val) {
      case 'display':
        this.changeStageStyle({ visibility: 'visible' });
        this.stageSlideIn().then(() => {
          this.onTips('welcomeTips');
          this.startPlayIdleTips();
          this.hiddenLevitatedBtn();
        });
        break;

      case 'hidden':
        this.displayLevitatedBtn('text', '休息中');
        this.stopPlayIdleTips();
        if (this._omlStatus === 'hidden') return;
        this.stageSlideOut().then(() => {
          this.changeStageStyle({ visibility: 'hidden' });
        });
        break;
    }
  }

  set screenSize(val: 'xl' | 'xs') {
    this._omlScreenSize = val;
    switch (val) {
      case 'xl':
        this.omlStatus = 'display';
        break;
      case 'xs':
        this.options.mobileShow ? (this.omlStatus = 'display') : (this.omlStatus = 'hidden');
        break;
    }
  }

  createOmlElements() {
    const elementList = {};
    Object.keys(omlConfig.elements).forEach((key) => {
      elementList[key] = createElementByConfig(omlConfig.elements[key]);
    });
    return elementList as ElementList;
  }

  setGlobalStyle() {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = omlConfig.globalStyle;
    document.head.appendChild(styleEl);
  }

  mountElement(targetElement?: HTMLElement) {
    const omlElFragment = new DocumentFragment();
    const elementList = this.createOmlElements();
    const { stageEl, canvasEl, tipsEl, controlsEl, levitatedBtnEl } = elementList;
    stageEl.append(canvasEl, tipsEl, controlsEl);
    generateControlByConfig(controlsEl, omlConfig.controls, this.onClickControl.bind(this));
    omlElFragment.append(stageEl, levitatedBtnEl);

    const target = targetElement ?? document.body;
    target.appendChild(omlElFragment);
    // 刷新前卸载元素
    window.onbeforeunload = () => {
      target.removeChild(this.elementList.stageEl);
      target.removeChild(this.elementList.levitatedBtnEl);
    };
    return elementList;
  }

  changeStageStyle(styles: CSS.Properties) {
    setElStyle(this.elementList.stageEl, styles);
  }

  changeCanvasStyle(styles: CSS.Properties) {
    setElStyle(this.elementList.canvasEl, styles);
  }

  changeLevitatedBtnStyle(styles: CSS.Properties) {
    setElStyle(this.elementList.levitatedBtnEl, styles);
  }

  changeTipsStyle(styles: CSS.Properties) {
    setElStyle(this.elementList.tipsEl, styles);
  }

  reloadStageStyle() {
    let width = this.options.models[this.currentModelIndex].stageStyle.width;
    let height = this.options.models[this.currentModelIndex].stageStyle.height;
    width === 'auto' && this.model ? (width = this.model.width) : this.options.models[this.currentModelIndex].stageStyle.width;
    height === 'auto' && this.model ? (height = this.model.height) : this.options.models[this.currentModelIndex].stageStyle.height;
    this.changeStageStyle({
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: this.options.models[this.currentModelIndex].stageStyle.backgroundColor
    });
  }

  reloadModelTransform() {
    const x = this.options.models[this.currentModelIndex].x;
    const y = this.options.models[this.currentModelIndex].y;
    const scale = this.options.models[this.currentModelIndex].scale;
    let scaleX;
    let scaleY;
    if (Array.isArray(scale)) {
      scaleX = scale[0] * 0.1;
      scaleY = scale[1] * 0.1;
    } else {
      scaleX = scaleY = scale * 0.1;
    }
    this.model?.setTransform(x, y, scaleX, scaleY);
  }

  reloadTipsStyle() {
    if (!this.options.tips || !this.model) return;
    this.changeTipsStyle({
      width: `${this.options.tips.style.width}px`,
      height: `${this.options.tips.style.height}px`,
      top: `${0 - this.options.tips.style.offsetY}px`,
      left: `${this.model.width / 2 + this.model.x + this.options.tips.style.offsetX}px`
    });
  }

  reloadAllTransform() {
    this.reloadModelTransform();
    this.reloadStageStyle();
    this.reloadTipsStyle();
  }

  /**
   * 模型加载器
   * @param modelConfig
   */
  modelLoader(modelConfig: DefaultModel) {
    this.displayLevitatedBtn('loading');
    const modelSourcePath = handleSplicingModelSource(this.options.source, modelConfig.path);
    this.model = this.loadLive2DModel.fromSync(modelSourcePath, {
      onError: () => {
        this.displayLevitatedBtn('error');
      }
    });
    this.listenModelEvent();
  }

  /**
   * 加载下个模型
   */
  // async loadNextModel() {
  //   if (this.options.models.length > 1) {
  //     this.stopPlayIdleTips();
  //     await this.stageSlideOut();
  //     if (this.currentModelIndex >= this.options.models.length - 1) {
  //       this.currentModelIndex = 0;
  //     } else {
  //       this.currentModelIndex++;
  //     }
  //     this.modelLoader(this.options.models[this.currentModelIndex]);
  //   } else {
  //     this.displayLevitatedBtn('text', '无其他模型', 3000);
  //   }
  // }

  async onClickControl(controlID: ControlID) {
    switch (controlID) {
      case 'SwitchModel':
        await this.loadNextModel();
        break;
      case 'About':
        window.open('https://oml2d.com');
        break;
      default:
        // this.stopPlayIdleTips();
        this.displayLevitatedBtn('text', '施工中', 3000);
        break;
    }
  }

  listenModelEvent() {
    this.model?.once('ready', () => {
      this.reloadAllTransform();
    });

    this.model?.once('load', async () => {
      this.displayLevitatedBtn('text', '加载成功', 1000);
      if (!this.app) {
        this.app = new Application({
          view: this.elementList.canvasEl,
          resolution: 2,
          autoStart: true,
          autoDensity: true,
          backgroundAlpha: 0,
          resizeTo: this.elementList.stageEl
        });
        this.model && this.app.stage.addChild(this.model);
      } else {
        this.app.stage.removeChildAt(0);
        this.model && this.app.stage.addChild(this.model);
      }
      this.app.resize();
      this.screenSize = getScreenSize();
    });

    this.model?.on('hit', (hitAreaNames) => {
      ['Tap', 'tap_'].map((item) => {
        this.model?.motion(`${item}${hitAreaNames[0]}`);
      });
    });
  }

  addEventListen() {
    const xs = window.matchMedia('screen and (max-width: 768px)');
    // const xl = window.matchMedia('screen and (min-width: 768px');

    window.addEventListener('copy', () => {
      this.onTips('copyTips');
    });

    xs.addEventListener('change', (e) => {
      if (e.matches) this.screenSize = 'xs';
      else this.screenSize = 'xl';
    });
  }
}

// --------------------- 重构
// class OhMyLive2D {
//   constructor(private options: Options) {
//   }
// }
/**
 * 安装入口程序
 * @returns
 */
const setup = (importType: ImportType, live2dModel: Live2DModelType) => {
  // //  自动加载 将在HTML解析完毕后执行
  // window.document.addEventListener('DOMContentLoaded', () => {
  //   omlInstance ?? createOml2d();
  // });
  const originalLog = console.log;
  console.log = function () {
    // 检查第一个参数是否以 '[CSM][I]' 开头
    if (typeof arguments[0] === 'string' && arguments[0].startsWith('[CSM][I]')) {
      return;
    }

    originalLog?.apply(console, arguments as any);
  };
  /**
   * 根据自定义选项加载oml2d组件
   * @param options
   * @returns
   */
  const loadOhMyLive2D = (options: Options) => {
    // mergeOptions(defaultOptions, options);
    // createOml2d();
    // ------------------ 重构
    // 重写 console.log 函数

    new OhMyLive2D(mergeDeep(defaultOptions, options), live2dModel, importType);
    return {};
  };
  return loadOhMyLive2D;
};
export { OhMyLive2D, setup };

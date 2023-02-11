import { Application } from 'pixi.js';
import { defaultJsonPath, defaultOptions, omlConfig } from '@/config';
import {
  createElementByConfig,
  generateControlByConfig,
  getScreenSize,
  handleSplicingModelSource,
  mergeOptions,
  sayHello,
  setElStyle
} from '../utils';
import { displayLevitatedBtn, hiddenLevitatedBtn, changeLevitatedBtnContent } from './levitated-btn';
import { onTips, startPlayIdleTips, stopPlayIdleTips } from './tips';

import type { ImportType, Options, ElementList, DeepRequired, DefaultModel, ControlID } from '@/types';
import type { Live2DModel } from 'pixi-live2d-display';
import type CSS from 'csstype';

class OhMyLive2D {
  options: DeepRequired<Options<[DefaultModel, ...DefaultModel[]]>>;
  elementList: ElementList;
  currentModelIndex: number;
  loadLive2DModel: any;
  importType: ImportType;
  model?: Live2DModel;
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

  constructor(options: DeepRequired<Options<[DefaultModel, ...DefaultModel[]]>>, loadLive2DModel, importType: ImportType) {
    this.options = options;
    this.currentModelIndex = 0;
    this.loadLive2DModel = loadLive2DModel;
    this.importType = importType;
    this.elementList = this.mountElement();
    this.setGlobalStyle();
    this.addEventListen();
    this.modelLoader(options.models[this.currentModelIndex]);
    this.options.sayHello && sayHello(importType);
  }

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
        this.omlStatus = 'hidden';
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

  mountElement() {
    const omlElFragment = new DocumentFragment();
    const elementList = this.createOmlElements();
    const { stageEl, canvasEl, tipsEl, controlsEl, levitatedBtnEl } = elementList;
    stageEl.append(canvasEl, tipsEl, controlsEl);
    generateControlByConfig(controlsEl, omlConfig.controls, this.onClickControl.bind(this));
    omlElFragment.append(stageEl, levitatedBtnEl);
    document.body.appendChild(omlElFragment);

    // 刷新前卸载元素
    window.onbeforeunload = () => {
      document.body.removeChild(this.elementList.stageEl);
      document.body.removeChild(this.elementList.levitatedBtnEl);
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

    // this.changeCanvasStyle({
    //   width: `${this.model.width}px`,
    //   height: `${this.model.height}px`
    // });
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
  async loadNextModel() {
    if (this.options.models.length > 1) {
      this.stopPlayIdleTips();
      await this.stageSlideOut();
      if (this.currentModelIndex >= this.options.models.length - 1) {
        this.currentModelIndex = 0;
      } else {
        this.currentModelIndex++;
      }
      this.modelLoader(this.options.models[this.currentModelIndex]);
    } else {
      this.displayLevitatedBtn('text', '无其他模型', 3000);
    }
  }

  async onClickControl(controlID: ControlID) {
    switch (controlID) {
      case 'SwitchModel':
        await this.loadNextModel();
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

  stageSlideIn() {
    this.changeStageStyle({
      animationName: 'oml-stage-slide-in',
      animationDuration: `${this.options.transitionTime}ms`,
      animationFillMode: 'forwards'
    });

    return new Promise<void>((resolve) => {
      setTimeout(async () => {
        this._omlStatus = 'display';
        resolve();
      }, this.options.transitionTime);
    });
  }

  stageSlideOut() {
    this.changeStageStyle({
      animationName: 'oml-stage-slide-out',
      animationDuration: `${this.options.transitionTime}ms`,
      animationFillMode: 'forwards'
    });
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        this._omlStatus = 'hidden';
        resolve();
      }, this.options.transitionTime)
    );
  }
}

/**
 * 安装入口程序
 * @returns
 */
const setup = (importType: ImportType, loadLive2DModel) => {
  let omlInstance: OhMyLive2D;
  (defaultOptions.models as DefaultModel).path = defaultJsonPath[importType];

  const createOml2d = () => {
    defaultOptions.models = Array.isArray(defaultOptions.models) ? defaultOptions.models : [defaultOptions.models];
    omlInstance = new OhMyLive2D(defaultOptions as DeepRequired<Options<[DefaultModel, ...DefaultModel[]]>>, loadLive2DModel, importType);
  };

  //  自动加载 将在HTML解析完毕后执行
  window.document.addEventListener('DOMContentLoaded', () => {
    omlInstance ?? createOml2d();
  });

  /**
   * 根据自定义选项加载oml2d组件
   * @param options
   * @returns
   */
  const loadOhMyLive2D = (options: Options) => {
    mergeOptions(defaultOptions, options);
    createOml2d();
    return {};
  };
  return loadOhMyLive2D;
};
export { setup, OhMyLive2D };

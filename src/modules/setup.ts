import { Application } from 'pixi.js';
import { defaultConfig, tips } from '@/config';
import {
  appendWrapperEl,
  createSuspendBtnEl,
  getScreenSize,
  mediaSearchChange,
  registerEvent,
  setLevitatedSphereContent
} from './element';
import {
  displayLive2d,
  setGlobalInitialStyle,
  hiddenLevitatedSphere,
  setWrapperStyle,
  hiddenLive2d,
  displayLevitatedSphere
} from './style';
import { AdaptiveConfig, Config, Events, ImportType, OhMyLive2D, WrapperContentEls } from '@/types/index';
import { sleep, handleDefaultModelSource, sayHello, setElStyle } from '@/utils/index';
import { playIdleTips, showTipsFrameMessage, playWelcomeTips } from './tips-frame';
import type { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display';

class LoadOhMyLive2D {
  L2DModel: any;
  model: Live2DModel;
  wrapperContentEls?: WrapperContentEls;
  wrapperEl?: HTMLDivElement;
  levitatedSphereEl: HTMLDivElement;
  config: Config;
  onEvents: Events;
  importType: ImportType;
  adaptiveConfig?: AdaptiveConfig;
  motionPreloadStrategy: MotionPreloadStrategy;
  isTips: boolean;

  // method
  mediaSearchChange = mediaSearchChange;
  showTipsFrameMessage = showTipsFrameMessage;
  displayLive2d = displayLive2d;
  appendWrapperEl = appendWrapperEl;
  setWrapperStyle = setWrapperStyle;
  hiddenLevitatedSphere = hiddenLevitatedSphere;
  displayLevitatedSphere = displayLevitatedSphere;
  registerEvent = registerEvent;
  playIdleTips = playIdleTips;
  playWelcomeTips = playWelcomeTips;
  hiddenLive2d = hiddenLive2d;
  setLevitatedSphereContent = setLevitatedSphereContent;

  constructor(defaultConfig: Config, L2DModel, importType: ImportType, motionPreloadStrategy: MotionPreloadStrategy) {
    this.L2DModel = L2DModel;
    this.config = defaultConfig;
    this.importType = importType;
    this.onEvents = {};
    this.motionPreloadStrategy = motionPreloadStrategy;
    this.isTips = true;

    this.levitatedSphereEl = createSuspendBtnEl();
    this.displayLevitatedSphere();
    this.setLevitatedSphereContent('loading');

    // 同步创建模型 - 设置动作预加载
    this.model = this.L2DModel.fromSync(this.config.modelSource, { motionPreload: motionPreloadStrategy });

    this.initialization();
  }

  async initialization() {
    this.config.sayHello && sayHello(this.importType);

    // 所有资源准备完毕后
    this.model.once('ready', async () => {
      const { wrapperEl, canvasEl, tooltipEl } = this.appendWrapperEl();

      this.wrapperEl = wrapperEl;
      this.wrapperContentEls = { canvasEl, tooltipEl };

      this.registerEvent();

      this.setModelPosition();

      this.setModelScale();

      this.setWrapperStyle();

      const app = this.createPixiApp();

      app.stage.addChild(this.model);

      this.setLevitatedSphereContent('text', '加载完成');

      await sleep(100);

      if (getScreenSize() === 'xl') {
        this.hiddenLevitatedSphere();
        await this.displayLive2d();
      } else {
        await sleep(500);
        this.setLevitatedSphereContent('text', '休息中');
        this.isTips = false;
      }

      await this.playWelcomeTips();
      this.playIdleTips();
    });

    // this.model.on('hit', (hitAreaNames) => {
    //   console.log(hitAreaNames);
    //   this.model.motion('flick_head');
    // });
  }

  // 设置模型位置
  setModelPosition() {
    this.model.x = this.config.position![0];
    this.model.y = this.config.position![1];
  }

  // 设置缩放比例
  setModelScale() {
    if (Array.isArray(this.config!.scale)) {
      this.model.scale.set(this.config!.scale[0], this.config!.scale[1]);
    } else {
      this.model.scale.set(this.config!.scale);
    }

    setElStyle(this.wrapperContentEls!.tooltipEl, { left: `${this.model.width / 2 + this.config.position![0]}px` });
  }

  // 创建app
  createPixiApp() {
    return new Application({
      view: this.wrapperContentEls!.canvasEl,
      autoStart: true,
      backgroundAlpha: 0,
      resizeTo: this.wrapperEl
    });
  }
}

// 入口函数
const setup = (importType: ImportType, L2DModel, motionPreloadStrategy: MotionPreloadStrategy) => {
  let omlInstance: LoadOhMyLive2D;
  const oml: OhMyLive2D = {
    onAfterDisplay: (callback: () => void) => (omlInstance.onEvents.afterDisplay = callback)
  };

  // 设置全局初始样式
  setGlobalInitialStyle();

  // 根据引入类型设置默认模型来源
  defaultConfig.modelSource = handleDefaultModelSource(importType);

  //  自动装载方法 将在HTML解析完毕后执行
  window.document.addEventListener('DOMContentLoaded', () => {
    // 如果已被手动装载则不再实例化装载类
    omlInstance ?? new LoadOhMyLive2D(defaultConfig, L2DModel, importType, motionPreloadStrategy);
  });

  const loadLive2DModel = (config?: Config) => {
    Object.assign(defaultConfig, config);
    if (defaultConfig.tips?.idleTips) Object.assign(tips.idleTips, defaultConfig.tips.idleTips);
    else if (defaultConfig.tips?.idleTips === false) tips.idleTips.message = [];

    omlInstance = new LoadOhMyLive2D(defaultConfig, L2DModel, importType, motionPreloadStrategy);
    return oml;
  };

  return loadLive2DModel;
};

export { setup, LoadOhMyLive2D };

import { Application } from 'pixi.js';
import { defaultConfig, TIPS } from '@/config';
import { appendWrapperEl, registerEvent } from './element';
import { displayLive2d, setInitialStyle, setGlobalInitialStyle, hiddenSuspendBtn } from './style';
import { IConfig, Events, ImportType, Oml, WrapperContentEls, LoadType } from '@/types/index';
import { sleep, handleDefaultModelSource, sayHello } from '@/utils/index';
import { playIdleTips, showTipsFrameMessage, playWelcomeTips } from './tips-frame';
import type { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display';

class SetupLive2DModel {
  app: Application;
  model: Live2DModel;
  constructor(wrapperEl, canvasEl, config: IConfig, model: Live2DModel) {
    this.app = this.createApp(wrapperEl, canvasEl);
    this.model = model;
    this.setModel(config);
  }

  // 创建PIXI APP
  createApp(wrapperEl, canvasEl) {
    return new Application({
      view: canvasEl,
      autoStart: true,
      backgroundAlpha: 0,
      resizeTo: wrapperEl
    });
  }

  // 设置模型
  setModel(config: IConfig) {
    this.model.x = config.x!;
    this.model.y = config.y!;
    if (Array.isArray(config.scale)) {
      this.model.scale.set(config.scale[0], config.scale[1]);
    } else {
      this.model.scale.set(config.scale);
    }
  }
}

class OhMyLive2D {
  L2DModel: any;
  model: Live2DModel;
  wrapperContentEls: WrapperContentEls;
  wrapperEl?: HTMLDivElement;
  suspendBtnEl?: HTMLDivElement;
  config: IConfig;
  onEvents: Events;
  importType: ImportType;
  motionPreloadStrategy: MotionPreloadStrategy;
  // method
  showTipsFrameMessage = showTipsFrameMessage;
  displayLive2d = displayLive2d;
  appendWrapperEl = appendWrapperEl;
  setInitialStyle = setInitialStyle;
  hiddenSuspendBtn = hiddenSuspendBtn;
  registerEvent = registerEvent;
  playIdleTips = playIdleTips;
  playWelcomeTips = playWelcomeTips;

  constructor(
    defaultConfig: IConfig,
    L2DModel,
    loadType: LoadType,
    importType: ImportType,
    motionPreloadStrategy: MotionPreloadStrategy
  ) {
    this.L2DModel = L2DModel;
    this.config = defaultConfig;
    this.importType = importType;
    this.onEvents = {};
    this.motionPreloadStrategy = motionPreloadStrategy;
    this.wrapperContentEls = { canvasEl: null, tooltipEl: null };

    // 同步创建模型 - 设置动作预加载
    this.model = this.L2DModel.fromSync(this.config.modelSource, { motionPreload: motionPreloadStrategy });

    loadType === 'auto'
      ? this.initialization()
      : window.document.addEventListener('DOMContentLoaded', this.initialization.bind(this));
  }

  async initialization() {
    const { wrapperEl, canvasEl, suspendBtnEl, tooltipEl } = this.appendWrapperEl();
    this.config.sayHello && sayHello(this.importType);
    this.suspendBtnEl = suspendBtnEl;
    this.wrapperEl = wrapperEl;
    this.wrapperContentEls.canvasEl = canvasEl;
    this.wrapperContentEls.tooltipEl = tooltipEl;

    // 设置初始样式
    this.setInitialStyle();

    // 注册事件
    this.registerEvent();

    // 安装live2d模型
    const appInstance = new SetupLive2DModel(this.wrapperEl, this.wrapperContentEls.canvasEl, this.config, this.model);

    // 所有资源准备完毕后
    this.model.once('ready', async () => {
      appInstance.app.stage.addChild(this.model);
      this.suspendBtnEl!.innerHTML = `<div>加载完成</div>`;
      this.hiddenSuspendBtn();
      await sleep(100);
      await this.displayLive2d().then(() => this.onEvents.afterDisplay && this.onEvents.afterDisplay());
      await this.playWelcomeTips();
      this.playIdleTips();
    });

    // this.model.on('hit', (hitAreaNames) => {
    //   console.log(hitAreaNames);
    //   this.model.motion('flick_head');
    // });
  }
}

// 入口函数
const setupOhMyLive2d = (importType: ImportType, L2DModel, motionPreloadStrategy: MotionPreloadStrategy) => {
  let omlInstance: OhMyLive2D;

  const oml: Oml = {
    onAfterDisplay: (callback: () => void) => (omlInstance.onEvents.afterDisplay = callback)
  };

  // 设置全局初始样式
  setGlobalInitialStyle();

  // 根据引入类型设置默认模型来源
  defaultConfig.modelSource = handleDefaultModelSource(importType);

  //  自动装载方法 将在HTML解析完毕后执行
  window.document.addEventListener('DOMContentLoaded', () => {
    // 如果已被手动装载则不再实例化装载类
    omlInstance ?? new OhMyLive2D(defaultConfig, L2DModel, 'auto', importType, motionPreloadStrategy);
  });

  // 导出的手动装载方法  手动装载时将不再自动装载
  const loadLive2DModel = (config?: IConfig) => {
    Object.assign(defaultConfig, config);
    if (defaultConfig.tips?.idleTips) Object.assign(TIPS.idleTips, defaultConfig.tips.idleTips);
    else if (defaultConfig.tips?.idleTips === false) TIPS.idleTips.message = [];

    omlInstance = new OhMyLive2D(defaultConfig, L2DModel, 'manual', importType, motionPreloadStrategy);
    return oml;
  };

  return loadLive2DModel;
};

export { setupOhMyLive2d, OhMyLive2D };

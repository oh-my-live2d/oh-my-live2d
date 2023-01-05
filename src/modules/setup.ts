import { Application } from 'pixi.js';
import { defaultConfig, TIPS } from '@/config';
import { appendWrapperEl, registerEvent } from './element';
import { displayLive2d, setGlobalInitialStyle, hiddenSuspendBtn, setStageStyle } from './style';
import { AdaptiveConfig, Config, Events, ImportType, OhMyLive2D, WrapperContentEls } from '@/types/index';
import { sleep, handleDefaultModelSource, sayHello } from '@/utils/index';
import { playIdleTips, showTipsFrameMessage, playWelcomeTips } from './tips-frame';
import type { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display';

class LoadOhMyLive2D {
  L2DModel: any;
  model: Live2DModel;
  wrapperContentEls: WrapperContentEls;
  wrapperEl?: HTMLDivElement;
  suspendBtnEl?: HTMLDivElement;
  config: Config;
  onEvents: Events;
  importType: ImportType;
  motionPreloadStrategy: MotionPreloadStrategy;
  screenSize: 'xs' | 'md' | 'xl';
  // method
  showTipsFrameMessage = showTipsFrameMessage;
  displayLive2d = displayLive2d;
  appendWrapperEl = appendWrapperEl;
  setStageStyle = setStageStyle;
  hiddenSuspendBtn = hiddenSuspendBtn;
  registerEvent = registerEvent;
  playIdleTips = playIdleTips;
  playWelcomeTips = playWelcomeTips;

  constructor(defaultConfig: Config, L2DModel, importType: ImportType, motionPreloadStrategy: MotionPreloadStrategy) {
    this.L2DModel = L2DModel;
    this.config = defaultConfig;
    this.importType = importType;
    this.screenSize = 'xl';
    this.onEvents = {};
    this.motionPreloadStrategy = motionPreloadStrategy;
    this.wrapperContentEls = {};
    // 同步创建模型 - 设置动作预加载
    this.model = this.L2DModel.fromSync(this.config.modelSource, { motionPreload: motionPreloadStrategy });

    this.initialization();
  }

  async initialization() {
    const { wrapperEl, canvasEl, suspendBtnEl, tooltipEl } = this.appendWrapperEl();
    this.config.sayHello && sayHello(this.importType);
    this.suspendBtnEl = suspendBtnEl;
    this.wrapperEl = wrapperEl;
    this.wrapperContentEls.canvasEl = canvasEl;
    this.wrapperContentEls.tooltipEl = tooltipEl;

    // 注册事件
    this.registerEvent();
    this.setStageStyle();
    this.setStageConfig();
    this.setModelPosition();
    const app = this.createPixiApp();

    // 所有资源准备完毕后
    this.model.once('ready', async () => {
      app.stage.addChild(this.model);
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

  setModelPosition() {
    this.model.x = this.config.modelPosition![0];
    this.model.y = this.config.modelPosition![1];
  }

  // 设置舞台配置
  setStageConfig() {
    let adaptiveConfig: AdaptiveConfig | undefined;
    switch (this.screenSize) {
      case 'xs':
        adaptiveConfig = this.config.stage?.xs;
        break;
      case 'md':
        adaptiveConfig = this.config.stage?.md;
        break;
      case 'xl':
        adaptiveConfig = this.config.stage?.xl;
        break;
      default:
        break;
    }
    if (Array.isArray(adaptiveConfig!.scale)) {
      this.model.scale.set(adaptiveConfig!.scale[0], adaptiveConfig!.scale[1]);
    } else {
      this.model.scale.set(adaptiveConfig!.scale);
    }
  }

  updateStage() {
    this.setStageStyle();
    this.setStageConfig();
  }

  // 创建app
  createPixiApp() {
    return new Application({
      view: this.wrapperContentEls.canvasEl,
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
    if (defaultConfig.tips?.idleTips) Object.assign(TIPS.idleTips, defaultConfig.tips.idleTips);
    else if (defaultConfig.tips?.idleTips === false) TIPS.idleTips.message = [];

    omlInstance = new LoadOhMyLive2D(defaultConfig, L2DModel, importType, motionPreloadStrategy);
    return oml;
  };

  return loadLive2DModel;
};

export { setup, LoadOhMyLive2D };

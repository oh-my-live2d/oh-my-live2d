import { Application } from 'pixi.js';
import { appendWrapperEl, createWrapperElContent } from './element';
import { appendGlobalStyle, displayLive2d } from './style';
import { defaultConfig } from '@/config';
import { IConfig, IEvents, ImportType, IWrapperContentEls, LoadType } from '@/types/index';
import type { Live2DModel } from 'pixi-live2d-display';
import '@/assets/icon/iconfont';
import { handleDefaultModelSource, sayHello } from '../utils/index';

class SetupLive2DModel {
  app: Application;
  model: Live2DModel;
  constructor(wrapperEl, canvasEl, config: IConfig, model: Live2DModel) {
    this.app = this.createApp(wrapperEl, canvasEl);
    this.model = model;
    this.setModel(config);
    this.model.once('load', () => {
      this.app.stage.addChild(this.model);
    });
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
  wrapperContentEls?: IWrapperContentEls;
  wrapperEl?: HTMLDivElement;
  importType: ImportType;
  config: IConfig;
  onEvents: IEvents;

  // method
  displayLive2d = displayLive2d;
  appendGlobalStyle = appendGlobalStyle;
  appendWrapperEl = appendWrapperEl;
  createWrapperElContent = createWrapperElContent;
  sayHello = sayHello;

  constructor(defaultConfig: IConfig, L2DModel, importType, loadType: LoadType) {
    this.L2DModel = L2DModel;
    this.config = defaultConfig;
    this.importType = importType;
    this.onEvents = {};
    this.config.modelSource = handleDefaultModelSource(importType);
    // 同步创建模型
    this.model = this.L2DModel.fromSync(this.config.modelSource);

    loadType === 'auto'
      ? this.initialization()
      : window.document.addEventListener('DOMContentLoaded', this.initialization.bind(this));
  }

  initialization() {
    this.sayHello();
    // 加入全局样式表
    this.appendGlobalStyle();
    this.wrapperEl = this.appendWrapperEl();
    this.wrapperContentEls = this.createWrapperElContent();

    // 安装live2d模型
    new SetupLive2DModel(this.wrapperEl, this.wrapperContentEls.canvasEl, this.config, this.model);

    // 所有资源准备完毕后
    this.model.once('ready', this.displayLive2d.bind(this));
  }
}

// 入口函数
const setupOhMyLive2d = (importType: ImportType, L2DModel) => {
  let omlInstance: OhMyLive2D;

  //  自动装载方法 将在HTML解析完毕后执行
  window.document.addEventListener('DOMContentLoaded', () => {
    // 如果已被手动装载则不再实例化装载类
    omlInstance ?? new OhMyLive2D(defaultConfig, L2DModel, importType, 'auto');
  });

  // 暴露出去的手动装载方法  手动装载时将不再自动装载
  const loadModel = (config?: IConfig) => {
    
    Object.assign(defaultConfig, config);
    omlInstance = new OhMyLive2D(defaultConfig, L2DModel, importType, 'manual');
    return {
      onAfterDisplay: (callback: () => void) => (omlInstance.onEvents.afterDisplay = callback)
    };
  };

  return loadModel;
};

export { setupOhMyLive2d, OhMyLive2D };

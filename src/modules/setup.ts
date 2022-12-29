import { Application } from 'pixi.js';
import { appendWrapperEl, createWrapperElContent } from './element';
import { appendGlobalStyle, displayLive2d } from './style';
import { defaultConfig } from '@/config';
import { IConfig, ImportType, IWrapperContentEls } from '@/types/index';
import type { Live2DModel } from 'pixi-live2d-display';
import '@/assets/icon/iconfont';
import { handleDefaultModelSource } from '../utils/index';

class LoadLive2DModel {
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
  displayLive2d = displayLive2d;
  appendGlobalStyle = appendGlobalStyle;
  appendWrapperEl = appendWrapperEl;
  createWrapperElContent = createWrapperElContent;

  constructor(defaultConfig: IConfig, L2DModel, importType) {
    this.L2DModel = L2DModel;
    this.config = defaultConfig;
    this.importType = importType;
    this.model = this.L2DModel.fromSync(this.config.modelSource);
  }

  initialization(startFn) {
    this.sayHello();
    // 加入全局样式表
    this.appendGlobalStyle();
    this.wrapperEl = this.appendWrapperEl();
    this.wrapperContentEls = this.createWrapperElContent();

    // 装载模型
    new LoadLive2DModel(this.wrapperEl, this.wrapperContentEls.canvasEl, this.config, this.model);

    // 所有资源准备完毕后
    this.model.once('ready', () => {
      this.displayLive2d();
      window.document.removeEventListener('DOMContentLoaded', startFn);
    });
  }

  sayHello() {
    if (!this.config.sayHello) return;
    const args = [
      `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${this.importType} ✨ %c %c 🎉🎉🎉 \n`,
      'background: #fff; padding:5px 0;',
      'background: #ff66a5; padding:5px 0;',
      'color: #fff; background: #030307; padding:5px 0;',
      'background: #ff66a5; padding:5px 0;',
      'background: #fff; padding:5px 0;'
    ];
    console.log(...args);
  }
}

// 入口函数
const setupOhMyLive2d = (importType: ImportType, L2DModel) => {
  const start = () => {
    const omlInstance = new OhMyLive2D(defaultConfig, L2DModel, importType);
    omlInstance.initialization(start);
  };

  window.document.addEventListener('DOMContentLoaded', start);

  return function (config: IConfig) {
    defaultConfig.modelSource = handleDefaultModelSource(importType);
    Object.assign(defaultConfig, config);
  };
};

export { setupOhMyLive2d, OhMyLive2D };

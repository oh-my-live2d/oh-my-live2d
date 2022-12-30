import { Application } from 'pixi.js';
import { defaultConfig } from '@/config';
import { appendWrapperEl, createWrapperElContent } from './element';
import { displayLive2d, setDefaultStyle } from './style';
import { IConfig, IEvents, ImportType, IWrapperContentEls, LoadType } from '@/types/index';
import { handleDefaultModelSource, sayHello } from '@/utils/index';
import type { Live2DModel } from 'pixi-live2d-display';
import '@/assets/icon/iconfont';

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
  wrapperContentEls: IWrapperContentEls;
  wrapperEl: HTMLDivElement;
  config: IConfig;
  onEvents: IEvents;
  importType: ImportType;
  // method
  displayLive2d = displayLive2d;
  appendWrapperEl = appendWrapperEl;
  createWrapperElContent = createWrapperElContent;
  setDefaultStyle = setDefaultStyle;

  constructor(defaultConfig: IConfig, L2DModel, loadType: LoadType, importType: ImportType) {
    this.L2DModel = L2DModel;
    this.config = defaultConfig;
    this.importType = importType;
    this.onEvents = {};
    // 同步创建模型
    this.model = this.L2DModel.fromSync(this.config.modelSource);
    this.wrapperEl = this.appendWrapperEl();
    this.wrapperContentEls = this.createWrapperElContent();

    this.setDefaultStyle();

    loadType === 'auto'
      ? this.initialization()
      : window.document.addEventListener('DOMContentLoaded', this.initialization.bind(this));
  }

  initialization() {
    this.config.sayHello && sayHello(this.importType);
    // 加入全局样式表

    // 监听刷新前 - 移除元素 - 解决空白滞留问题
    window.onbeforeunload = () => {
      document.body.removeChild(this.wrapperEl!);
    };

    // 安装live2d模型
    new SetupLive2DModel(this.wrapperEl, this.wrapperContentEls.canvasEl, this.config, this.model);

    // 所有资源准备完毕后
    this.model.once('ready', this.displayLive2d.bind(this));
  }
}

// 入口函数
const setupOhMyLive2d = (importType: ImportType, L2DModel) => {
  let omlInstance: OhMyLive2D;

  // 根据引入类型设置默认模型来源
  defaultConfig.modelSource = handleDefaultModelSource(importType);

  //  自动装载方法 将在HTML解析完毕后执行
  window.document.addEventListener('DOMContentLoaded', () => {
    // 如果已被手动装载则不再实例化装载类
    omlInstance ?? new OhMyLive2D(defaultConfig, L2DModel, 'auto', importType);
  });

  // 暴露出去的手动装载方法  手动装载时将不再自动装载
  const loadModel = (config?: IConfig) => {
    Object.assign(defaultConfig, config);
    omlInstance = new OhMyLive2D(defaultConfig, L2DModel, 'manual', importType);
    return {
      onAfterDisplay: (callback: () => void) => (omlInstance.onEvents.afterDisplay = callback)
    };
  };

  return loadModel;
};

export { setupOhMyLive2d, OhMyLive2D };

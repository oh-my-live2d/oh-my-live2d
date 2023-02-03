import { Application } from 'pixi.js';
import { merge } from 'lodash-es';
import { defaultJsonPath, defaultOptions } from '@/config';
import { appendWrapperEl, createSuspendBtnEl, getScreenSize, mediaSearchChange, registerEvent, setLevitatedSphereContent } from './element';

import { sleep, sayHello, handleSplicingModelSource } from '@/utils/index';
import { playIdleTips, showTipsFrameMessage, onTips, getWelcomeMessage, getTipsConfig, enableTips, disableTips } from './tips';
import {
  displayLive2d,
  setGlobalInitialStyle,
  hiddenLevitatedSphere,
  setWrapperStyle,
  hiddenLive2d,
  displayLevitatedSphere,
  setTooltipStyle
} from './style';
import type { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display';
import type { Options, Events, ImportType, OhMyLive2D, WrapperContentEls, DefaultOptions } from '@/types/index';

class LoadOhMyLive2D {
  L2DModel: any;
  model: Live2DModel;
  wrapperContentEls?: WrapperContentEls;
  wrapperEl?: HTMLDivElement;
  levitatedSphereEl: HTMLDivElement;
  options: DefaultOptions;
  onEvents: Events;
  importType: ImportType;
  motionPreloadStrategy: MotionPreloadStrategy;
  isTips: boolean;
  // method
  stopIdleTips?: () => void;
  enableTips = enableTips;
  disableTips = disableTips;
  mediaSearchChange = mediaSearchChange;
  showTipsFrameMessage = showTipsFrameMessage;
  displayLive2d = displayLive2d;
  appendWrapperEl = appendWrapperEl;
  setWrapperStyle = setWrapperStyle;
  hiddenLevitatedSphere = hiddenLevitatedSphere;
  displayLevitatedSphere = displayLevitatedSphere;
  registerEvent = registerEvent;
  playIdleTips = playIdleTips;
  onTips = onTips;
  hiddenLive2d = hiddenLive2d;
  setLevitatedSphereContent = setLevitatedSphereContent;
  getWelcomeMessage = getWelcomeMessage;
  getTipsConfig = getTipsConfig;
  setTooltipStyle = setTooltipStyle;

  constructor(options: Options, L2DModel, importType: ImportType, motionPreloadStrategy: MotionPreloadStrategy) {
    this.L2DModel = L2DModel;
    this.importType = importType;
    this.onEvents = {};
    this.motionPreloadStrategy = motionPreloadStrategy;
    this.isTips = true;
    this.options = merge(defaultOptions, options);

    this.levitatedSphereEl = createSuspendBtnEl();
    this.displayLevitatedSphere();
    this.setLevitatedSphereContent('loading');

    const modelSource = handleSplicingModelSource(this.options.source, this.options.models.path);

    // 同步创建模型 - 设置动作预加载
    this.model = this.L2DModel.fromSync(modelSource, {
      motionPreload: motionPreloadStrategy,
      onError: () => {
        this.setLevitatedSphereContent('text', '加载失败');
      }
    });

    this.initialization();
  }

  async initialization() {
    this.options.sayHello && sayHello(this.importType);

    // 所有资源准备完毕后
    this.model.once('ready', async () => {
      const { wrapperEl, canvasEl, tooltipEl } = this.appendWrapperEl();

      this.wrapperEl = wrapperEl;
      this.wrapperContentEls = { canvasEl, tooltipEl };

      this.registerEvent();

      this.setModelPosition();

      this.setModelScale();

      this.setWrapperStyle();

      this.setTooltipStyle();

      const app = this.createPixiApp();

      app.stage.addChild(this.model);
      this.setLevitatedSphereContent('text', '加载完成');

      await sleep(100);

      if (getScreenSize() === 'xl') {
        this.hiddenLevitatedSphere();
        await this.displayLive2d();
        await this.onTips('welcomeTips');
        this.enableTips();
      } else {
        await sleep(500);
        this.setLevitatedSphereContent('text', '休息中');
        this.disableTips();
      }
    });

    this.model.on('hit', (hitAreaNames) => {
      ['Tap', 'tap_'].map((item) => {
        this.model.motion(`${item}${hitAreaNames[0]}`);
      });
      // this.model.motion('TapHitAreaHead');
    });
  }

  // 设置模型位置
  setModelPosition() {
    this.model.x = this.options.models.x;
    this.model.y = this.options.models.y;
  }

  // 设置缩放比例
  setModelScale() {
    if (Array.isArray(this.options.models.scale)) {
      this.model.scale.set(this.options.models.scale[0] * 0.1, this.options.models.scale[1] * 0.1);
    } else {
      this.model.scale.set(this.options.models.scale * 0.1);
    }
  }

  // 创建app
  createPixiApp() {
    return new Application({
      view: this.wrapperContentEls!.canvasEl,
      resolution: 2,
      autoStart: true,
      backgroundAlpha: 0,
      autoDensity: true,
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
  defaultOptions.models.path = defaultJsonPath[importType];

  //  自动装载方法 将在HTML解析完毕后执行
  window.document.addEventListener('DOMContentLoaded', () => {
    // 如果已被手动装载则不再实例化装载类
    omlInstance ?? new LoadOhMyLive2D(defaultOptions, L2DModel, importType, motionPreloadStrategy);
  });

  const loadLive2DModel = (options: Options = {}) => {
    omlInstance = new LoadOhMyLive2D(options, L2DModel, importType, motionPreloadStrategy);
    return oml;
  };

  return loadLive2DModel;
};

export { setup, LoadOhMyLive2D };

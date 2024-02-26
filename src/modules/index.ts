import { defaultOptions } from '@/config';
import { Application } from 'pixi.js';
import { formatUnit, printProjectInfo } from '../utils';

import { WindowSizeType } from '@/constants';
import { Menus } from '@/modules/menus';
import { Model } from '@/modules/model';
import { Stage } from '@/modules/stage';
import { StatusBar, SystemStete } from '@/modules/status-bar';
import { Tips } from '@/modules/tips';
import type { DefaultOptions, Live2DModelType } from '@/types';
import { Options } from '@/types/options';
import { isNumber, mergeDeep } from 'tianjie';

class OhMyLive2D {
  private stage: Stage;
  private statusBar: StatusBar;
  private tips: Tips;
  private menus: Menus;
  private application: Application;
  private modelIndex = 0; // 当前模型索引
  private windowSizeType: WindowSizeType = WindowSizeType.PC; // 当前窗口大小
  private mediaQuery = window.matchMedia('screen and (max-width: 768px)'); // 窗口大小的媒体查询

  constructor(private options: DefaultOptions, private live2dModel: Live2DModelType) {
    this.options.sayHello && this.sayHello();
    this.stage = new Stage(this.options.parentElement); // 实例化舞台
    this.statusBar = new StatusBar(this.options.parentElement); // 实例化状态条
    this.tips = new Tips(this.stage.element, this.options.tips); // 提示框
    this.menus = new Menus(this.stage.element); // 菜单
    this.application = this.createApplication();
    this.initialize();
  }

  // 初始化
  initialize() {
    this.verifyWindowSizeType();
    if (this.windowSizeType !== WindowSizeType.PC) {
      this.statusBar.popup('暂不支持移动端', SystemStete.info, 8000);
      return;
    }
    this.loadModel();
    this.registerEvents();
  }

  // 校验当前窗口大小
  verifyWindowSizeType() {
    if (this.mediaQuery.matches) this.windowSizeType = WindowSizeType.MOBILE;
    else this.windowSizeType = WindowSizeType.PC;
    this.mediaQuery.addEventListener('change', (e) => {
      if (e.matches) this.windowSizeType = WindowSizeType.MOBILE;
      else this.windowSizeType = WindowSizeType.PC;
    });
  }

  /**
   * 加载模型
   */
  loadModel(showLoading = true) {
    showLoading && this.statusBar.showLoading();
    const model = new Model(this.live2dModel, this.currentModelOption, this.application);
    model?.setScale(this.currentModelOption?.scale, this.currentModelOption?.scale);
    model?.setPosition(...(this.currentModelOption?.position || []));
    // 模型所有资源加载完毕
    model?.onLoaded(({ width, height }) => {
      this.setStageStyle({
        width: this.currentModelOption.stageStyle?.width || width,
        height: this.currentModelOption.stageStyle?.height || height,
        backgroundColor: this.currentModelOption.stageStyle?.backgroundColor || 'rgba(0, 0, 0, 0)'
      });
      this.stage.slideIn(this.options?.transitionTime);
      this.statusBar.hideLoading();
    });

    // 加载失败
    model?.onFail((e) => {
      this.statusBar.loadingError(this.loadModel.bind(this));
      console.error(e);
    });
  }

  setStageStyle(style) {
    formatUnit(style);
    this.stage.setStyle(style);
    this.application.resize();
  }

  /**
   * 获取当前的模型配置选项
   */
  get currentModelOption() {
    return this.options.models[this.modelIndex];
  }
  /**
   * 加载下一个模型
   */
  async loadNextModel() {
    if (this.options.models.length <= 1) {
      await this.tips.notification('没找到其他模型哦...', 3000, 9);
      return;
    }
    this.tips.clear();
    this.statusBar.showLoading();
    await this.stage.slideOut(this.options.transitionTime);
    if (this.application.stage.children.length >= 1) this.application.stage.removeChildAt(0); // 从舞台移除上一个模型

    if (isNumber(this.options.models?.length)) {
      if (this.modelIndex < this.options.models.length - 1) {
        this.modelIndex++;
      } else {
        this.modelIndex = 0;
      }
      this.loadModel(false);
    }
  }

  sayHello() {
    printProjectInfo();
  }

  registerEvents() {
    // 点击菜单按钮
    this.menus.onClickItem((name) => {
      switch (name) {
        // 切换模型
        case 'SwitchModel':
          this.loadNextModel();
          return;
        case 'Play':
          this.tips.showMessage('抱歉, 这个功能正在施工...', 3000, 9);
          // this.tips.showMessage(getRandomNum(1, 10));
          return;
        case 'About':
          window.open('https://oml2d.com');
          return;
      }
    });

    // copy 事件
    window.addEventListener('copy', () => {
      console.log('copy!');
    });

    // 出场入场动画执行结束之后的事件回调
    this.stage.onSlideChangeEnd(async (status) => {
      if (status) {
        await this.tips.welcome();
      }
    });
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
}

/**
 * 安装入口程序
 * @returns
 */
export const setup = (live2dModel: Live2DModelType) => {
  /**
   * 根据自定义选项加载oml2d组件
   * @param options
   * @returns
   */
  const loadOhMyLive2D = (options: Options) => {
    const { parentElement } = options;
    const finalOptions = mergeDeep(defaultOptions, options);
    finalOptions.parentElement = parentElement || document.body;
    new OhMyLive2D(finalOptions, live2dModel);
  };
  return loadOhMyLive2D;
};

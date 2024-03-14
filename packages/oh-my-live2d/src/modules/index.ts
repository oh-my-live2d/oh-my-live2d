// import { HitAreaFrames } from 'pixi-live2d-display/extra';
import type { Application } from 'pixi.js';
// import { isNumber, mergeDeep } from 'tianjie';

import { GlobalStyle } from './globalStyle.js';
import { Menus } from './menus.js';
import { Models } from './models.js';
import { Stage } from './stage.js';
import { StatusBar } from './status-bar.js';
import { Tips } from './tips.js';
import { DEFAULT_OPTIONS } from '../config/index.js';
import type { DefaultOptions, LoadMethod, Options, PixiLive2dDisplayModule } from '../types/index.js';
import { checkVersion, mergeOptions, printProjectInfo } from '../utils/index.js';

export class OhMyLive2D {
  // private stage: Stage;
  // private statusBar: StatusBar;
  // private tips: Tips;
  // private menus: Menus;
  private models: Models;
  // private model: Models; // 当前模型的实例
  // private modelIndex = 0; // 当前模型索引
  // private windowSizeType: WindowSizeType = WindowSizeType.pc; // 当前窗口大小
  // private mediaQuery = window.matchMedia('screen and (max-width: 768px)'); // 窗口大小的媒体查询

  constructor(
    private options: DefaultOptions,
    private pixiLive2dDisplayModule: PixiLive2dDisplayModule,
    private application: Application,
    private stage: Stage,
    private statusBar: StatusBar,
    private tips: Tips,
    private menus: Menus,
    private globalStyle: GlobalStyle
    // private Application: ApplicationType,
  ) {
    this.initialize();
    this.models = new Models(
      this.application,
      this.pixiLive2dDisplayModule.Live2DModel,
      this.options,
      this.stage,
      this.statusBar,
      this.tips,
      this.menus
    );

    // this.destroy();
    // import('../library/iconfont.js');
    // new GlobalStyle({ primaryColor: this.options.primaryColor }); // 加载全局样式
    // const defaultStatusBarColorInfo = {
    //   info: this.options.primaryColor,
    //   error: ''
    // };
    // this.stage = new Stage(this.options.parentElement, this.options.transitionTime); // 实例化舞台
    // this.statusBar = new StatusBar(this.options.parentElement, defaultStatusBarColorInfo, this.options.primaryColor);
    // this.tips = new Tips(this.stage.element, this.options.tips, this.options.primaryColor); // 提示框
    // this.menus = new Menus(this.stage.element); // 菜单
    // this.models = new Models(
    //   this.Application,
    //   this.pixiLive2dDisplayModule.Live2DModel,
    //   this.options,
    //   this.HitAreaFrames,
    //   this.stage,
    //   this.statusBar,
    //   this.tips,
    //   this.menus
    // );
    // this.initialize();
  }

  // 初始化
  initialize(): void {
    // 检查版本
    void checkVersion();

    // 打印信息
    if (this.options.sayHello) {
      printProjectInfo();
    }

    this.initializeModules();
    // 注册事件
    this.registerEvents();
  }

  // 初始化所有模块
  initializeModules(): void {
    this.stage.initialize(this.options);
    this.statusBar.initialize(this.options);
    this.globalStyle.initialize(this.options);
    this.tips.initialize(this.options);
    this.menus.initialize();
  }

  updateOptions(options: Options = {}): void {
    this.options = mergeOptions(this.options, options);
    this.initializeModules();
    // void this.models.loadModel();
    this.models.initialize();
  }

  registerEvents(): void {
    // 点击菜单按钮
    this.menus.onClickItem((name) => {
      switch (name) {
        case 'Rest':
          this.models.switchStatus();

          return;
        // 切换模型
        case 'SwitchModel':
          void this.models.loadNextModel();

          return;

        case 'About':
          window.open('https://oml2d.com');

          return;
      }
    });

    // copy 事件
    window.addEventListener('copy', () => {
      this.tips.copy();
    });

    // 出场入场动画执行结束之后的事件回调
    this.stage.onChangeSlideEnd((status) => {
      if (status) {
        this.tips.welcome();
      }
    });
  }
}

export const setup = (loadMethod: LoadMethod): ((options: Options) => Promise<OhMyLive2D>) => {
  let application: Application;
  let oml2d: OhMyLive2D;
  const globalStyle = new GlobalStyle(DEFAULT_OPTIONS);
  const stage = new Stage(DEFAULT_OPTIONS); // 实例化舞台
  const statusBar = new StatusBar(DEFAULT_OPTIONS);
  const tips = new Tips(stage.element, DEFAULT_OPTIONS); // 提示框
  const menus = new Menus(stage.element); // 菜单

  const loadOml2d = async (options: Options): Promise<OhMyLive2D> => {
    const finalOptions = mergeOptions(DEFAULT_OPTIONS, options);
    const { PixiLive2dDisplay, PIXI } = await loadMethod(finalOptions.importType, finalOptions.libraryUrls);

    if (!application) {
      application = new PIXI.Application({
        view: stage.canvasElement,
        resolution: 2,
        autoStart: true,
        autoDensity: true,
        backgroundAlpha: 0,
        resizeTo: stage.element
      });
    }
    if (oml2d) {
      // oml2d.destroy();
      oml2d.updateOptions();
    } else {
      oml2d = new OhMyLive2D(finalOptions, PixiLive2dDisplay, application, stage, statusBar, tips, menus, globalStyle);
    }

    // console.log(oml2d);
    return oml2d;
  };

  return loadOml2d;
};

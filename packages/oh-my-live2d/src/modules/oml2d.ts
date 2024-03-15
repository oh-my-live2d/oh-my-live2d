import { Application } from './application.js';
import { GlobalStyle } from './globalStyle.js';
import { Models } from './live2d.js';
import { Menus } from './menus.js';
// import { Models } from './models.js';
import { Stage } from './stage.js';
import { StatusBar } from './status-bar.js';
import { Tips } from './tips.js';
import type { DefaultOptions, HitAreaFramesModule, ModelOptions, PixiLive2dDisplayModule, PixiModule } from '../types/index.js';
import { checkVersion, printProjectInfo } from '../utils/index.js';

export class OhMyLive2D {
  private globalStyle: GlobalStyle;
  private stage: Stage;
  private statusBar: StatusBar;
  private tips: Tips;
  private menus: Menus;
  private models: Models;
  // private models: Models;
  private application?: Application;
  private currentModelIndex: number = 0;
  // private model: Models; // 当前模型的实例
  // private modelIndex = 0; // 当前模型索引
  // private windowSizeType: WindowSizeType = WindowSizeType.pc; // 当前窗口大小
  // private mediaQuery = window.matchMedia('screen and (max-width: 768px)'); // 窗口大小的媒体查询

  constructor(
    private options: DefaultOptions,
    private PIXI: PixiModule,
    private PixiLive2dDisplay: PixiLive2dDisplayModule,
    private HitAreaFrames: HitAreaFramesModule
    // private Application: ApplicationType,
  ) {
    this.globalStyle = new GlobalStyle(options);
    this.stage = new Stage(options); // 实例化舞台
    this.statusBar = new StatusBar(options);
    this.tips = new Tips(options); // 提示框
    this.menus = new Menus(options); // 菜单
    this.models = new Models(options);
    // this.models = new Models(options);
    this.application = new Application(this.PIXI);
    this.modelIndex = 0;
    // new GlobalStyle({ primaryColor: this.options.primaryColor }); // 加载全局样式
    // const defaultStatusBarColorInfo = {
    //   info: this.options.primaryColor,
    //   error: ''
    // };
  }

  set modelIndex(index: number) {
    this.currentModelIndex = index;
    this.stage.modelIndex = index;
    this.models.modelIndex = index;
  }

  get modelIndex(): number {
    return this.currentModelIndex;
  }

  /**
   * 当前模型选项
   */
  get currentModelOptions(): ModelOptions {
    return this.options.models[this.currentModelIndex];
  }

  /**
   * 创建
   */
  create(): void {
    this.globalStyle.create();
    this.stage.create();
    this.statusBar.create();
    this.menus.create();
    this.tips.create();
  }

  /**
   * 挂载
   */
  mount(): void {
    this.globalStyle.mount();
    this.stage.mount();
    this.statusBar.mount();
    this.menus.mount(this.stage.element!);
    this.tips.mount(this.stage.element!);
  }

  async loadModel(): Promise<void> {
    this.statusBar.showLoading();
    await this.models.create(this.PixiLive2dDisplay.Live2DModel);
    this.application?.mount(this.stage.canvasElement!, this.stage.element!, this.models.model);
    this.models.settingModel();
    this.stage.reloadStyle(this.models.modelSize);
    this.application?.resize();
    this.statusBar.hideLoading();
    void this.stage.slideIn();
  }

  /**
   * 初始化样式
   */
  initializeStyle(): void {
    this.globalStyle.initializeStyle();
    this.statusBar.initializeStyle();
    this.tips.initializeStyle();
    this.stage.initializeStyle();
    this.menus.initializeStyle();
  }

  loadNextModel(): void {}
  // onCreated(fn: () => void): void {
  //   fn();
  // }

  // 初始化
  async initialize(): Promise<void> {
    // 检查版本
    void checkVersion();

    // 打印信息
    if (this.options.sayHello) {
      printProjectInfo();
    }
    //  创建
    this.create();

    //  初始化样式
    this.initializeStyle();

    //  挂载
    this.mount();

    // 注册dom事件
    this.registerEvent();

    // 加载模型
    await this.loadModel();
  }

  registerEvent(): void {
    // 出场入场动画执行结束之后的事件回调
    this.stage.onChangeSlideEnd((status) => {
      if (status) {
        this.tips.welcome();
      }
    });
  }

  // // 初始化所有模块
  // initializeModules(): void {
  //   this.stage.initialize(this.options);
  //   this.statusBar.initialize(this.options);
  //   this.globalStyle.initialize(this.options);
  //   this.tips.initialize(this.options);
  //   this.menus.initialize();
  // }

  // updateOptions(options: Options = {}): void {
  //   this.options = mergeOptions(this.options, options);
  //   this.initializeModules();
  //   // void this.models.loadModel();
  //   this.models.initialize();
  // }

  // registerEvents(): void {
  //   // 点击菜单按钮
  //   this.menus.onClickItem((name) => {
  //     switch (name) {
  //       case 'Rest':
  //         this.models.switchStatus();

  //         return;
  //       // 切换模型
  //       case 'SwitchModel':
  //         void this.models.loadNextModel();

  //         return;

  //       case 'About':
  //         window.open('https://oml2d.com');

  //         return;
  //     }
  //   });

  //   // copy 事件
  //   window.addEventListener('copy', () => {
  //     this.tips.copy();
  //   });

  // }
}

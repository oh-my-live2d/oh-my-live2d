import { Application } from './application.js';
import { GlobalStyle } from './globalStyle.js';
import { Models } from './live2d.js';
import { Menus } from './menus.js';
import { Stage } from './stage.js';
import { StatusBar } from './status-bar.js';
import { Tips } from './tips.js';
import type { DefaultOptions, PixiLive2dDisplayModule, PixiModule } from '../types/index.js';
import { checkVersion, printProjectInfo } from '../utils/index.js';

export class OhMyLive2D {
  private globalStyle: GlobalStyle;
  private stage: Stage;
  private statusBar: StatusBar;
  private tips: Tips;
  private menus: Menus;
  private models: Models;
  private application?: Application;
  private currentModelIndex: number = 0;
  // private hitAreaFrames: HitAreaFrames;
  constructor(
    private options: DefaultOptions,
    private PIXI: PixiModule,
    private PixiLive2dDisplay: PixiLive2dDisplayModule
  ) {
    this.globalStyle = new GlobalStyle(options);
    this.stage = new Stage(options); // 实例化舞台
    this.statusBar = new StatusBar(options);
    this.tips = new Tips(options); // 提示框
    this.menus = new Menus(options); // 菜单
    this.models = new Models(options, PixiLive2dDisplay);
    this.application = new Application(this.PIXI);

    this.modelIndex = 0;
  }

  private set modelIndex(index: number) {
    this.currentModelIndex = index;
    this.stage.modelIndex = index;
    this.models.modelIndex = index;
  }

  private get modelIndex(): number {
    return this.currentModelIndex;
  }

  /**
   * 创建
   */
  private create(): void {
    this.globalStyle.create();
    this.stage.create();
    this.statusBar.create();
    this.menus.create();
    this.tips.create();
  }

  /**
   * 挂载
   */
  private mount(): void {
    this.globalStyle.mount();
    this.stage.mount();
    this.statusBar.mount();
    this.menus.mount(this.stage.element!);
    this.tips.mount(this.stage.element!);
  }

  /**
   * 卸载
   */
  unMount(): void {
    this.globalStyle.unMount();
    this.stage.unMount();
    this.statusBar.unMount();
    this.tips.unMount();
  }

  /**
   * 加载模型
   */
  private async loadModel(isLoading = true): Promise<void> {
    if (isLoading) {
      this.statusBar.showLoading();
    }
    await this.models.create();
    this.application?.mount(this.stage.canvasElement!, this.stage.element!, this.models.model);
    this.models.settingModel();
    this.stage.reloadStyle(this.models.modelSize);
    this.application?.resize();
    this.statusBar.hideLoading();
    await this.stage.slideIn();

    // -------------
    this.models.onHit((name) => {
      console.log(name);
      this.models.playMotion();
    });
  }

  /**
   * 加载下个模型
   */
  async loadNextModel(): Promise<void> {
    this.modelIndex++;
    if (this.modelIndex > this.options.models.length - 1) {
      this.modelIndex = 0;
    }
    this.statusBar.showLoading();
    this.tips.clear();
    await this.stage.slideOut();
    await this.loadModel(false);
    void this.tips.idlePlayer?.start();
  }

  /**
   * 初始化样式
   */
  private initializeStyle(): void {
    this.globalStyle.initializeStyle();
    this.statusBar.initializeStyle();
    this.tips.initializeStyle();
    this.stage.initializeStyle();
    this.menus.initializeStyle();
  }

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

  // 切换状态. 休息/活动
  private switchStatus(): void {
    void this.stage.slideOut();
    this.tips.clear();

    this.statusBar.rest(true, () => {
      void this.stage.slideIn();
      void this.tips.idlePlayer?.start();
    });
  }

  /**
   * 注册dom事件
   */
  private registerEvent(): void {
    // 出场入场动画执行结束之后的事件回调
    this.stage.onChangeSlideEnd((status) => {
      if (status) {
        this.tips.welcome();
      }
    });

    window.document.oncopy = (): void => {
      this.tips.copy();
    };

    // 菜单按钮项被点击
    this.menus.onClickItem((name) => {
      switch (name) {
        case 'Rest':
          this.switchStatus();

          return;
        // 切换模型
        case 'SwitchModel':
          void this.loadNextModel();

          return;

        case 'About':
          window.open('https://oml2d.com');

          return;
      }
    });
  }

  // updateOptions(options: Options = {}): void {
  //   this.options = mergeOptions(this.options, options);
  //   this.initializeModules();
  //   // void this.models.loadModel();
  //   this.models.initialize();
  // }

  // registerEvents(): void {
  //   // 点击菜单按钮

  //   // copy 事件
  //   window.addEventListener('copy', () => {
  //     this.tips.copy();
  //   });

  // }
}

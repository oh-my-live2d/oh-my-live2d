import { PixiApp } from './application.js';
import { Events } from './events.js';
import { GlobalStyle } from './global-style.js';
// import { LoadOhMyLive2D } from './load-oml2d.js';
import { LoadOhMyLive2D } from './load-oml2d.js';
import { Menus } from './menus.js';
import { Models } from './models.js';
import { Stage } from './stage.js';
import { StatusBar } from './status-bar.js';
import { Store } from './store.js';
import { Tips } from './tips.js';
import { WindowSizeType } from '../constants/index.js';
import type { DefaultOptions, PixiLive2dDisplayModule, PixiModule } from '../types/index.js';
import { checkVersion, getWindowSizeType, onChangeWindowSize, printProjectInfo } from '../utils/index.js';

export class OhMyLive2D {
  store: Store;
  globalStyle: GlobalStyle;
  stage: Stage;
  statusBar: StatusBar;
  tips: Tips;
  menus: Menus;
  models: Models;
  pixiApp?: PixiApp;
  currentModelIndex: number = 0;
  options: DefaultOptions;

  constructor(
    private globalOml2d: LoadOhMyLive2D,
    private events: Events,
    private PIXI: PixiModule,
    private PixiLive2dDisplay: PixiLive2dDisplayModule
  ) {
    this.options = this.globalOml2d.options;
    this.globalStyle = new GlobalStyle(this.options);
    this.stage = new Stage(this.options, this.events); // 实例化舞台
    this.statusBar = new StatusBar(this.options);
    this.tips = new Tips(this.options, this.globalOml2d); // 提示框
    this.menus = new Menus(this.options, this.globalOml2d); // 菜单
    this.models = new Models(this.options, this.PixiLive2dDisplay, this.events);
    this.store = new Store();
    this.modelIndex = this.store.getModelCurrentIndex(this.options.models);
  }

  /**
   * 移动端是否隐藏
   */
  private get mobileHidden(): boolean {
    return !this.options.mobileDisplay && getWindowSizeType() === WindowSizeType.mobile;
  }

  private set modelIndex(index: number) {
    this.currentModelIndex = index;
    this.stage.modelIndex = index;
    this.models.modelIndex = index;
    this.store.updateModelInfo(this.options.models, index);
  }

  get modelIndex(): number {
    return this.currentModelIndex;
  }

  /**
   * 创建
   */
  private create(): void {
    this.stage.create();

    this.pixiApp = new PixiApp(this.PIXI, this.stage);

    this.statusBar.create();
    this.statusBar.initializeStyle();
  }

  /**
   * 挂载
   */
  private mount(): void {
    this.stage.mount();
    this.statusBar.mount();
  }

  /**
   * 加载模型
   * tip: 仅加载模型, 并不会显示模型; 若想显示模型, 则需要执行一次 stage.slideIn 方法
   */
  private async loadModel(callback: () => void): Promise<void> {
    if (!this.options.models || !this.options.models.length) {
      return;
    }

    if (this.mobileHidden) {
      this.statusBar.rest();

      return;
    }

    this.statusBar.showLoading();

    return this.models
      .create()
      .catch(() => {
        this.statusBar.loadingError(() => void this.reloadModel());
      })
      .then(() => {
        this.pixiApp?.mount(this.models.model);
        this.menus.reload(this.stage.element!);
        this.tips.reload(this.stage.element!);

        this.models.settingModel();
        this.stage.reloadStyle(this.models.modelSize);
        this.pixiApp?.resize();
        this.statusBar.hideLoading();

        callback();
      });
  }

  /**
   * 重新加载
   */
  async reloadModel(): Promise<void> {
    this.tips.clear();
    await this.stage.slideOut();
    await this.loadModel(() => {
      this.stage.slideIn();
    });
    void this.tips.idlePlayer?.start();
  }

  /**
   * 加载下个模型
   */
  async loadNextModel(): Promise<void> {
    this.modelIndex++;
    if (this.modelIndex > this.options.models.length - 1) {
      this.modelIndex = 0;
    }

    this.tips.clear();
    this.statusBar.open(this.options.statusBar.switchingMessage);
    await this.stage.slideOut();

    await this.loadModel(() => {
      this.stage.slideIn();
    });
    void this.tips.idlePlayer?.start();
  }

  /**
   * 加载指定模型
   */
  async loadSpecificModel(modelIndex: number): Promise<void> {
    if (modelIndex >= 0 && modelIndex < this.options.models.length) {
      this.modelIndex = modelIndex;

      this.tips.clear();
      this.statusBar.open(this.options.statusBar.switchingMessage);
      await this.stage.slideOut();

      await this.loadModel(() => {
        this.stage.slideIn();
      });
      void this.tips.idlePlayer?.start();
    }
  }

  // 初始化
  initialize(): void {
    // 检查版本
    void checkVersion();

    // 打印信息
    if (this.options.sayHello) {
      printProjectInfo();
    }

    this.registerGlobalEvent();

    this.globalStyle.initialize();

    //  创建舞台和状态条
    this.create();

    //  挂载舞台和状态条
    this.mount();

    // 加载模型
    void this.loadModel(() => {
      if (this.options.initialStatus == 'sleep') {
        this.tips.clear();
        this.statusBar.open(this.options.statusBar.restMessage);
        this.statusBar.setClickEvent(() => {
          this.stage.slideIn();
          this.statusBar.close();
          this.statusBar.clearHoverEvent();
          this.statusBar.clearClickEvent();
        });
      } else {
        this.stage.slideIn();
      }
    });
  }

  /**
   * 注册全局事件
   */
  private registerGlobalEvent(): void {
    onChangeWindowSize(() => {
      void this.reloadModel();
    });

    this.globalOml2d.onStageSlideIn(() => {
      this.tips.welcome();
    });

    window.document.oncopy = (): void => {
      this.tips.copy();
    };
  }
}

import type { Application } from 'pixi.js';
import { isNumber, mergeDeep } from 'tianjie';

import { GlobalStyle } from './globalStyle.js';
import { Menus } from './menus.js';
import { Model } from './model.js';
import { Stage } from './stage.js';
import { StatusBar, SystemState } from './status-bar.js';
import { Tips } from './tips.js';
import { DEFAULT_OPTIONS } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import type {
  ApplicationType,
  CSSProperties,
  DefaultOptions,
  HitAreaFramesType,
  LoadMethod,
  ModelOptions,
  Options,
  PixiLive2dDisplayModule
} from '../types/index.js';
import { checkVersion, handleCommonStyle, printProjectInfo } from '../utils/index.js';

export class OhMyLive2D {
  private stage: Stage;
  private statusBar: StatusBar;
  private tips: Tips;
  private menus: Menus;
  private application: Application;
  private model?: Model; // 当前模型的实例
  private modelIndex = 0; // 当前模型索引
  private windowSizeType: WindowSizeType = WindowSizeType.pc; // 当前窗口大小
  private mediaQuery = window.matchMedia('screen and (max-width: 768px)'); // 窗口大小的媒体查询

  constructor(
    private options: DefaultOptions,
    private pixiLive2dDisplayModule: PixiLive2dDisplayModule,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Application: ApplicationType,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private HitAreaFrames: HitAreaFramesType
  ) {
    this.options.sayHello && this.sayHello();

    new GlobalStyle({ primaryColor: this.options.primaryColor }); // 加载全局样式

    this.stage = new Stage(this.options.parentElement, options); // 实例化舞台

    this.statusBar = new StatusBar(this.options.parentElement, {
      info: this.options.primaryColor,
      error: '#F08080'
    });

    this.tips = new Tips(this.stage.element, this.options.tips); // 提示框

    this.menus = new Menus(this.stage.element); // 菜单

    this.application = this.createApplication();

    this.initialize();
    this.setCommonStyle();
    void checkVersion();
  }

  // 初始化
  initialize(): void {
    this.getWindowSizeType();
    if (this.windowSizeType !== WindowSizeType.pc && !this.options.mobileDisplay) {
      this.statusBar.popup('看板娘休息中', SystemState.info, 8000);

      return;
    }
    this.loadModel();
    this.registerEvents();
  }

  // 设置公共的样式
  setCommonStyle(): void {
    const commonStyle: CSSProperties = { backgroundColor: this.options.primaryColor };

    this.tips.setStyle(commonStyle);
    this.statusBar.setStyle(commonStyle);
  }

  // 获取窗口大小
  getWindowSizeType(): void {
    if (this.mediaQuery.matches) {
      this.windowSizeType = WindowSizeType.mobile;
    } else {
      this.windowSizeType = WindowSizeType.pc;
    }
  }

  onWindowSizeChange(onPc: () => void, onMobile: () => void): void {
    if (this.mediaQuery.matches) {
      this.windowSizeType = WindowSizeType.mobile;
      onMobile();
    } else {
      this.windowSizeType = WindowSizeType.pc;
      onPc();
    }
    this.mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        this.windowSizeType = WindowSizeType.mobile;
        onMobile();
      } else {
        this.windowSizeType = WindowSizeType.pc;
        onPc();
      }
    });
  }

  /**
   * 加载模型
   */
  loadModel(showLoading = true): void {
    showLoading && this.statusBar.showLoading();
    this.model = new Model(this.pixiLive2dDisplayModule.Live2DModel, this.currentModelOption, this.application, this.HitAreaFrames);

    // 模型所有资源加载完毕
    this.model?.onLoaded(() => {
      this.onWindowSizeChange(
        () => {
          // pc
          this.model?.setScale(this.currentModelOption?.scale, this.currentModelOption.scale);
          this.model?.setPosition(...(this.currentModelOption.position || []));
          const modelSize = {
            width: this.model?.width,
            height: this.model?.height
          };
          const finalStageStyle = mergeDeep(handleCommonStyle(modelSize), handleCommonStyle(this.currentModelOption.stageStyle || {}));

          this.stage.setStyle(finalStageStyle, () => this.application.resize());
          // if (!this.options.mobileDisplay) {
          //   void this.stage.slideIn(this.options.transitionTime);
          //   void this.tips.idlePlayer?.start();
          //   this.statusBar.popup('闪亮登场', SystemState.info, 3000);
          // }
          this.tips.setStyle(handleCommonStyle(this.options.tips.style || {}));
        },
        () => {
          // mobile
          if (!this.options.mobileDisplay) {
            this.statusBar.popup('看板娘休息中', SystemState.info, 8000);
            void this.stage.slideOut(this.options.transitionTime);
            this.tips.clear();

            return;
          }
          this.model?.setScale(this.currentModelOption?.mobileScale, this.currentModelOption.mobileScale);
          this.model?.setPosition(...(this.currentModelOption.mobilePosition || []));
          const modelSize = {
            width: this.model?.width,
            height: this.model?.height
          };
          const finalStageStyle = mergeDeep(
            handleCommonStyle(modelSize),
            handleCommonStyle(this.currentModelOption.mobileStageStyle || {})
          );

          this.stage.setStyle(finalStageStyle, () => this.application.resize());
          this.tips.setStyle(handleCommonStyle(this.options.tips.mobileStyle || {}));
        }
      );
      void this.stage.slideIn(this.options?.transitionTime);
      this.statusBar.hideLoading();
    });

    // 加载失败
    this.model?.onFail((e) => {
      this.statusBar.loadingError(this.loadModel.bind(this));
      console.error(e);
    });
  }

  /**
   * 获取当前的模型配置选项
   */
  get currentModelOption(): ModelOptions {
    return this.options.models[this.modelIndex];
  }
  /**
   * 加载下一个模型
   */
  async loadNextModel(): Promise<void> {
    if (this.options.models.length <= 1) {
      this.tips.notification('没找到其他模型哦...', 3000, 9);

      return;
    }
    this.tips.clear();
    this.statusBar.showLoading();
    await this.stage.slideOut(this.options.transitionTime);
    if (this.application.stage.children.length >= 1) {
      this.application.stage.removeChildAt(0);
    } // 从舞台移除上一个模型

    if (isNumber(this.options.models?.length)) {
      if (this.modelIndex < this.options.models.length - 1) {
        this.modelIndex++;
      } else {
        this.modelIndex = 0;
      }

      this.loadModel(false);
    }
  }

  sayHello(): void {
    printProjectInfo();
  }

  registerEvents(): void {
    // 点击菜单按钮
    this.menus.onClickItem((name) => {
      switch (name) {
        case 'Rest':
          void this.stage.slideOut(this.options.transitionTime);
          this.statusBar.popup('看板娘休息中', SystemState.info, false, () => {
            void this.stage.slideIn(this.options.transitionTime);
            this.statusBar.popup('闪亮登场');
            void this.tips.idlePlayer?.start();
          });

          this.tips.clear();

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

    // copy 事件
    window.addEventListener('copy', () => {
      this.tips.copy();
    });

    // 出场入场动画执行结束之后的事件回调
    this.stage.onSlideChangeEnd((status) => {
      if (status) {
        this.tips.welcome();
      }
    });
  }
  /**
   * 创建pixi应用实例
   * @returns
   */
  private createApplication(): Application {
    return new this.Application({
      view: this.stage.canvasElement,
      resolution: 2,
      autoStart: true,
      autoDensity: true,
      backgroundAlpha: 0,
      resizeTo: this.stage.element
    });
  }
}

export const setup = (loadMethod: LoadMethod): ((options: Options) => Promise<unknown>) => {
  let oml2d;
  const loadOml2d = async (options: Options): Promise<void> => {
    const { parentElement } = options;
    const finalOptions = mergeDeep(DEFAULT_OPTIONS, options);

    finalOptions.parentElement = parentElement || document.body;
    // if (!finalOptions.models?.length) {
    //   throw new Error('至少需要配置一个模型');
    // }
    const { PixiLive2dDisplay, PIXI, HitAreaFrames } = await loadMethod(finalOptions.importType, finalOptions.libraryUrls);

    if (!oml2d) {
      oml2d = new OhMyLive2D(finalOptions, PixiLive2dDisplay, PIXI.Application, HitAreaFrames);
    }
  };

  return loadOml2d;
};

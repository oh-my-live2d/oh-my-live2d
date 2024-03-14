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
    private menus: Menus
    // private Application: ApplicationType,
  ) {
    this.models = new Models(
      this.application,
      this.pixiLive2dDisplayModule.Live2DModel,
      this.options,
      this.stage,
      this.statusBar,
      this.tips,
      this.menus
    );
    this.initialize();

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
  // // 销毁
  // destroy() {
  //   elementsDestroyer();

  //   // this.models?.destroy();
  //   // this.stage.destroy();
  //   // this.statusBar.destroy();
  //   // destroyElement(ELEMENT_ID.stage);
  //   // destroyElement(ELEMENT_ID.statusBar);
  // }

  // 初始化
  initialize(): void {
    // 检查版本
    void checkVersion();

    // 打印信息
    if (this.options.sayHello) {
      printProjectInfo();
    }

    // 更新配置选项
    this.tips.options = this.options;
    this.stage.options = this.options;
    this.statusBar.options = this.options;

    // 更新舞台父元素
    this.stage.updateParentElement();

    // 注册事件
    this.registerEvents();
  }

  registerEvents(): void {
    // 点击菜单按钮
    this.menus.onClickItem((name) => {
      switch (name) {
        case 'Rest':
          // void this.stage.slideOut(this.options.transitionTime);
          // this.statusBar.popup('看板娘休息中', SystemState.info, false, () => {
          //   void this.stage.slideIn(this.options.transitionTime);
          //   this.statusBar.popup('闪亮登场');
          //   void this.tips.idlePlayer?.start();
          // });

          // this.tips.clear();

          return;
        // 切换模型
        case 'SwitchModel':
          // void this.loadNextModel();
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

export const setup = (loadMethod: LoadMethod): ((options: Options) => Promise<void>) => {
  let application: Application;

  new GlobalStyle(DEFAULT_OPTIONS);
  const stage = new Stage(DEFAULT_OPTIONS); // 实例化舞台
  const statusBar = new StatusBar(DEFAULT_OPTIONS);
  const tips = new Tips(stage.element, DEFAULT_OPTIONS); // 提示框
  const menus = new Menus(stage.element); // 菜单

  const loadOml2d = async (options: Options): Promise<void> => {
    const finalOptions = mergeOptions(options);

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
    // if (__ENV__) {
    //   console.log(__ENV__);
    //   if (!oml2d) {
    //     const { PixiLive2dDisplay, PIXI, HitAreaFrames } = await loadMethod(finalOptions.importType, finalOptions.libraryUrls);

    //     oml2d = new OhMyLive2D(finalOptions, PixiLive2dDisplay, PIXI.Application, HitAreaFrames);
    //   }
    // } else {
    //   console.log('-----------');
    //   const { PixiLive2dDisplay, PIXI, HitAreaFrames } = await loadMethod(finalOptions.importType, finalOptions.libraryUrls);

    //   if (oml2d) {
    //     await oml2d.destroy();
    //   }
    //   oml2d = new OhMyLive2D(finalOptions, PixiLive2dDisplay, PIXI.Application, HitAreaFrames);
    // }
    // if (!finalOptions.models?.length) {
    //   throw new Error('至少需要配置一个模型');
    // }

    // void oml2d?.destroy();
    const oml2d = new OhMyLive2D(finalOptions, PixiLive2dDisplay, application, stage, statusBar, tips, menus);

    console.log(oml2d);
  };

  return loadOml2d;
};

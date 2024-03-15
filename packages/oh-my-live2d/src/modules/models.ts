import type { InternalModel, Live2DModel } from 'pixi-live2d-display';
// import { HitAreaFrames } from 'pixi-live2d-display/extra';
// import type { Application } from 'pixi.js';
import { mergeDeep } from 'tianjie';

import { MotionPreloadStrategy, WindowSizeType } from '../constants/index.js';
import type { CSSProperties, DefaultOptions, Live2DModelType, ModelOptions } from '../types/index.js';
import { getWindowSizeType, handleCommonStyle } from '../utils/index.js';

export class Models {
  model?: Live2DModel<InternalModel>; // 当前模型实例
  private modelList: Live2DModel<InternalModel>[] = []; // 模型实例列表
  private currentModelIndex = 0;
  constructor(private options: DefaultOptions) {}

  private get modelsOption(): ModelOptions[] {
    return this.options.models;
  }

  // 当前模型选项
  private get currentModelOptions(): ModelOptions {
    return this.modelsOption[this.currentModelIndex];
  }

  private get currentStageStyle(): CSSProperties {
    return handleCommonStyle(mergeDeep(this.modelSize, this.currentModelOptions.stageStyle || {}));
  }

  private get currentMobileStageStyle(): CSSProperties {
    return handleCommonStyle(mergeDeep(this.modelSize, this.currentModelOptions.mobileStageStyle || {}));
  }

  // 模型尺寸
  get modelSize(): { width: number; height: number } {
    return {
      width: this.model?.width || 0,
      height: this.model?.height || 0
    };
  }

  // 是否被禁用
  private get disable(): boolean {
    return getWindowSizeType() === WindowSizeType.mobile && !this.options.mobileDisplay;
  }

  // // 初始化
  // initialize(): void {
  //   void this.loadModel();
  //   onChangeWindowSize(this.handleWindowSizeChange.bind(this));
  // }

  // // 切换舞台状态. 休息/活动
  // switchStatus(): void {
  //   void this.stage.slideOut();
  //   this.tips.clear();

  //   this.statusBar.rest(true, () => {
  //     void this.stage.slideIn();
  //     void this.tips.idlePlayer?.start();
  //   });
  // }
  // 模型活动
  // activity() {

  // }

  // 创建模型
  create(Live2dModel: Live2DModelType): Promise<void> {
    return new Promise((resolve, reject) => {
      this.model = Live2dModel.fromSync(this.currentModelOptions.path, {
        motionPreload: (this.currentModelOptions.motionPreloadStrategy as MotionPreloadStrategy) || MotionPreloadStrategy.IDLE,
        onError: reject
      });

      this.model.once('load', () => {
        resolve();
      });
    });
  }

  // loadModel(isLoading: boolean = true): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     if (isLoading && !this.disable) {
  //       this.statusBar.showLoading();
  //     }
  //     this.create((e) => {
  //       console.error(e);
  //       this.statusBar.loadingError(() => {
  //         void this.loadModel();
  //       });
  //       reject(e);
  //     });

  //     // 如果舞台中有其他模型则移除该模型
  //     if (this.application.stage.children.length >= 1) {
  //       this.application.stage.removeChildAt(0);
  //     }

  //     // 所有资源加载完毕
  //     this.model?.once('load', () => {
  //       this.application.stage.addChild(this.model!);
  //       if (!this.disable) {
  //         this.statusBar.hideLoading();
  //         this.handleWindowSizeChange(getWindowSizeType());
  //         void this.stage.slideIn();
  //       } else {
  //         this.changeAttributeByWindowSize(getWindowSizeType());
  //         this.statusBar.rest();
  //       }
  //       resolve();
  //     });
  //   });
  // }

  // /**
  //  * 加载下一个模型
  //  */
  // async loadNextModel(): Promise<void> {
  //   this.currentModelIndex++;
  //   if (this.currentModelIndex > this.modelsOption.length - 1) {
  //     this.currentModelIndex = 0;
  //   }
  //   this.statusBar.showLoading();
  //   this.tips.clear();
  //   await this.stage.slideOut();
  //   await this.loadModel(false);
  //   void this.tips.idlePlayer?.start();
  // }

  onLoad(): void {
    this.model?.on('load', () => {});
  }

  /**
   * 设置缩放比例
   * @param x
   * @param y
   */
  setScale(x = 0.1, y = 0.1): void {
    this.model?.scale.set(x, y);
  }

  /**
   * 设置位置
   * @param x
   * @param y
   */
  setPosition(x = 0, y = 0): void {
    this.model!.x = x;
    this.model!.y = y;
  }

  /**
   * 切换纹理
   * @param callback
   */
  changeTexture(callback: (options: { status: boolean }) => void): void {
    if (this.model!.textures.length <= 1) {
      callback({ status: false });
    } else {
      const currentTexture = this.model!.textures.shift();

      this.model!.textures.push(currentTexture!);
      callback({ status: true });
    }
  }

  /**
   * 应用pc设备对应属性
   */
  private applyAttribute(): void {
    this.setScale(this.currentModelOptions.scale, this.currentModelOptions.scale);
    this.setPosition(...(this.currentModelOptions.position || []));
  }

  /**
   * 应用mobile设备对应属性
   */
  private applyMobileAttribute(): void {
    console.log(this.currentModelOptions);
    this.setScale(this.currentModelOptions.mobileScale, this.currentModelOptions.mobileScale);
    this.setPosition(...(this.currentModelOptions.mobilePosition || []));
  }

  // // 处理窗口大小变化时的逻辑
  // private handleWindowSizeChange(windowSizeType: WindowSizeType): void {
  //   if (this.options.mobileDisplay) {
  //     this.changeAttributeByWindowSize(windowSizeType);
  //   } else {
  //     this.changeStageStatusByWindowSize(windowSizeType);
  //     this.changeAttributeByWindowSize(windowSizeType);
  //   }
  // }

  // // 根据窗口大小改变舞台行为
  // private changeStageStatusByWindowSize(windowSizeType: WindowSizeType): void {
  //   switch (windowSizeType) {
  //     case WindowSizeType.mobile:
  //       void this.stage.slideOut();
  //       this.tips.clear();
  //       this.statusBar.rest();
  //       break;
  //     case WindowSizeType.pc:
  //       void this.stage.slideIn().then(() => {
  //         void this.tips.idlePlayer?.start();
  //       });
  //       break;
  //   }
  // }

  // // 根据窗口大小改变舞台中各元素的样式和参数
  // private changeAttributeByWindowSize(windowSizeType: WindowSizeType): void {
  //   switch (windowSizeType) {
  //     case WindowSizeType.mobile:
  //       // 移动端
  //       this.applyMobileAttribute();
  //       this.stage.setStyle(this.currentMobileStageStyle);
  //       this.tips.setStyle(this.tips.userMobileStyle);
  //       break;

  //     case WindowSizeType.pc:
  //       // pc端
  //       this.applyAttribute();
  //       this.stage.setStyle(this.currentStageStyle);
  //       this.tips.setStyle(this.tips.userStyle);
  //       break;
  //   }
  //   this.application.resize();
  // }
}

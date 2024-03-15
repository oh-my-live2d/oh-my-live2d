import type { InternalModel, Live2DModel } from 'pixi-live2d-display';
// import { MotionPreloadStrategy } from 'pixi-live2d-display';

import { MotionPreloadStrategy, WindowSizeType } from '../constants/index.js';
import type { DefaultOptions, Live2DModelType, ModelOptions } from '../types/index.js';
import { getWindowSizeType } from '../utils/index.js';

export class Models {
  model?: Live2DModel<InternalModel>; // 当前模型实例
  private currentModelIndex = 0;
  constructor(private options: DefaultOptions) {}

  get modelIndex(): number {
    return this.currentModelIndex;
  }
  set modelIndex(index: number) {
    this.currentModelIndex = index;
  }

  get currentModelOptions(): ModelOptions {
    return this.options.models[this.modelIndex];
  }

  create(Live2dModel: Live2DModelType): Promise<void> {
    return new Promise((resolve, reject) => {
      this.model = Live2dModel.fromSync(this.currentModelOptions.path, {
        motionPreload: (this.currentModelOptions.motionPreloadStrategy as MotionPreloadStrategy) || MotionPreloadStrategy.IDLE,
        onError: reject
      });

      this.model.once('load', resolve);
    });
  }

  // 设置模型
  settingModel(): void {
    switch (getWindowSizeType()) {
      case WindowSizeType.mobile:
        this.setPosition(...(this.currentModelOptions.mobilePosition || []));
        this.setScale(this.currentModelOptions.mobileScale);
        break;
      case WindowSizeType.pc:
        this.setPosition(...(this.currentModelOptions.position || []));
        this.setScale(this.currentModelOptions.scale);
        break;
    }
  }
  // initializeStyle(): void {
  //   this.setScale();
  //   this.setPosition();
  // }

  // 模型尺寸
  get modelSize(): { width: number; height: number } {
    return {
      width: this.model?.width || 0,
      height: this.model?.height || 0
    };
  }

  /**
   * 设置缩放比例
   * @param x
   * @param y
   */
  setScale(value: number = 0.1): void {
    this.model?.scale.set(value, value);
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
}

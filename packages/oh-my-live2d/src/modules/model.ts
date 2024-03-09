import type { InternalModel, Live2DModel } from 'pixi-live2d-display';
// import { HitAreaFrames } from 'pixi-live2d-display/extra';
import type { Application } from 'pixi.js';
import { getRandomArrayItem } from 'tianjie';

import { MotionPreloadStrategy } from '../constants/index.js';
import type { HitAreaFramesType, Live2DModelType, ModelOptions } from '../types/index.js';

export class Model {
  private model: Live2DModel<InternalModel>; // 模型实例
  private failEvent?: (error: Error) => void;

  constructor(
    private live2dModel: Live2DModelType,
    private modelOptions: ModelOptions,
    private application: Application,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private HitAreaFrames: HitAreaFramesType
  ) {
    this.model = this.create();
  }
  create(): Live2DModel<InternalModel> {
    const model = this.live2dModel.fromSync(this.modelOptions.path || '', {
      // 动作预加载策略
      motionPreload: (this.modelOptions.motionPreloadStrategy as MotionPreloadStrategy) || MotionPreloadStrategy.IDLE,
      onError: (e) => {
        this.failEvent?.(e);
      }
    });

    model.once('load', () => {
      if (this.modelOptions.showHitAreaFrames) {
        const hitAreaFrames = new this.HitAreaFrames();

        model.addChild(hitAreaFrames);
      }
      // setTimeout(() => {
      //   model.removeChildAt(0);
      //   setTimeout(() => {
      //     model.addChild(hitAreaFrames);
      //   }, 1000);
      // }, 1000);
      this.application.stage.addChild(this.model);
      this.application.resize();
    });

    // 模型被点击
    model.on('hit', (hitNames: string[]) => {
      const motionKeys = Object.keys(model.internalModel.motionManager.motionGroups);

      let motion = motionKeys.find((key) => {
        return hitNames[0].includes(key.toLowerCase()) || key.toLowerCase().includes(hitNames[0]);
      });

      if (!motion) {
        motion = getRandomArrayItem(motionKeys);
      }

      if (this.modelOptions.motionPreloadStrategy === MotionPreloadStrategy.ALL) {
        void model.motion(motion!);
      } else {
        void model.internalModel.motionManager.loadMotion(motion!, 0).then(() => {
          void model.motion(motion!);
        });
      }
    });

    return model;
  }

  /**
   * 模型资源全部加载完毕的事件回调
   * @param fn
   */
  onLoaded(fn: (modelInfo: { width: number; height: number }) => void): void {
    this.model.once('load', () => {
      fn({ width: this.model.width, height: this.model.height });
    });
  }

  /**
   * 模型加载失败的事件回调
   * @param fn
   */
  onFail(fn: (error: Error) => void): void {
    this.failEvent = fn;
  }
  /**
   * 设置缩放比例
   * @param x
   * @param y
   */
  setScale(x = 0.1, y = 0.1): void {
    this.model.scale.set(x, y);
  }

  /**
   * 设置位置
   * @param x
   * @param y
   */
  setPosition(x = 0, y = 0): void {
    this.model.x = x;
    this.model.y = y;
  }

  /**
   * 切换纹理
   * @param callback
   */
  changeTexture(callback: (options: { status: boolean }) => void): void {
    if (this.model.textures.length <= 1) {
      callback({ status: false });
    } else {
      const currentTexture = this.model.textures.shift();

      this.model.textures.push(currentTexture!);
      callback({ status: true });
    }
  }
}

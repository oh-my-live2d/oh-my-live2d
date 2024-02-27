import { Live2DModelType } from '@/types';
import { Model as ModelOptions } from '@/types/model';
import { InternalModel, Live2DModel } from 'pixi-live2d-display';
import { Application } from 'pixi.js';

export class Model {
  private model: Live2DModel<InternalModel>; // 模型实例
  private failEvent?: (error: Error) => void;

  constructor(private live2dModel: Live2DModelType, private modelOptions: ModelOptions, private application: Application) {
    this.model = this.create();
  }
  create() {
    const model = this.live2dModel.fromSync(this.modelOptions.path || '', {
      onError: (e) => {
        this.failEvent?.(e);
      }
    });

    model.once('load', () => {
      this.application.stage.addChild(this.model!);
      this.application.resize();
    });

    return model;
  }

  /**
   * 模型资源全部加载完毕的事件回调
   * @param fn
   */
  onLoaded(fn: (modelInfo: { width: number; height: number }) => void) {
    this.model.once('load', () => {
      fn({ width: this.model.width, height: this.model.height });
    });
  }

  /**
   * 模型加载失败的事件回调
   * @param fn
   */
  onFail(fn: (error: Error) => void) {
    this.failEvent = fn;
  }
  /**
   * 设置缩放比例
   * @param x
   * @param y
   */
  setScale(x = 0.1, y = 0.1) {
    this.model.scale.set(x, y);
  }

  /**
   * 设置位置
   * @param x
   * @param y
   */
  setPosition(x = 0, y = 0) {
    this.model.x = x;
    this.model.y = y;
  }

  // addSetTask(stak) {
  //   this.taskList.push(stak);
  // }

  // executeStakList() {
  //   if (!this.taskList.length) return;
  //   for (const setTask of this.taskList) {
  //     console.log(setTask);
  //     setTask();
  //     this.taskList.shift();
  //   }
  // }
}

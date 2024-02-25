import { Live2DModelType } from '@/types';
import { InternalModel, Live2DModel } from 'pixi-live2d-display';
import { Application } from 'pixi.js';

export class Model {
  private model: Live2DModel<InternalModel>; // 模型实例
  taskList: any[] = [];
  constructor(private live2dModel: Live2DModelType, private modelOptions, private application: Application) {
    this.model = this.create();
  }
  create() {
    const model = this.live2dModel.fromSync(this.modelOptions.path, {
      onError: (e) => {
        console.log(e);
      }
    });

    model.once('load', () => {
      this.application.stage.addChild(this.model!);
      this.application.resize();
    });
    return model;
  }

  loaded(fn: (modelInfo: { width: number; height: number }) => void) {
    this.model.once('load', () => {
      fn({ width: this.model.width, height: this.model.height });
    });
  }
  /**
   * 设置缩放比例
   * @param x
   * @param y
   */
  setScale(x = 0.3, y = 0.3) {
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

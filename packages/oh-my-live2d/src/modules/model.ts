import type { InternalModel } from 'pixi-live2d-display';
import { Live2DModel } from 'pixi-live2d-display';

import { Pixi } from './pixi.js';
import emitter from '../emitter/index.js';
import { store } from '../store/index.js';

export class Model {
  current?: Live2DModel<InternalModel>;
  constructor(private pixi: Pixi) {}

  get modelOptions() {
    return store.get().currentModel;
  }

  load(): Promise<Live2DModel<InternalModel>> {
    return new Promise((resolve, reject) => {
      const path = store.get().modelPath;

      if (!path) {
        console.error('模型地址未设置');
        reject();
      }

      emitter.emit('modelLoad', 'loading');
      const model = Live2DModel.fromSync(path, {
        onError: (e) => {
          console.error(e);
          emitter.emit('modelLoad', 'fail');
          reject(e);
        }
      });

      model.on('load', () => {
        this.current = model;
        emitter.emit('modelLoad', 'success');

        this.pixi.mountModel(model);

        this.setAnchor(this.modelOptions.anchor?.[0], this.modelOptions.anchor?.[1]);

        this.setPosition(this.modelOptions.position?.[0], this.modelOptions.position?.[1]);

        this.setScale(this.modelOptions.scale);

        this.setRotation(this.modelOptions.rotation);

        store.dispatch('model/setModelSize', {
          width: model.width,
          height: model.height
        });

        this.pixi.resize();

        resolve(model);
      });
    });
  }

  /**
   * 设置缩放比例
   * @param x
   * @param y
   */
  setScale(value: number = 0.1): void {
    if (this.current) {
      this.current.scale.set(value, value);
    }
  }

  /**
   * 设置位置
   * @param x
   * @param y
   */
  setPosition(x = 0, y = 0): void {
    if (this.current) {
      this.current.x = x;
      this.current.y = y;
    }
  }

  /**
   * 设置模型旋转角度
   */
  setRotation(value: number = 0): void {
    if (this.current) {
      this.current.rotation = (Math.PI * value) / 180;
    }
  }

  /**
   * 设置模型在舞台中的锚点位置
   */
  setAnchor(x: number = 0, y: number = 0): void {
    if (this.current) {
      this.current.anchor.set(x, y);
    }
  }
}

import type { InternalModel } from 'pixi-live2d-display';
import { Live2DModel } from 'pixi-live2d-display';

import { Pixi } from './pixi.js';
import emitter from '../emitter/index.js';
import { store } from '../store/index.js';

export class Model {
  current?: Live2DModel<InternalModel>;
  constructor(private pixi: Pixi) {}

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

        store.dispatch('model/setModelSize', {
          width: model.width,
          height: model.height
        });

        this.pixi.mountModel(model);
        this.pixi.resize();

        resolve(model);
      });
    });
  }
}

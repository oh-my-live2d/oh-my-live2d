import { Model } from './model.js';
import { Pixi } from './pixi.js';
import { Stage } from './stage.js';
import { store } from '../store/index.js';
import { Options } from '../types/index.js';

export const loadOml2d = (options: Options) => {
  store.dispatch('options/initialize', options);

  const stage = new Stage();

  const pixi = new Pixi(stage);

  const model = new Model(pixi);

  model.load().then(() => {
    stage.slideIn();
  });
};

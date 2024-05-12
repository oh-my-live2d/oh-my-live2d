import { Stage } from './stage.js';
import { store } from '../store/index.js';
import { Options } from '../types/index.js';

export const loadOml2d = (options: Options) => {
  store.dispatch('options/initialize', options);

  new Stage();
};

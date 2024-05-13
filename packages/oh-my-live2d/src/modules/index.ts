import { OhMyLive2D } from './oml2d.js';
import { store } from '../store/index.js';
import { Options } from '../types/index.js';

export const loadOml2d = (options: Options) => {
  store.dispatch('options/initialize', options);

  const oml2d = new OhMyLive2D();

  return oml2d;
};

import { Stage } from './stage.js';
import { Options } from '../types/index.js';

export const loadOml2d = (options: Options) => {
  console.log(options);
  new Stage();
};

import * as PIXI from 'pixi.js';

import { setup } from './modules/index.js';
import { loadLibrary } from './utils/index.js';

import './library/iconfont.js';

export * from './types/options.js';

(window as any).PIXI = PIXI;

PIXI.utils.skipHello();

export const loadOml2d = setup(async (importType, urls) => {
  const Live2dModule = await loadLibrary(importType, urls);

  return {
    Live2dModule,
    PIXI
  };
});

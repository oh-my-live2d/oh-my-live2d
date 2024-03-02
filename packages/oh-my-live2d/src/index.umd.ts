import { setup } from './modules/index.js';
import { loadUmdLibrary } from './utils/index.js';

import './library/iconfont.js';

export * from './types/options.js';

export const loadOml2d = setup(async (importType, urls) => {
  await loadUmdLibrary(importType, urls);
  window.PIXI.utils.skipHello();

  return {
    PixiLive2dDisplay: window.PIXI.live2d,
    PIXI: window.PIXI
  };
});

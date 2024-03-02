import { setup } from './modules/index.js';
import { loadUmdLibrary } from './utils/index.js';

import './library/iconfont.js';

export * from './types/options.js';

export const loadOml2d = setup(async (importType, urls) => {
  await loadUmdLibrary(importType, urls);
  (window as any).PIXI.utils.skipHello();
  return {
    Live2dModule: (window as any).PIXI.live2d,
    PIXI: (window as any).PIXI
  };
});

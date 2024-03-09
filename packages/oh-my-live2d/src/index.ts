import { HitAreaFrames } from 'pixi-live2d-display/extra';
import * as PIXI from 'pixi.js';

import { setup } from './modules/index.js';
import { loadLibrary } from './utils/index.js';
import './library/iconfont.js';

export * from './types/options.js';

// @ts-ignore
window.PIXI = PIXI;

PIXI.utils.skipHello();

export const loadOml2d = setup(async (importType, urls) => {
  const PixiLive2dDisplay = await loadLibrary(importType, urls);

  return {
    HitAreaFrames,
    PixiLive2dDisplay,
    PIXI
  };
});

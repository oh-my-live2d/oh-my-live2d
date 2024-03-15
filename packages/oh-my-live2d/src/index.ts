import './library/iconfont.js';
import { bootstrap } from './modules/index.js';
import { loadScript } from './utils/index.js';

export * from './types/options.js';
// @ts-ignore
export const loadOml2d = bootstrap(async () => {
  // await loadUmdLibrary(importType, urls);
  await loadScript({ url: 'https://lib.oml2d.com/complete.js', id: 'test' });
  window.PIXI.utils.skipHello();

  return {
    PIXI: window.PIXI,
    PixiLive2dDisplay: window.PIXI.live2d,
    HitAreaFrames: window.PIXI.live2d.HitAreaFrames
  };
});

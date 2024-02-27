import './library/live2dcubism4core';

import { setup } from '@/modules';
import { Live2DModel } from 'pixi-live2d-display/cubism4';
import * as PIXI from 'pixi.js';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism4
export const loadOml2d = setup(Live2DModel);
export * from './types/options';
// export { Options, loadOhMyLive2D };

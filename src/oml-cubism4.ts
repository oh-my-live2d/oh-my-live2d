import './library/live2dcubism4core';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4';
import { setup } from '@/modules';
import { CUBISM4 } from '@/constants';
import type { Options } from '@/types';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism4
const loadOhMyLive2D = setup(CUBISM4, Live2DModel);

export { loadOhMyLive2D, Options };

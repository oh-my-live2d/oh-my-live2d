import './library/live2dcubism2core';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism2';
import { setup } from '@/modules'
import { CUBISM2 } from '@/constants'
import type { Options } from '@/types';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism2
const loadOhMyLive2D = setup(CUBISM2, Live2DModel);

export { loadOhMyLive2D, Options };

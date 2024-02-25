import './library/live2dcubism4core';

import { CUBISM4 } from '@/constants';
import { setup } from '@/modules';
import type { Options } from '@/types';
import { Live2DModel } from 'pixi-live2d-display/cubism4';
import * as PIXI from 'pixi.js';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism4
const loadOhMyLive2D = setup(CUBISM4, Live2DModel);

export { Options, loadOhMyLive2D };

import './library/live2dcubism4core';

import { setup } from '@/modules';
import type { Options } from '@/types/options';
import { Live2DModel } from 'pixi-live2d-display/cubism4';
import * as PIXI from 'pixi.js';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism4
const loadOhMyLive2D = setup(Live2DModel);

export { Options, loadOhMyLive2D };

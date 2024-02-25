import './library/live2dcubism2core';

import { CUBISM2 } from '@/constants';
import { setup } from '@/modules';
import type { Options } from '@/types';
import { Live2DModel } from 'pixi-live2d-display/cubism2';
import * as PIXI from 'pixi.js';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism2
const loadOhMyLive2D = setup(CUBISM2, Live2DModel);

export { Options, loadOhMyLive2D };

import './library/live2dcubism2core';
import './library/live2dcubism4core';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';
import { setup } from './modules';
import { COMPLETE } from './constants';

import type { Options } from '@/types';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// 全量
const loadOhMyLive2D = setup(COMPLETE, Live2DModel);

export { loadOhMyLive2D, Options };

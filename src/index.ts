import './library/live2dcubism2core';
import './library/live2dcubism4core';

import { Live2DModel } from 'pixi-live2d-display';
import * as PIXI from 'pixi.js';
import { setup } from './modules';

import type { Options } from '@/types/options';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// 全量
const loadOhMyLive2D = setup(Live2DModel);

export { Options, loadOhMyLive2D };

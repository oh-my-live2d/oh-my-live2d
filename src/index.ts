import './library/live2dcubism2core';
import './library/live2dcubism4core';
import * as PIXI from 'pixi.js';
import { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display';
import { setup } from './modules/setup';
import type { Options } from '@/types';
(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// 全量
const loadLive2DModel = setup('complete', Live2DModel, MotionPreloadStrategy.ALL);

export { loadLive2DModel, Options };

import './library/live2dcubism4core';
import * as PIXI from 'pixi.js';
import { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display/cubism4';
import { setup } from './modules/setup';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism4
const loadLive2DModel = setup('cubism4', Live2DModel, MotionPreloadStrategy.ALL);

export { loadLive2DModel };

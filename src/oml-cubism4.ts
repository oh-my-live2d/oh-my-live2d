import './library/live2dcubism4core';
import * as PIXI from 'pixi.js';
import { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display/cubism4';
import { setupOhMyLive2d } from './modules/setup';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism4
const loadModel = setupOhMyLive2d('cubism4', Live2DModel, MotionPreloadStrategy.ALL);

export { loadModel };

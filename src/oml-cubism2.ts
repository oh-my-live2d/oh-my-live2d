import './library/live2dcubism2core';
import * as PIXI from 'pixi.js';
import { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display/cubism2';
import { setupOhMyLive2d } from './modules/setup';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism2
const loadLive2DModel = setupOhMyLive2d('cubism2', Live2DModel, MotionPreloadStrategy.ALL);

export { loadLive2DModel };

import './library/live2dcubism2core';
import './library/live2dcubism4core';
import * as PIXI from 'pixi.js';
import { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display';
import { setupOhMyLive2d } from './modules/setup';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// 全量
const loadLive2DModel = setupOhMyLive2d('complete', Live2DModel, MotionPreloadStrategy.ALL);

export { loadLive2DModel };

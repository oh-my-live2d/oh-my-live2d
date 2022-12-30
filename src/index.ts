import './library/live2dcubism2core';
import './library/live2dcubism4core-back2';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';
import { setupOhMyLive2d } from './modules/setup';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// 全量
const loadModel = setupOhMyLive2d('complete', Live2DModel);

export { loadModel };

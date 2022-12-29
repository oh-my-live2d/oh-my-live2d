import './library/live2dcubism2core';
import './library/live2dcubism4core';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4';
import { setupOhMyLive2d } from './modules/setup';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// cubism4
const defineConfig = setupOhMyLive2d('cubism4', Live2DModel);

export { defineConfig };

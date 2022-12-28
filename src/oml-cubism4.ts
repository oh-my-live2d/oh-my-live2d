import './library/live2dcubism2core';
import './library/live2dcubism4core';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4';
import { setup } from './modules/initialization';
import { defineConfig } from './utils/index';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

// 初始化应用
setup(Live2DModel, 'cubism4');

export { defineConfig };

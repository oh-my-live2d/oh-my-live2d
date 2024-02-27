import './library/live2dcubism2core';
import './library/live2dcubism4core';

import { Live2DModel } from 'pixi-live2d-display';
import * as PIXI from 'pixi.js';
import { setup } from './modules';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

/**
 * 加载live2d组件方法
 */
export const loadOml2d = setup(Live2DModel);
export * from './types/options';

// export { Options, loadOhMyLive2D };

import type CSS from 'csstype';
import type { Live2DModel } from 'pixi-live2d-display';
import type { Application } from 'pixi.js';

import type { ModelOptions } from './model.js';
import type { Options } from './options.js';
import type { DeepRequired } from './utils.js';

export * from './options.js';
export * from './utils.js';

export type PIXI_LIVE2D_DISPLAY_MODULE = typeof import('pixi-live2d-display');

export type ApplicationType = typeof Application;
export type CSSProperties = CSS.Properties;
export type DefaultOptions = Omit<DeepRequired<Options>, 'parentElement' | 'models'> & { parentElement: HTMLElement } & {
  models: ModelOptions[];
};
export type Live2DModelType = typeof Live2DModel;

export interface ElementConfig {
  id: string;
  className?: string;
  dataName?: string;
  tagName: string;
  children?: ElementConfig[];
  innerHtml?: string;
  innerText?: string;
}

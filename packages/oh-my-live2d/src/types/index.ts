import type CSS from 'csstype';
import type { Live2DModel } from 'pixi-live2d-display';
import type { HitAreaFrames } from 'pixi-live2d-display/extra';
import type { Application } from 'pixi.js';
import type { DEFAULT_OPTIONS } from 'src/config/config.js';

import type { ModelOptions } from './model.js';
import type { Options } from './options.js';
import { TipsOptions } from './tips.js';
import type { DeepRequired } from './utils.js';

export * from './options.js';
export * from './utils.js';
export type HitAreaFramesType = typeof HitAreaFrames;
export type ImportType = 'complete' | 'cubism2' | 'cubism5';

export type PixiLive2dDisplayModule = typeof import('pixi-live2d-display');

export type PixiModule = typeof import('pixi.js');

// export type MotionPreloadStrategy = PIXI_LIVE2D_DISPLAY_MODULE['MotionPreloadStrategy'];

export type ApplicationType = typeof Application;

export type CSSProperties = CSS.Properties;

export type DefaultOptions = Omit<DeepRequired<Options>, 'parentElement' | 'models' | 'tips'> & {
  parentElement: HTMLElement;
  tips: DefaultTipsOptions;
} & {
  models: ModelOptions[];
};
export type DefaultTipsOptions = Omit<DeepRequired<TipsOptions>, 'style' | 'mobileStyle'> & {
  style?: CommonStyleType;
  mobileStyle?: CommonStyleType;
};

export type Live2DModelType = typeof Live2DModel;

export type LibraryUrls = {
  cubism2: string;
  cubism5: string;
};

export interface ElementConfig {
  id: string;
  className?: string;
  dataName?: string;
  tagName: string;
  children?: ElementConfig[];
  innerHtml?: string;
  innerText?: string;
}

export type WelcomeTipesType = typeof DEFAULT_OPTIONS.tips.welcomeTips;

export type LoadMethod = (
  importType: ImportType,
  libraryUrls: LibraryUrls
) => Promise<{
  PIXI: PixiModule;
  PixiLive2dDisplay: PixiLive2dDisplayModule;
  HitAreaFrames: typeof HitAreaFrames;
}>;

export type CommonStyleType = Omit<CSSProperties, 'width' | 'height'> & {
  width?: number | string;
  height?: number | string;
};

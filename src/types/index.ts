import { Model } from '@/types/model';
import { Options } from '@/types/options';
import CSS from 'csstype';
import type { Live2DModel } from 'pixi-live2d-display';
import { Application } from 'pixi.js';

export type PIXI_LIVE2D_DISPLAY_MODULE = typeof import('pixi-live2d-display');
export type Live2DModelType = typeof Live2DModel;
export type CSSProperties = CSS.Properties;
export type DefaultOptions = Omit<DeepRequired<Options>, 'parentElement' | 'models'> & { parentElement: HTMLElement } & { models: Model[] };
export type ApplicationType = typeof Application;

export type ImportType = 'complete' | 'cubism2' | 'cubism5';

export interface ElementConfig {
  id: string;
  className?: string;
  dataName?: string;
  tagName: string;
  childrens?: ElementConfig[];
  innerHtml?: string;
  innerText?: string;
}

export type DeepRequired<T> = T extends Function ? T : T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : T;
// export type IdleTipsType = typeof defaultOptions.tips.idleTips;

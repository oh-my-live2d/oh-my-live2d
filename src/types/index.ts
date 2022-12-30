// import { Live2DModel } from 'pixi-live2d-display';
// import { Application } from 'pixi.js';

type ImportType = 'complete' | 'cubism2' | 'cubism4';
type EventType = 'ready' | 'load';
type LoadType = 'manual' | 'auto';

interface IConfig {
  canvasElId?: string;
  wrapperElId?: string;
  modelSource?: string;
  size?: number;
  sayHello?: boolean;
  transitionTime?: number;
  x?: number;
  y?: number;
  scale?: number | [x: number, y: number];
  backgroundColor?: string;
}

interface IWrapperContentEls {
  canvasEl: HTMLCanvasElement;
}

interface IEvents {
  afterDisplay?: () => void;
}

export type { IConfig, ImportType, IWrapperContentEls, EventType, IEvents, LoadType };

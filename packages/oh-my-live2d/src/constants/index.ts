export const COMPLETE = 'complete';
export const CUBISM2 = 'cubism2';
export const CUBISM4 = 'cubism4';

export const enum WindowSizeType {
  pc = 'PC',
  mobile = 'MOBILE'
}

export enum MotionPreloadStrategy {
  /** Preload all the motions. */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ALL = 'ALL',
  /** Preload only the idle motions. */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IDLE = 'IDLE',
  /** No preload. */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NONE = 'NONE'
}

export const MODEL_INDEX = '__OML2D_MODEL_INDEX__';
export const MODEL_CLOTHES_INDEX = '__OML2D_MODEL_CLOTHES_INDEX__';
export const MODEL_PATH = '__OML2D_MODEL_PATH__';
export const MODEL_KEY = '__OML2D_MODEL_KEY__';

export const STAGE_ID = 'oml2d-stage';
export const CANVAS_ID = 'oml2d-canvas';
export const STATUS_BAR_ID = 'oml2d-status-bar';

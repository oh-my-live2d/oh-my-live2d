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

import type { LoadOhMyLive2D } from '../modules/load-oml2d.js';
import type { OhMyLive2D } from '../modules/oml2d.js';

import type { CSSProperties, ImportType, LibraryUrls, PixiLive2dDisplayModule, PixiModule } from './index.js';

export type IdleTimer = {
  start: () => Promise<void>;
  stop: () => void;
};

export type WordTheDayData = {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  from_who: string;
  creator: string;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  creator_uid: number;
  reviewer: number;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  commit_from: string;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at: string;
  length: number;
};

export type CommonStyleType = Omit<CSSProperties, 'width' | 'height'> & {
  width?: number | string;
  height?: number | string;
};

export type LoadOml2dSDK = (
  importType: ImportType,
  libraryUrls: LibraryUrls
) => Promise<{
  PIXI: PixiModule;
  PixiLive2dDisplay: PixiLive2dDisplayModule;
}>;
export type OML2D = Omit<OhMyLive2D, 'unMount' | 'initialize'>;

export type StoreModelInfo = { key: string; currentIndex: number } | undefined;

export type Item = {
  id: string;
  icon: string;
  title: string;
  onClick?: ((oml2d: LoadOhMyLive2D) => void) | ((oml2d: LoadOhMyLive2D) => Promise<void>);
};

export type EventFn = ((...arg) => void) | ((...arg) => Promise<void>);
export type ModelEvent = 'load' | 'hit';

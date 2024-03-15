import { OhMyLive2D } from './oml2d.js';
import { DEFAULT_OPTIONS } from '../config/index.js';
import type { LoadMethod, Options } from '../types/index.js';
import { mergeOptions } from '../utils/index.js';

export const bootstrap = (loadMethod: LoadMethod): ((options: Options) => Promise<OhMyLive2D>) => {
  let oml2d: OhMyLive2D;
  const loadOml2d = async (options: Options): Promise<OhMyLive2D> => {
    const finalOptions = mergeOptions(DEFAULT_OPTIONS, options);
    const { PixiLive2dDisplay, PIXI, HitAreaFrames } = await loadMethod(finalOptions.importType, finalOptions.libraryUrls);

    if (oml2d) {
      // oml2d.destroy();
      // oml2d.updateOptions();
    } else {
      oml2d = new OhMyLive2D(finalOptions, PIXI, PixiLive2dDisplay, HitAreaFrames);
      void oml2d.initialize();
    }

    return oml2d;
  };

  return loadOml2d;
};

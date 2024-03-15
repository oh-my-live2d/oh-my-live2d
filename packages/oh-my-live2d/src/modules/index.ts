import { OhMyLive2D } from './oml2d.js';
import { DEFAULT_OPTIONS } from '../config/index.js';
import { OML2D } from '../types/common.js';
import type { DefaultOptions, Options } from '../types/index.js';
import { loadOml2dSDK, mergeOptions } from '../utils/index.js';

export const bootstrap = (): ((options: Options) => Promise<OML2D>) => {
  let oml2d: OhMyLive2D;
  let finalOptions: DefaultOptions = DEFAULT_OPTIONS;
  const loadOml2d = async (options: Options): Promise<OhMyLive2D> => {
    finalOptions = mergeOptions(DEFAULT_OPTIONS, options);
    const { PIXI, PixiLive2dDisplay } = await loadOml2dSDK(finalOptions.importType, finalOptions.libraryUrls);

    oml2d?.unMount();
    oml2d = new OhMyLive2D(finalOptions, PIXI, PixiLive2dDisplay);
    await oml2d.initialize();

    return oml2d;
  };

  return loadOml2d;
};

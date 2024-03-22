import { LoadOhMyLive2D } from './load-oml2d.js';
import type { Options } from '../types/index.js';

export const bootstrap = (): ((options: Options) => Promise<LoadOhMyLive2D>) => {
  const loadOml2d = async (options: Options): Promise<LoadOhMyLive2D> => {
    const oml2d = new LoadOhMyLive2D();

    await oml2d.setup(options);

    return oml2d;
  };

  return loadOml2d;
};

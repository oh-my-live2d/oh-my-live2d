import { LoadOhMyLive2D } from './load-oml2d.js';
import type { Options } from '../types/index.js';

export const bootstrap = (): ((options: Options) => LoadOhMyLive2D) => {
  const loadOml2d = (options: Options): LoadOhMyLive2D => {
    const oml2d = new LoadOhMyLive2D();

    void oml2d.setup(options);

    return oml2d;
  };

  return loadOml2d;
};

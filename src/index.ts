import { setup } from '@/modules';
import { loadLibrary } from '@/utils';
import * as PIXI from 'pixi.js';

(window as any).PIXI = PIXI;
PIXI.utils.skipHello();

export const loadOml2d = setup(async (importType, urls) => {
  const Live2dModule = await loadLibrary(importType, urls);
  return {
    Live2dModule,
    PIXI
  };
});
export * from './types/options';

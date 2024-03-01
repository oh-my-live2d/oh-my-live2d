import { setup } from '@/modules';
import { loadUmdLibrary } from '@/utils';

export const loadOml2d = setup(async (importType, urls) => {
  await loadUmdLibrary(importType, urls);
  (window as any).PIXI.utils.skipHello();
  return {
    Live2dModule: (window as any).PIXI.live2d,
    PIXI: (window as any).PIXI
  };
});

export * from './types/options';

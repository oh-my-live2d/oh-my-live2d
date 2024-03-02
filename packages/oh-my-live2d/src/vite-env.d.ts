/// <reference types="vite/client" />
declare const __VERSION__: string;
declare const __ENV__: 'dev' | undefined;
declare module 'pixi-live2d-display/cubism2';
declare module 'pixi-live2d-display/cubism4';

interface Window {
  PIXI: typeof import('pixi.js') & {
    live2d: typeof import('pixi-live2d-display');
  };
}

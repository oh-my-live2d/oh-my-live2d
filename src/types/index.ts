import { Live2DModel } from 'pixi-live2d-display';
import { Application } from 'pixi.js';

type ImportType = 'complete' | 'cubism2' | 'cubism4';



interface IConfig {
  modelSource?: string;
  size?: number;
  sayHello?: boolean;
  transitionTime?: number;
  x?: number;
  y?: number;
  scale?: number | [x: number, y: number];
  backgroundColor?: string;
}

interface IOML2D {
  version: string;
  importType: ImportType;
  application?: Application;
  live2dModel?: Live2DModel;
  canvasEl: {
    element?: HTMLCanvasElement;
    id: string;
  };
  wrapperEl: {
    element?: HTMLDivElement;
    id: string;
  };

  config: IConfig;
}

// interface ILifecycle {
//   beforeCreate?: () => void;
//   created?: () => void;
//   beforeMount?: () => void;
//   mounted?: () => void;
// }

export type { IOML2D, IConfig,  ImportType };

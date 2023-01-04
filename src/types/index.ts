// import { Live2DModel } from 'pixi-live2d-display';
// import { Application } from 'pixi.js';

type ImportType = 'complete' | 'cubism2' | 'cubism4';
type EventType = 'ready' | 'load';
type LoadType = 'manual' | 'auto';
type TipsType = 'welcome' | 'idle' | 'copy';

interface TipsConfig {
  idleTips: IdleTipsConfig | false;
}

interface Config {
  modelSource?: string;
  size?: number;
  sayHello?: boolean;
  transitionTime?: number;
  x?: number;
  y?: number;
  scale?: number | [x: number, y: number];
  backgroundColor?: string;
  tips?: TipsConfig;
}

interface WrapperContentEls {
  canvasEl: HTMLCanvasElement | null;
  tooltipEl: HTMLDivElement | null;
}

interface IdleTipsConfig {
  message?: string | string[];
  showTime?: number;
  priority?: number;
  interval?: number;
}

interface WelcomeTipsConfig {
  message: {
    daybreak: string;
    morning: string;
    noon: string;
    afternoon: string;
    dusk: string;
    night: string;
    lateNight: string;
    weeHours: string;
  };
  showTime: number;
  priority: number;
}

interface CopyTipsConfig {
  message: string | string[];
  showTime?: number;
  priority?: number;
}

interface Tips {
  idleTips: IdleTipsConfig;
  welcomeTips: WelcomeTipsConfig;
  copyTips: CopyTipsConfig;
}

interface Oml {
  onAfterDisplay: (callback: () => void) => void;
}

interface Events {
  afterDisplay?: () => void;
}

export type {
  TipsType,
  Oml,
  Config,
  ImportType,
  WrapperContentEls,
  EventType,
  Events,
  LoadType,
  Tips,
  IdleTipsConfig,
  WelcomeTipsConfig
};

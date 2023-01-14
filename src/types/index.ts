// import { Live2DModel } from 'pixi-live2d-display';
// import { Application } from 'pixi.js';

type ImportType = 'complete' | 'cubism2' | 'cubism4';
type EventType = 'ready' | 'load';
type LoadType = 'manual' | 'auto';
type TipsType = 'welcomeTips' | 'idleTips' | 'copyTips';

interface OmlStyle {
  themeColor: string;
}

interface Options {
  source?: string;
  position?: [x: number, y: number];
  sayHello?: boolean;
  transitionTime?: number;
  backgroundColor?: string;
  width?: number;
  height?: number;
  scale?: number | [x: number, y: number];
  tips?: Tips | false;
}

interface WrapperContentEls {
  canvasEl?: HTMLCanvasElement;
  tooltipEl?: HTMLDivElement;
}

interface IdleTips {
  message: string | string[];
  persistTime: number;
  priority: number;
  interval: number;
}

interface WelcomeTips {
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
  persistTime: number;
  priority: number;
}

interface CopyTips {
  message: string | string[];
  persistTime: number;
  priority: number;
}

interface Tips {
  idleTips: IdleTips;
  welcomeTips: WelcomeTips;
  copyTips: CopyTips;
}

interface OhMyLive2D {
  onAfterDisplay: (callback: () => void) => void;
}

interface Events {
  afterDisplay?: () => void;
}

export type {
  TipsType,
  OhMyLive2D,
  Options,
  ImportType,
  WrapperContentEls,
  EventType,
  Events,
  LoadType,
  Tips,
  IdleTips,
  WelcomeTips,
  OmlStyle
};

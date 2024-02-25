import { Model } from '@/types/model';
import { Options } from '@/types/options';
import { IdleTips, Tips, WelcomeTips } from '@/types/tips';
import CSS from 'csstype';
import type { Live2DModel } from 'pixi-live2d-display';

export type Live2DModelType = typeof Live2DModel;
export type CSSProperties = CSS.Properties;
export type DefaultOptions = Omit<DeepRequired<Options>, 'mountTarget' | 'models'> & { mountTarget: HTMLElement } & { models: Model[] };

type ImportType = 'complete' | 'cubism2' | 'cubism4';
type EventType = 'ready' | 'load';
type LoadType = 'manual' | 'auto';
type TipsType = 'welcomeTips' | 'idleTips' | 'copyTips';

type ControlID = 'SwitchModel' | 'Setting' | 'About';
type ControlName = 'icon-a-userswitch-fill' | 'icon-setting-fill' | 'icon-info-circle-fill';

interface ElConfig {
  id: string;
  className?: string;
  tagName: string;
  childrens?: ElConfig[];
  innerHtml?: string;
  innerText?: string;
}

interface Controls {
  id: ControlID;
  name: ControlName;
  title: string;
}

interface ElementList {
  stageEl: HTMLDivElement;
  canvasEl: HTMLCanvasElement;
  controlsEl: HTMLDivElement;
  levitatedBtnEl: HTMLDivElement;
  tipsEl: HTMLDivElement;
}

interface Elements {
  canvasEl: ElConfig;
  stageEl: ElConfig;
  tipsEl: ElConfig;
  levitatedBtnEl: ElConfig;
  controlsEl: ElConfig;
}

interface OmlConfig {
  globalStyle: string;
  elements: Elements;
  controls: Controls[];
}

// interface Model {
//   /**
//    * 来源地中具体的模型json配置文件路径
//    */
//   path?: string;
//   /**
//    * 模型的缩放比例
//    */
//   scale?: number | [x: number, y: number];
//   /**
//    * 模型在舞台中X轴方向的位置
//    */
//   x?: number;
//   /**
//    * 模型在舞台中Y轴方向的位置
//    */
//   y?: number;

//   /**
//    * 舞台样式
//    */
//   stageStyle?: {
//     /**
//      * 舞台的背景颜色
//      */
//     backgroundColor?: string;
//     /**
//      * 舞台的宽度
//      */
//     width?: number | 'auto';
//     /**
//      * 舞台的高度
//      */
//     height?: number | 'auto';
//   };
// }

// interface Options<T = Model | [Model, ...Model[]]> {
//   /**
//    * 是否在移动端显示，默认为false
//    */
//   mobileShow?: boolean;
//   /**
//    * 模型来源，固定的远程或本地路径
//    */
//   source?: string;
//   /**
//    * 是否在初始化阶段打印项目信息
//    */
//   sayHello?: boolean;
//   /**
//    * 模型入场和离开的过渡动画时长
//    */
//   transitionTime?: number;
//   /**
//    * 定义一个或一组模型
//    */
//   models?: T;
//   /**
//    * 定义提示框
//    */
//   tips?: Tips | false;
//   /**
//    * 指定挂载元素，不指定则挂载到body
//    */
//   mountTarget?: HTMLElement;
// }

type DeepRequired<T> = T extends Function ? T : T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : T;
type DefaultModel = DeepRequired<Model>;
// type DefaultOptions = DeepRequired<Options<DefaultModel | [DefaultModel, ...DefaultModel[]]>>;
interface WrapperContentEls {
  canvasEl?: HTMLCanvasElement;
  tooltipEl?: HTMLDivElement;
  sideMenuEl?: HTMLDivElement;
}

interface OhMyLive2D {
  /**
   * 模型在完全显示之后的回调
   */
  onAfterDisplay: (callback: () => void) => void;
}

interface Events {
  afterDisplay?: () => void;
}

export type {
  ControlID,
  Controls,
  DeepRequired,
  DefaultModel,
  // DefaultOptions,
  ElConfig,
  ElementList,
  Elements,
  EventType,
  Events,
  IdleTips,
  ImportType,
  LoadType,
  Model,
  OhMyLive2D,
  OmlConfig,
  // Options,
  Tips,
  TipsType,
  WelcomeTips,
  WrapperContentEls
};

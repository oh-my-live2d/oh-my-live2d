import { Model } from '@/types/model';
import { Options } from '@/types/options';
import CSS from 'csstype';
import type { Live2DModel } from 'pixi-live2d-display';

export type Live2DModelType = typeof Live2DModel;
export type CSSProperties = CSS.Properties;
export type DefaultOptions = Omit<DeepRequired<Options>, 'targetElement' | 'models'> & { targetElement: HTMLElement } & { models: Model[] };

// type EventType = 'ready' | 'load';
// type LoadType = 'manual' | 'auto';
// type TipsType = 'welcomeTips' | 'idleTips' | 'copyTips';
// type ControlID = 'SwitchModel' | 'Setting' | 'About';
// type ControlName = 'icon-a-userswitch-fill' | 'icon-setting-fill' | 'icon-info-circle-fill';

export interface ElementConfig {
  id: string;
  className?: string;
  dataName?: string;
  tagName: string;
  childrens?: ElementConfig[];
  innerHtml?: string;
  innerText?: string;
}

// interface Controls {
//   id: ControlID;
//   name: ControlName;
//   title: string;
// }

type DeepRequired<T> = T extends Function ? T : T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : T;
// type DefaultModel = DeepRequired<Model>;
// type DefaultOptions = DeepRequired<Options<DefaultModel | [DefaultModel, ...DefaultModel[]]>>;

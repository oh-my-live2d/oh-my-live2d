import { DefaultOptions, ModelOptions, Options, TipsOptions } from '../types/index.js';

export interface OptionsState {
  options: DefaultOptions;
}

export interface TipsOptionsState {
  tips: TipsOptions | ((currentModel: ModelOptions, modelIndex: number) => TipsOptions);
}

export interface ModelState {
  currentModel: ModelOptions;
  models: ModelOptions[];
  modelIndex: number;
  clothesIndex: number;
  modelPath: string;
  modelWidth: number;
  modelHeight: number;
}

export interface OptionsEvents {
  'options/initialize': Options;
}

export interface ModelEvents {
  'model/initialize': ModelOptions[];
  'model/incIndex': undefined;
  'model/decIndex': undefined;
  'model/setCurrentModel': ModelOptions;
  'model/setIndex': number;
  'model/setModelPath': string;
  'model/setClothesIndex': number;
  'model/incClothesIndex': undefined;
  'model/decClothesIndex': undefined;
  'model/setModelSize': { width: number; height: number };
}

export interface TipsEvents {
  'tips/initialize': TipsOptions | ((currentModel: ModelOptions, modelIndex: number) => TipsOptions);
}

export interface IState extends OptionsState, ModelState, TipsOptionsState {}

export interface Events extends OptionsEvents, ModelEvents, TipsEvents {}

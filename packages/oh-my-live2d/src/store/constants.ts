import { DefaultOptions, ModelOptions, Options } from '../types/index.js';

export interface OptionsState {
  options: DefaultOptions;
}

export interface ModelState {
  currentModel: ModelOptions;
  models: ModelOptions[];
  modelIndex: number;
  clothesIndex: number;
  modelPath: string;
}

export interface IState extends OptionsState, ModelState {}

export interface Events {
  'model/initialize': ModelOptions[];
  'model/incIndex': undefined;
  'model/decIndex': undefined;
  'model/setCurrentModel': ModelOptions;
  'model/setIndex': number;
  'model/setModelPath': string;
  'model/setClothesIndex': number;
  'model/incClothesIndex': undefined;
  'model/decClothesIndex': undefined;

  'options/initialize': Options;
}

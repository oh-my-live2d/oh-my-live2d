import { CommonStyleType } from './common.js';

export interface StatusBarOptions {
  stateColor?: {
    info?: string;
    error?: string;
  };
  style?: CommonStyleType;
}

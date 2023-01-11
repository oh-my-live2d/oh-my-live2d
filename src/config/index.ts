import { Config } from '../types/index';
import { TIPS } from './tips';

// 配置默认值
const defaultConfig: Config = {
  modelSource: '',
  modelPosition: [0, 0],
  sayHello: true,
  transitionTime: 1000,
  stage: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    xs: {
      scale: 0.05
    },
    md: {
      scale: 0.08
    },
    xl: {
      scale: 0.1
    }
  }
};

export { defaultConfig, TIPS };

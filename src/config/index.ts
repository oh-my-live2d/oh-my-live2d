import { Config } from '../types/index';
import { TIPS } from './tips';

// 配置默认值
const defaultConfig: Config = {
  modelSource: 'https://oml-api.tj520.top/model/get?model_id=1&textures_id=2',
  modelPosition: [0, 0],
  sayHello: true,
  transitionTime: 1000,
  stage: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    xs: {
      scale: 0.5,
      size: 140
    },
    md: {
      scale: 0.7,
      size: 196
    },
    xl: {
      scale: 1,
      size: 280
    }
  }
};

export { defaultConfig, TIPS };

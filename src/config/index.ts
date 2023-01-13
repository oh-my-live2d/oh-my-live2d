import { Config } from '../types/index';
import { tips } from './tips';

// 配置默认值
const defaultConfig: Config = {
  modelSource: '',
  position: [0, 0],
  sayHello: true,
  transitionTime: 1000,
  scale: 0.1
};

export { defaultConfig, tips };

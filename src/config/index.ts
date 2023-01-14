import { Config } from '../types/index';
import { tips } from './tips';

// 配置默认值
const defaultConfig: Config = {
  source: '',
  sayHello: true,
  transitionTime: 1000,
  position: [0, 0],
  scale: 0.1,
  backgroundColor: 'rgba(0, 0, 0, 0)'
};

const modelSources = {
  completeModel: 'https://oml-api.tj520.top/pa15_3701/normal/normal.model3.json',
  cubism2Model: 'https://oml-api.tj520.top/pio/index.json',
  cubism4Model: 'https://oml-api.tj520.top/pa15_3701/normal/normal.model3.json'
};

export { defaultConfig, tips, modelSources };

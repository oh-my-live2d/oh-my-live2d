import { Options } from '../types/index';
import { tips } from './tips';

// 配置默认值
const defaultOptions: Options = {
  source: '',
  sayHello: true,
  transitionTime: 1000,
  position: [0, 0],
  scale: 0.04,
  backgroundColor: 'rgba(0, 0, 0, 0)',
  tips
};

const modelSources = {
  completeModel: 'https://oml-api.tj520.top/pa15_3701/normal/normal.model3.json',
  cubism2Model: 'https://oml-api.tj520.top/pio/index.json',
  cubism4Model: 'https://oml-api.tj520.top/pa15_3701/normal/normal.model3.json'
};

export { defaultOptions,  modelSources };

import { DefaultOptions } from '../types/index';
import { copyTipsMessage, idleTipsMessage, welcomeTipsMessage } from './tips-message';

const defaultJsonPath = {
  complete: '/pa15_3701/normal/normal.model3.json',
  cubism2: '/pio/index.json',
  cubism4: '/pa15_3701/normal/normal.model3.json'
};

// 配置默认值
const defaultOptions: DefaultOptions = {
  source: 'https://oml-api.tj520.top',
  sayHello: true,
  transitionTime: 1000,
  models: {
    path: '',
    x: 0,
    y: 0,
    scale: 1,
    stageStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      width: 'auto',
      height: 'auto'
    }
  },
  tips: {
    style: {
      width: 230,
      height: 120,
      offsetX: 0,
      offsetY: 0
    },
    idleTips: {
      message: idleTipsMessage,
      persistTime: 5000,
      interval: 5000,
      priority: 2
    },
    welcomeTips: {
      message: welcomeTipsMessage,
      persistTime: 5000,
      priority: 2
    },
    copyTips: {
      message: copyTipsMessage,
      persistTime: 5000,
      priority: 9
    }
  }
};

export { defaultOptions, defaultJsonPath };

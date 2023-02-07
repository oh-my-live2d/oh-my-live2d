import { copyTipsMessage, idleTipsMessage, welcomeTipsMessage } from './tips-message';
import { globalStyle } from './style';
import '@/library/iconfont';

import type { DefaultOptions, OmlConfig } from '@/types';

const DEV_SOURCE = 'http://localhost:8080';
const PRO_SOURCE = 'https://oml-api.tj520.top';

const defaultJsonPath = {
  complete: '/pa15_3701/normal/normal.model3.json',
  cubism2: '/pio/index.json',
  cubism4: '/pa15_3701/normal/normal.model3.json'
};

const modelSource = __ENV__ === 'dev' ? DEV_SOURCE : PRO_SOURCE;

// 默认选项
const defaultOptions: DefaultOptions = {
  source: modelSource,
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
      height: 100,
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
      priority: 3
    },
    copyTips: {
      message: copyTipsMessage,
      persistTime: 5000,
      priority: 9
    }
  }
};

// config
const omlConfig: OmlConfig = {
  globalStyle,
  elements: {
    canvasEl: {
      id: 'oml-canvas',
      tagName: 'canvas'
    },
    stageEl: {
      id: 'oml-stage',
      tagName: 'div'
    },
    tipsEl: {
      id: 'oml-tips',
      tagName: 'div'
    },
    levitatedBtnEl: {
      id: 'oml-levitated-btn',
      tagName: 'div'
    },
    controlsEl: {
      id: 'oml-controls',
      tagName: 'div'
    }
  },
  controls: [
    {
      id: 'SwitchModel',
      name: 'icon-a-userswitch-fill',
      title: '切换模型'
    },
    {
      id: 'Setting',
      name: 'icon-setting-fill',
      title: '设置'
    },
    {
      id: 'About',
      name: 'icon-info-circle-fill',
      title: '关于'
    }
  ]
};
export { defaultOptions, defaultJsonPath, omlConfig };

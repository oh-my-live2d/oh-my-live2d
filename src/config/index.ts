import '@/library/iconfont';
import { idleTipsMessage, welcomeTipsMessage } from './tips-message';

import type { DefaultOptions } from '@/types';

const DEV_SOURCE = 'https://oml-api.tj520.top';
const PRO_SOURCE = 'https://oml-api.tj520.top';

// const defaultJsonPath = {
//   complete: '/pa15_3701/normal/normal.model3.json',
//   cubism2: '/pio/index.json',
//   cubism4: '/pa15_3701/normal/normal.model3.json'
// };

const modelSource = __ENV__ === 'dev' ? DEV_SOURCE : PRO_SOURCE;

// 默认选项
export const defaultOptions: DefaultOptions = {
  source: modelSource,
  sayHello: true,
  transitionTime: 1000,
  mobileShow: false,
  mountTarget: document.body,
  models: [
    {
      path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
      position: [0, 0],
      scale: 1,
      stageStyle: {}
    }
  ],
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
      // remote: false
    },
    welcomeTips: {
      message: welcomeTipsMessage,
      persistTime: 5000,
      priority: 3
    }

    // copyTips: {
    //   message: copyTipsMessage,
    //   persistTime: 5000,
    //   priority: 9
    // }
  }
};

// const omlConfig: OmlConfig = {
//   globalStyle,
//   elements: {
//     canvasEl: {
//       id: 'oml-canvas',
//       tagName: 'canvas'
//     },
//     stageEl: {
//       id: 'oml-stage',
//       tagName: 'div'
//     },
//     tipsEl: {
//       id: 'oml-tips',
//       tagName: 'div'
//     },
//     levitatedBtnEl: {
//       id: 'oml-levitated-btn',
//       tagName: 'div'
//     },
//     controlsEl: {
//       id: 'oml-controls',
//       tagName: 'div'
//     }
//   },
//   controls: [
//     {
//       id: 'SwitchModel',
//       name: 'icon-a-userswitch-fill',
//       title: '切换模型'
//     },
//     {
//       id: 'Setting',
//       name: 'icon-setting-fill',
//       title: '设置'
//     },
//     {
//       id: 'About',
//       name: 'icon-info-circle-fill',
//       title: '关于'
//     }
//   ]
// };

// config 全局配置
export const config = {
  stageId: 'oml2dStage',
  canvasId: 'oml2dCanvas',
  statusBarId: 'oml2dStatusBar',
  tipsId: 'oml2dTips'
};
// export { defaultJsonPath, defaultOptions, omlConfig };

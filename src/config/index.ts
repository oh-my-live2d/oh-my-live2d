import '@/library/iconfont';
import { idleTipsMessage, welcomeTipsMessage } from './tips-message';

import type { DefaultOptions } from '@/types';

// 默认配置选项, 实例化时会与用户传进来的合并
export const defaultOptions: DefaultOptions = {
  sayHello: true,
  transitionTime: 1000,
  targetElement: document.body,
  models: [],
  tips: {
    style: {
      width: 230,
      height: 100,
      offsetX: 0,
      offsetY: 0
    },
    idleTips: {
      message: idleTipsMessage,
      duration: 3000,
      interval: 8000,
      priority: 2
      // remote: false
    },
    welcomeTips: {
      message: welcomeTipsMessage,
      duration: 6000,
      priority: 3
    }

    // copyTips: {
    //   message: copyTipsMessage,
    //   persistTime: 5000,
    //   priority: 9
    // }
  }
};

//  全局配置
export const config = {
  stageId: 'oml2dStage',
  canvasId: 'oml2dCanvas',
  statusBarId: 'oml2dStatusBar',
  tipsId: 'oml2dTips',
  menusId: 'oml2dMenus'
};

// 菜单的配置
export const menusConfig = [
  {
    id: 'SwitchModel',
    name: 'icon-a-userswitch-fill',
    title: '切换模型'
  },
  {
    id: 'Play',
    name: 'icon-skin-fill',
    title: '变装'
  },
  {
    id: 'About',
    name: 'icon-info-circle-fill',
    title: '关于'
  }
];

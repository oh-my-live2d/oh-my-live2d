import {
  MENUS_DEFAULT_STYLE,
  PRIMARY_COLOR,
  STAGE_DEFAULT_GLOBAL_STYLE,
  STATUS_BAR_DEFAULT_STYLE,
  STATUS_BAR_ERROR_COLOR,
  TIPS_DEFAULT_STYLE
} from './style.js';
import type { DefaultOptions } from '../types/index.js';

// 默认配置选项, 实例化时会与用户传进来的合并
export const DEFAULT_OPTIONS: DefaultOptions = {
  dockedPosition: 'left',
  mobileDisplay: false,
  primaryColor: PRIMARY_COLOR,
  sayHello: true,
  transitionTime: 1000,
  parentElement: document.body,
  importType: 'complete',
  libraryUrls: {
    complete: ``,
    cubism2: ``,
    cubism5: ``
  },
  stageStyle: STAGE_DEFAULT_GLOBAL_STYLE,
  models: [],
  statusBar: {
    disable: false,
    transitionTime: 800,
    switchingMessage: '正在切换',
    loadingMessage: '加载中',
    loadSuccessMessage: '加载成功',
    loadFailMessage: '加载失败',
    reloadMessage: '重新加载',
    restMessage: '看板娘休息中',
    restMessageDuration: 8000,
    loadingIcon: 'icon-loading',
    errorColor: STATUS_BAR_ERROR_COLOR,
    style: STATUS_BAR_DEFAULT_STYLE,
    mobileStyle: STATUS_BAR_DEFAULT_STYLE
  },
  tips: {
    messageLine: 3,
    mobileStyle: TIPS_DEFAULT_STYLE,
    style: TIPS_DEFAULT_STYLE,
    idleTips: {
      wordTheDay: false,
      message: [],
      duration: 5000,
      interval: 10000,
      priority: 2
    },
    welcomeTips: {
      message: {
        daybreak: '早上好！一日之计在于晨，美好的一天就要开始了。',
        morning: '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
        noon: '中午了，工作了一个上午，现在是午餐时间！',
        afternoon: '午后很容易犯困呢，来杯咖啡吧~',
        dusk: '傍晚了！工作一天幸苦啦~',
        night: '晚上好，今天过得怎么样呢？',
        lateNight: '已经这么晚了呀，早点休息吧，晚安~',
        weeHours: '这么晚还不睡吗？当心熬夜秃头哦！'
      },
      duration: 6000,
      priority: 3
    },
    copyTips: {
      duration: 3000,
      priority: 3,
      message: ['你复制了什么内容呢?记得注明出处哦~']
    }
  },
  menus: {
    disable: false,
    items: [
      {
        id: 'Rest',
        icon: 'icon-rest',
        title: '休息',
        onClick(oml2d): void {
          oml2d.statusBarOpen(oml2d.options.statusBar?.restMessage); // 展示状态条
          oml2d.clearTips(); // 清除当前提示框内容, 并停止空闲消息播放器

          // 为状态条绑定点击事件
          oml2d.setStatusBarClickEvent(() => {
            void oml2d.statusBarClose(); // 关闭状态条
            void oml2d.stageSlideIn(); // 舞台滑入
            oml2d.statusBarClearEvents(); // 清除所有事件
          });

          void oml2d.stageSlideOut(); // 舞台滑出
        }
      },
      {
        id: 'SwitchModelClothes',
        icon: 'icon-skin',
        title: '切换衣服',
        onClick(oml2d): void {
          void oml2d.loadNextModelClothes();
        }
      },
      {
        id: 'SwitchModel',
        icon: 'icon-switch',
        title: '切换模型',
        onClick(oml2d): void {
          void oml2d.loadNextModel();
        }
      },
      {
        id: 'About',
        icon: 'icon-about',
        title: '关于',
        onClick(): void {
          window.open('https://oml2d.com');
        }
      }
    ],
    style: MENUS_DEFAULT_STYLE,
    itemStyle: {},
    mobileStyle: MENUS_DEFAULT_STYLE,
    mobileItemStyle: {}
  },
  initialStatus: 'active'
};

export const ELEMENT_ID = {
  globalStyle: 'oml2d-global-style',
  stage: 'oml2d-stage',
  canvas: 'oml2d-canvas',
  statusBar: 'oml2d-statusBar',
  tips: 'oml2d-tips',
  menus: 'oml2d-menus',
  iconSvg: 'oml2d-icon-svg'
};

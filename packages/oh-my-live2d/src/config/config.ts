import type { DefaultOptions } from '../types/index.js';

// 第三方库服务地址
const libServicePath = 'https://lib.oml2d.com';

export const PRIMARY_COLOR = '#38B0DE';
export const STATUS_BAR_ERROR_COLOR = '#F08080';
// 默认配置选项, 实例化时会与用户传进来的合并
export const DEFAULT_OPTIONS: DefaultOptions = {
  mobileDisplay: false,
  fixed: true,
  primaryColor: PRIMARY_COLOR,
  sayHello: true,
  transitionTime: 1000,
  parentElement: document.body,
  importType: 'complete',
  libraryUrls: {
    complete: `${libServicePath}/complete.js`,
    cubism2: `${libServicePath}/live2d.min.js`,
    cubism5: `${libServicePath}/live2dcubismcore.min.js`
  },
  models: [],
  statusBar: {
    errorColor: STATUS_BAR_ERROR_COLOR,
    style: {
      minWidth: '20px',
      minHeight: '40px',
      position: 'fixed',
      transform: 'translateX(-110%)',
      left: '0',
      bottom: '80px',
      padding: '7px 5px',
      zIndex: '9998',
      borderStyle: 'solid',
      borderColor: '#fff',
      fontWeight: 'bold',
      borderRadius: '0 5px 5px 0',
      borderWidth: '2px 2px 2px 0',
      boxShadow: '0 0 5px #999',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      flexWrap: 'wrap',
      fontSize: '14px',
      writingMode: 'vertical-lr',
      cursor: 'pointer'
      // backgroundColor: PRIMARY_COLOR
    }
    // stateColor: {
    //   info: PRIMARY_COLOR,
    //   error: STATUS_BAR_ERROR_COLOR
    // }
  },
  tips: {
    messageLine: 3,
    mobileStyle: {},
    style: {
      position: 'absolute',
      fontSize: '18px',
      borderRadius: '10px',
      filter: 'drop-shadow(0 0 5px #999)',
      border: '2px solid #fff',
      color: '#fff',
      padding: '5px 5px',
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      justifyContent: 'center',
      animationDuration: `1000ms,1000ms`,
      animationFillMode: 'forwards, none',
      animationIterationCount: '1, infinite',
      width: '60%',
      left: '50%',
      top: 0,
      display: 'flex',
      alignItems: 'center',
      minHeight: '100px'
      // backgroundColor: PRIMARY_COLOR
    },
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
    style: {
      transition: 'all 500ms',
      visibility: 'hidden',
      opacity: 0,
      position: 'absolute',
      right: 0,
      bottom: '10%',
      zIndex: '9999',
      fontSize: '26px'
    },
    itemStyle: {}
  }
};

export const SDK_ID = {
  cubism2: 'oml2d-cubism2',
  cubism5: 'oml2d-cubism5',
  pixi: 'oml2d-sdk-pixi',
  pixiLive2dDisplay: 'oml2d-pixi-live2d-display',
  pixiLive2dDisplayCubism2: 'oml2d-pixi-live2d-display-cubism2',
  pixiLive2dDisplayCubism4: 'oml2d-pixi-live2d-display-cubism4',
  // pixiLive2dDisplayCubism: 'oml2d-pixi-live2d-display-cubism',
  pixiLive2dDisplayExtra: 'oml2d-pixi-live2d-display-extra'
};

/** 全局配置 */
export const ELEMENT_ID = {
  globalStyle: 'oml2d-global-style',
  stage: 'oml2d-stage',
  canvas: 'oml2d-canvas',
  statusBar: 'oml2d-statusBar',
  tips: 'oml2d-tips',
  menus: 'oml2d-menus',
  iconSvg: 'oml2d-icon-svg'
};

/** 菜单的配置 */
export const MENU_ITEMS = [
  {
    id: 'Rest',
    name: 'icon-bed',
    title: '休息'
  },
  {
    id: 'SwitchModel',
    name: 'icon-a-userswitch-fill',
    title: '切换模型'
  },
  // {
  //   id: 'Play',
  //   name: 'icon-skin-fill',
  //   title: '变装'
  // },
  {
    id: 'About',
    name: 'icon-info-circle-fill',
    title: '关于'
  }
];

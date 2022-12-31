import { OhMyLive2D } from './setup';
import { setElStyle } from '../utils';
import { defaultConfig } from '../config/index';

// 设置默认样式
const setInitialStyle = function (this: OhMyLive2D) {
  setElStyle(this.wrapperEl, {
    width: `${this.config.size}px`,
    height: `${this.config.size}px`,
    backgroundColor: this.config.backgroundColor
  });
};

// 显示live2d组件
const displayLive2d = function (this: OhMyLive2D) {
  setElStyle(this.wrapperEl, {
    visibility: 'visible',
    animationName: 'move',
    animationDuration: `${this.config.transitionTime}ms`,
    animationFillMode: 'forwards'
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
      // 调用显示完成后事件
      this.onEvents.afterDisplay && this.onEvents.afterDisplay();
    }, this.config.transitionTime);
  });
};

// 隐藏live2d组件
// const hiddenLive2d = async () => {
//   return new Promise((resolve) => {
//     setElStyle(_OML2D.wrapperEl.element, {
//       transform: 'translateY(100%)'
//     });
//     setTimeout(() => {
//       resolve(true);
//     }, _OML2D.config.transitionTime);
//   });
// };

// 设置全局初始样式
const setGlobalInitialStyle = () => {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .icon {
      width: 1em; 
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

    #oml-wrapper {
      width: ${defaultConfig.size}px;
      height: ${defaultConfig.size}px;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-color: ${defaultConfig.backgroundColor};
      transform: translateY(100%);
      visibility: hidden;

    }
  
    @keyframes move {
      from {
        transform: translateY(100%);
        visibility: hidden;

      }
      to {
        transform: translateY(0%);
        visibility: visible;

      }
    }
  `;
  document.head.appendChild(styleEl);
};

export { displayLive2d, setInitialStyle, setGlobalInitialStyle };

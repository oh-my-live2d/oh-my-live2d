import { OhMyLive2D } from './setup';
import { setElStyle } from '../utils';
import { defaultConfig } from '../config/index';
import '@/assets/icon/iconfont';

// 设置默认样式
const setInitialStyle = function (this: OhMyLive2D) {
  setElStyle(this.wrapperEl, {
    width: `${this.config.size}px`,
    height: `${this.config.size}px`,
    backgroundColor: this.config.backgroundColor
  });

  // setElStyle(this.suspendBtnEl, {
  //   height: '90px',
  //   width: '50px',
  //   backgroundColor: '#2196f3'
  // })
};

const hiddenSuspendBtn = function (this: OhMyLive2D) {
  setElStyle(this.suspendBtnEl, {
    animationName: 'oml-loading-hidden',
    animationDuration: `${this.config.transitionTime}ms`,
    animationFillMode: 'forwards'
  });
};

// 显示live2d组件
const displayLive2d = function (this: OhMyLive2D) {
  setElStyle(this.wrapperEl, {
    visibility: 'visible',
    animationName: 'oml-display',
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
      z-index: 9997;
      background-color: ${defaultConfig.backgroundColor};
      transform: translateY(100%);
      visibility: hidden;
    }
  

    #oml-suspend-btn {
      position: fixed;
      left: 0;
      bottom: 80px;
      padding: 7px 5px;
      z-index: 9998;
      background-color: #86c8ff;
      border-radius: 0 5px 5px 0;
      box-shadow: 0 0 5px #999;
      color: #fff;
      writing-mode: vertical-lr;
      display: flex;
      align-items: center;
      text-align: center;
      align-items: center;
      flex-wrap: wrap;
      font-size: 14px;
    }

    .oml-loading{
      animation-name: oml-loading-rotate;
      animation-duration: 600ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @keyframes oml-display {
      from {
        transform: translateY(100%);
        visibility: hidden;
      }
      to {
        transform: translateY(0%);
        visibility: visible;
      }
    }

    @keyframes oml-loading-rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes oml-loading-hidden {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-110%);
      }
    }
  `;
  document.head.appendChild(styleEl);
};

export { displayLive2d, setInitialStyle, setGlobalInitialStyle, hiddenSuspendBtn };

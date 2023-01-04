import { OhMyLive2D } from './setup';
import { sleep, setElStyle } from '../utils';
import { defaultConfig } from '../config/index';
import '@/assets/icon/iconfont';

// 设置默认样式
const setInitialStyle = function (this: OhMyLive2D) {
  setElStyle(this.wrapperEl, {
    width: `${this.config.size}px`,
    height: `${this.config.size}px`,
    backgroundColor: this.config.backgroundColor
  });
};

// 隐藏悬浮按钮
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
  
    #oml-canvas{
      position: relative;
      z-index: 9997;
    }

    #oml-suspend-btn {
      position: fixed;
      left: 0;
      bottom: 80px;
      padding: 7px 5px;
      z-index: 9998;
      background-color: #58b0fc;
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


    #oml-tooltip {
      min-width: 80%;
      min-height: 80px;
      position: absolute;
      top: 0;
      left: 50%;
      border-radius: 10px;
      box-shadow: 0 0 5px #999;
      transform: translateX(-50%);
      background-color: #58b0fc;
      border: 3px solid #add7fb;
      font-size: 14px;
      color: #fff;
      padding: 3px 5px;
      opacity: 0;
      visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @keyframes oml-shake-tooltip{
      0% {
        transform: translate(-50%, -37%) scale(0.99);
      }
      50% {
     
        transform: translate(-50%, -35%) scale(1);
      }
      100% {
        transform: translate(-50%, -37%) scale(0.99);
      }
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



    @keyframes oml-display-tooltip {
      0% {
        opacity: 0;
        visibility: hidden;
      }

      100% {
        opacity: 1;
        visibility: visible;
      }
    }

    @keyframes oml-hidden-tooltip {
      0% {
        opacity: 1;
        visibility: visible;
      }

      100% {
        opacity: 0;
        visibility: hidden;
      }
    }

   
  `;
  document.head.appendChild(styleEl);
};

export { displayLive2d, setInitialStyle, setGlobalInitialStyle, hiddenSuspendBtn, setElStyle };

import { LoadOhMyLive2D } from './setup';
import { setElStyle } from '../utils';
import '@/assets/icon/iconfont';

// 设置默认样式
// const setInitialStyle = function (this: LoadOhMyLive2D) {
//   setElStyle(this.wrapperEl, {
//     width: `${this.config.size}px`,
//     height: `${this.config.size}px`,
//     backgroundColor: this.config.backgroundColor
//   });
// };

const setStageStyle = function (this: LoadOhMyLive2D) {
  setElStyle(this.wrapperEl, {
    width: `${this.adaptiveConfig!.width ?? this.model.width}px`,
    height: `${this.adaptiveConfig!.height ?? this.model.height}px`,
    backgroundColor: this.config.stage!.backgroundColor
  });
  this.wrapperContentEls!.canvasEl!.width = this.adaptiveConfig!.width ?? this.model.width;
  this.wrapperContentEls!.canvasEl!.height = this.adaptiveConfig!.height ?? this.model.height;
};

// 隐藏悬浮按钮
const hiddenSuspendBtn = function (this: LoadOhMyLive2D) {
  this.suspendBtnEl!.innerHTML = `<div>加载完成</div>`;

  setElStyle(this.suspendBtnEl, {
    animationName: 'oml-loading-hidden',
    animationDuration: `${this.config.transitionTime}ms`,
    animationFillMode: 'forwards'
  });
};

// 显示live2d组件
const displayLive2d = function (this: LoadOhMyLive2D) {
  setElStyle(this.wrapperEl, {
    visibility: 'visible',
    animationName: 'oml-display',
    animationDuration: `${this.config.transitionTime}ms`,
    animationFillMode: 'forwards'
  });
  return new Promise<void>((resolve) => setTimeout(resolve, this.config.transitionTime));
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
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9997;
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
      top: 0%;
      left: 50%;
      border-radius: 10px;
      box-shadow: 0 0 5px #999;
      transform: translate(-50%,-40%);
      background-color: #58b0fc;
      border: 3px solid #add7fb;
      color: #fff;
      padding: 3px 5px;
      opacity: 0;
      visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media screen and (min-width: 1200px) {
      #oml-tooltip {
        font-size: 16px;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      #oml-tooltip {
        font-size: 14px;
      }
    }

    @media screen and (max-width: 768px) {
      #oml-tooltip {
        font-size: 12px;
      }
    }

    @keyframes oml-shake-tooltip{
      0% {
        transform: translate(-50%, -42%) scale(0.99);
      }
      50% {
     
        transform: translate(-50%, -40%) scale(1);
      }
      100% {
        transform: translate(-50%, -42%) scale(0.99);
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

export { setStageStyle, displayLive2d, setGlobalInitialStyle, hiddenSuspendBtn, setElStyle };

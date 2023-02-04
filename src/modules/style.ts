import { LoadOhMyLive2D } from './setup';
import { setElStyle } from '../utils';
import '@/library/iconfont';

const setTooltipStyle = function (this: LoadOhMyLive2D) {
  if (!this.options.tips) return;
  setElStyle(this.wrapperContentEls?.tooltipEl, {
    width: `${this.options.tips.style.width}px`,
    height: `${this.options.tips.style.height}px`,
    top: `${0 - this.options.tips.style.offsetY}px`,
    left: `${this.model.width / 2 + this.options.models.x + this.options.tips.style.offsetX}px`
  });
};

const setWrapperStyle = function (this: LoadOhMyLive2D) {
  const width = this.options.models.stageStyle.width === 'auto' ? this.model.width : this.options.models.stageStyle.width;
  const height = this.options.models.stageStyle.height === 'auto' ? this.model.height : this.options.models.stageStyle.height;
  setElStyle(this.wrapperEl, {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: this.options.models.stageStyle.backgroundColor
  });
  this.wrapperContentEls!.canvasEl!.width = width;
  this.wrapperContentEls!.canvasEl!.height = height;
};

// 显示live2d组件
const displayLive2d = function (this: LoadOhMyLive2D) {
  this.omlStatus = 'display'
  setElStyle(this.wrapperEl, {
    animationName: 'oml-display',
    animationDuration: `${this.options.transitionTime}ms`,
    animationFillMode: 'forwards'
  });

  return new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
      this.onEvents.afterDisplay && this.onEvents.afterDisplay();
    }, this.options.transitionTime)
  );
};

// 隐藏live2d组件
const hiddenLive2d = function (this: LoadOhMyLive2D) {
  this.omlStatus = 'hidden'
  setElStyle(this.wrapperEl, {
    animationName: 'oml-hidden',
    animationDuration: `${this.options.transitionTime}ms`,
    animationFillMode: 'forwards'
  });
  return new Promise<void>((resolve) => setTimeout(resolve, this.options.transitionTime));
};

// 设置全局初始样式
const setGlobalInitialStyle = () => {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .oml-icon {
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

    #oml-levitated-sphere {
      position: fixed;
      transform: translateX(-110%);
      left: 0;
      bottom: 80px;
      padding: 7px 5px;
      z-index: 9998;
      background-color: #58b0fc;
      border-style: solid;
      border-width: 2px 2px 2px 0px;
      border-color: #fff;
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
      position: absolute;
      top: 0px;
      font-size: 18px;
      border-radius: 10px;
      filter: drop-shadow(0 0 5px #999);
      transform: translate(0%, -40%);
      background-color: #58b0fc;
      border: 2px solid #fff;
      color: #fff;
      padding: 3px 5px;
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%);
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }


    #oml-side-menu {
      transition: all 500ms;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      right: 0;
      bottom: 10%;
      z-index: 9999;
      font-size: 26px;
      /* transform: translateY(-50%); */
    }

    #oml-wrapper:hover > #oml-side-menu {
      visibility: visible;
      opacity: 1;
    }

    #oml-side-menu .oml-menu-item {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      align-items: center;
      transition: all 300ms;
      color: #58b0fc;
      cursor: pointer;
      background-color: #fff;
    }

    #oml-side-menu .oml-menu-item:hover {
      background-color: #58b0fc;
      color: #fff;
      box-shadow: 0 0 5px #000;
    }

    #oml-side-menu .oml-menu-item:not(:last-child) {
      margin-bottom: 10px;
    }

    @keyframes oml-shake-tooltip{
      0% {
        transform: translate(-50%, 5%) scale(0.99);
      }
      50% {
     
        transform: translate(-50%, 0%) scale(1);
      }
      100% {
        transform: translate(-50%, 5%) scale(0.99);
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

    @keyframes oml-hidden {
      from {
        transform: translateY(0%);
        visibility: hidden;
      }
      to {
        transform: translateY(100%);
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

    @keyframes oml-levitated-sphere-hidden {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-120%);
      }
    }


    @keyframes oml-levitated-sphere-display {
      0% {
        transform: translateX(-120%);
      }
      100% {
        transform: translateX(0%);
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

export { hiddenLive2d, setWrapperStyle, displayLive2d, setGlobalInitialStyle, setElStyle, setTooltipStyle };

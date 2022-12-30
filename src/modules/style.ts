import type * as CSS from 'csstype';
import { IConfig } from '../types/index';
import { OhMyLive2D } from './setup';

// 加入样式标签
const appendGlobalStyle = function (this: OhMyLive2D) {
  const styleEl = document.createElement('style');
  document.head.appendChild(styleEl);
  setGlobalInitialStyle(styleEl, this.config);
};

// 设置指定元素样式
const setElStyle = (el: HTMLElement | undefined | null, style: CSS.Properties) => {
  if (!el) return;
  Object.assign(el.style, style);
};

// 显示live2d组件
const displayLive2d = function (this: OhMyLive2D) {
  return new Promise((resolve) => {
    setElStyle(this.wrapperEl, {
      transform: 'translateY(0)'
    });

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
const setGlobalInitialStyle = (styleEl, config: IConfig) => {
  styleEl.innerHTML = `
    .icon {
      width: 1em; 
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

    #${config.wrapperElId} {
      position: fixed;
      bottom: 0;
      left: 0;
      width: ${config.size}px;
      height: ${config.size}px;
      transform: translateY(100%);
      transition: transform ${config.transitionTime}ms;
      background-color: ${config.backgroundColor};
      z-index: 9997;
    }
  `;
};

export { appendGlobalStyle, setGlobalInitialStyle, setElStyle, displayLive2d };

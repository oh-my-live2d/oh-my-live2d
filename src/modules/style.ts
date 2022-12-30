import { OhMyLive2D } from './setup';
import { setElStyle } from '../utils';

// 设置默认样式
const setDefaultStyle = function (this: OhMyLive2D) {
  const styleEl = document.createElement('style');
  document.head.appendChild(styleEl);
  setGlobalInitialStyle(styleEl);

  setElStyle(this.wrapperEl, {
    position: 'fixed',
    left: '0px',
    bottom: `-${this.config.size}px`,
    width: `${this.config.size}px`,
    height: `${this.config.size}px`,
    zIndex: '9999',
    transition: `bottom ${this.config.transitionTime}ms`,
    backgroundColor: this.config.backgroundColor
  });
};

// 显示live2d组件
const displayLive2d = function (this: OhMyLive2D) {
  setElStyle(this.wrapperEl, {
    bottom: '0px'
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
const setGlobalInitialStyle = (styleEl) => {
  styleEl.innerHTML = `
    .icon {
      width: 1em; 
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  `;
};

export {  displayLive2d, setDefaultStyle };

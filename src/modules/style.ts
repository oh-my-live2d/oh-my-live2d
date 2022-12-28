import type * as CSS from 'csstype';
import { _OML2D } from '../config';

// style元素
const styleEl = document.createElement('style');

// 加入样式标签
const appendGlobalStyle = () => {
  document.head.appendChild(styleEl);
  return styleEl;
};

// 设置指定元素样式
const setElStyle = (el: HTMLElement | undefined | null, style: CSS.Properties) => {
  if (!el) return;
  Object.assign(el.style, style);
};

// 显示
const displayLive2d = () => {
  return new Promise((resolve) => {
    setElStyle(_OML2D.wrapperEl.element, {
      transform: 'translateY(0)'
    });
    setTimeout(() => {
      resolve(true);
    }, _OML2D.config.transitionTime);
  });
};

// 隐藏
const hiddenLive2d = async () => {
  return new Promise((resolve) => {
    setElStyle(_OML2D.wrapperEl.element, {
      transform: 'translateY(100%)'
    });
    setTimeout(() => {
      resolve(true);
    }, _OML2D.config.transitionTime);
  });
};

// 设置全局初始样式
const setGlobalStyle = () => {
  setElStyle(_OML2D.wrapperEl.element, {
    backgroundColor: _OML2D.config.backgroundColor
  });

  styleEl.innerHTML = `
    .icon {
      width: 1em; 
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

    #${_OML2D.wrapperEl.id} {
      position: fixed;
      bottom: 0;
      left: 0;
      width: ${_OML2D.config.size}px;
      height: ${_OML2D.config.size}px;
      transform: translateY(100%);
      transition: transform ${_OML2D.config.transitionTime}ms;
      z-index: 999;
    }
  `;
};

export { appendGlobalStyle, setGlobalStyle, setElStyle, displayLive2d, hiddenLive2d };

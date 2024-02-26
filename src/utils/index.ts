import type { CSSProperties, ElementConfig } from '@/types';
import { isNumber } from 'tianjie';

/**
 * 打印项目信息
 * @param importType
 */
export const printProjectInfo = () => {
  const args = [
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${`https://oml2d.com`} Happy Hacking !! ✨ %c %c 🎉🎉🎉 \n`,
    'background: #add7fb; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'background: #add7fb; padding:5px 0;'
  ];
  console.log(...args);
};

export const formatUnit = (value: Record<string, any>) => {
  if ('width' in value && isNumber(value.width)) {
    value.width = `${value.width}px`;
  }
  if ('height' in value && isNumber(value.height)) value.height = `${value.height}px`;
};

/**
 * 根据元素设置内联样式
 * @param style
 * @param el
 */
export const setStyleByElement = (style: CSSProperties, el: HTMLElement) => {
  Object.assign(el.style, style);
};

// 延时
export const sleep = (time: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
};

export const getScreenSize = () => {
  let sizeType;
  const xs = window.matchMedia('screen and (max-width: 768px)');
  const xl = window.matchMedia('screen and (min-width: 768px)');
  if (xs.matches) sizeType = 'xs';
  if (xl.matches) sizeType = 'xl';
  return sizeType;
};

export const createElement = (elConfig: ElementConfig) => {
  const el = document.createElement(elConfig.tagName);
  el.id = elConfig.id;
  if (elConfig.className) el.className = elConfig.className;
  if (elConfig.dataName) el.setAttribute('data-name', elConfig.dataName);
  if (elConfig.childrens) {
    elConfig.childrens.forEach((item) => {
      el.appendChild(createElement(item));
    });
  }
  if (elConfig.innerHtml) el.innerHTML = elConfig.innerHtml;
  if (elConfig.innerText) el.innerText = elConfig.innerText;
  return el;
};

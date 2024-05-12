import CSS from 'csstype';
import { isNumber } from 'tianjie';

import { CSSProperties } from '../types/style/index.js';

export const handleStyleProperties = (value: CSSProperties): CSS.Properties => {
  const style = { ...value };

  if ('width' in value && isNumber(value.width)) {
    style.width = `${value.width}px`;
  }

  if ('height' in value && isNumber(value.height)) {
    style.height = `${value.height}px`;
  }

  return style as CSS.Properties;
};

export const setStyleByElement = (el: HTMLElement, style: CSSProperties): void => {
  const styleObj = handleStyleProperties(style);

  Object.assign(el.style, styleObj);
};

export const setClassName = (el: HTMLElement, className: string) => {
  el.className = className;
};

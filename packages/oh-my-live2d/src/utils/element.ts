import { setStyleByElement } from './style.js';
import { ElementParams } from '../types/extra.js';

export const createElement = (elConfig: ElementParams): HTMLElement => {
  const el = document.createElement(elConfig.tagName);

  el.id = elConfig.id;
  if (elConfig.className) {
    el.className = elConfig.className;
  }
  if (elConfig.dataName) {
    el.setAttribute('data-name', elConfig.dataName);
  }
  if (elConfig.children) {
    elConfig.children.forEach((item) => {
      el.appendChild(createElement(item));
    });
  }

  if (elConfig.innerHtml) {
    el.innerHTML = elConfig.innerHtml;
  }
  if (elConfig.innerText) {
    el.innerText = elConfig.innerText;
  }

  if (elConfig.style) {
    setStyleByElement(el, elConfig.style);
  }

  return el;
};

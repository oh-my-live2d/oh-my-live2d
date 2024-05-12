import CSS from 'csstype';
import { mergeDeep } from 'tianjie';

import { CSSProperties } from '../types/style/index.js';
import { handleStyleProperties, setStyleByElement } from '../utils/style.js';

export class Style {
  style: CSS.Properties = {};
  constructor(
    private element: HTMLElement,
    style: CSSProperties = {}
  ) {
    this.update(style);
  }

  update(style: CSSProperties) {
    const styleObj = handleStyleProperties(style);
    const finalStyle = mergeDeep(this.style, styleObj);

    this.style = finalStyle;
    setStyleByElement(this.element, finalStyle);

    return finalStyle;
  }
}

import CSS from 'csstype';
import { css } from 'goober';
import { mergeDeep } from 'tianjie';

import { CSSProperties } from '../types/style/index.js';
import { handleStyleProperties } from '../utils/style.js';

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
    const className = css({ ...finalStyle });

    this.element.className = className;

    return finalStyle;
  }
}

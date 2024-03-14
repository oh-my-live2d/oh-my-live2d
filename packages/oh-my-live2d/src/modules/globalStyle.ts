import { ELEMENT_ID } from '../config/config.js';
import { generateGlobalStyle } from '../config/style.js';
import { DefaultOptions } from '../types/index.js';
import { createElement } from '../utils/index.js';

// type GlobalStyleType = { primaryColor: string };

// 全局样式
export class GlobalStyle {
  styleSheet: HTMLElement;
  // options: DefaultOptions;
  constructor(private options: DefaultOptions) {
    // this.options = options;
    // destroyElement(ELEMENT_ID.globalStyle);
    this.styleSheet = createElement({
      tagName: 'style',
      id: ELEMENT_ID.globalStyle,
      innerHtml: generateGlobalStyle(this.options.primaryColor)
    });
    document.head.append(this.styleSheet);
  }

  reloadStyleSheet(): void {
    this.styleSheet.innerHTML = generateGlobalStyle(this.options.primaryColor);
  }

  initialize(options: DefaultOptions): void {
    this.options = options;
    this.reloadStyleSheet();
  }
}

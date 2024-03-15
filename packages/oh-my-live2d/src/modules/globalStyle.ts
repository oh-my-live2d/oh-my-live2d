import { ELEMENT_ID } from '../config/config.js';
import { generateGlobalStyle } from '../config/style.js';
import { DefaultOptions } from '../types/index.js';
import { createElement } from '../utils/index.js';

// type GlobalStyleType = { primaryColor: string };

// 全局样式
export class GlobalStyle {
  styleSheet?: HTMLElement;
  // options: DefaultOptions;
  constructor(private options: DefaultOptions) {
    // this.options = options;
    // destroyElement(ELEMENT_ID.globalStyle);
  }

  // 创建
  create(): void {
    this.styleSheet = createElement({
      tagName: 'style',
      id: ELEMENT_ID.globalStyle,
      innerHtml: generateGlobalStyle(this.options.primaryColor)
    });
  }
  //挂载
  mount(): void {
    if (this.styleSheet) {
      document.head.append(this.styleSheet);
    }
  }

  // // 初始化
  // update(options: DefaultOptions): void {
  //   this.options = options;
  //   this.reloadStyleSheet();
  // }

  initializeStyle(): void {
    this.reloadStyleSheet();
  }

  // 重载样式表
  reloadStyleSheet(): void {
    if (this.styleSheet) {
      this.styleSheet.innerHTML = generateGlobalStyle(this.options.primaryColor);
    }
  }
}

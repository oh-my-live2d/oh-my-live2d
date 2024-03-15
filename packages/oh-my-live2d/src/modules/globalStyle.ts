import { ELEMENT_ID } from '../config/config.js';
import { generateGlobalStyle } from '../config/style.js';
import { DefaultOptions } from '../types/index.js';
import { createElement } from '../utils/index.js';

// 全局样式
export class GlobalStyle {
  styleSheet?: HTMLElement;
  constructor(private options: DefaultOptions) {}

  /**
   * 创建
   */
  create(): void {
    this.styleSheet = createElement({
      tagName: 'style',
      id: ELEMENT_ID.globalStyle,
      innerHtml: generateGlobalStyle(this.options.primaryColor)
    });
  }

  /**
   * 挂载
   */
  mount(): void {
    if (this.styleSheet) {
      document.head.append(this.styleSheet);
    }
  }

  /**
   * 卸载
   */
  unMount(): void {
    this.styleSheet?.remove();
  }

  /**
   * 更新
   * @param options
   */
  update(options: DefaultOptions): void {
    this.options = options;
    this.reloadStyleSheet();
  }

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

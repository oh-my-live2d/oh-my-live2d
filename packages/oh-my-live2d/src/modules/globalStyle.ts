import { generateGlobalStyle } from '../config/style.js';
import { createElement } from '../utils/index.js';

type GlobalStyleType = { primaryColor: string };
// 全局样式
export class GlobalStyle {
  styleSheet: HTMLElement;
  constructor(private style: GlobalStyleType) {
    this.styleSheet = createElement({ tagName: 'style', id: 'oml2dStyle', innerHtml: generateGlobalStyle(this.style.primaryColor) }); // 创建全局样式表
    document.head.append(this.styleSheet);
  }

  reloadStyleSheet(style: GlobalStyleType): void {
    this.styleSheet.innerHTML = generateGlobalStyle(style.primaryColor);
  }
}

import { isArray, isFunction, mergeDeep } from 'tianjie';

import { DEFAULT_OPTIONS, ELEMENT_ID } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import { Item, OML2D } from '../types/common.js';
import type { CSSProperties, DefaultOptions, MenusOptions } from '../types/index.js';
import { createElement, getWindowSizeType, handleCommonStyle, setStyleForElement } from '../utils/index.js';

export class Menus {
  element?: HTMLElement;
  private style: CSSProperties = {};
  private itemStyle: CSSProperties = {};
  private menuItemList: HTMLElement[] = [];

  constructor(
    private options: DefaultOptions,
    private oml2d: OML2D
  ) {}

  private get menuOptions(): MenusOptions {
    return this.options.menus;
  }

  createMenuItemElements(items: Item[]): void {
    this.menuItemList = items.map((item) => {
      const el = createElement({
        id: item.id,
        tagName: 'div',
        dataName: item.id,
        className: 'oml2d-menus-item',
        innerHtml: `
<svg class="oml2d-icon">
  <use xlink:href="#${item.icon}"></use>
</svg>
`
      });

      el.title = item.title;

      el.onclick = (): void => {
        item.onClick?.(this.oml2d);
      };

      return el;
    });
  }
  createMenuItem(): void {
    if (isArray(this.menuOptions.items)) {
      this.createMenuItemElements(this.menuOptions.items);
    } else if (isFunction(this.menuOptions.items)) {
      const items = this.menuOptions.items(DEFAULT_OPTIONS.menus.items);

      this.createMenuItemElements(items);
    }
  }

  /**
   * 创建
   */
  create(): void {
    this.element = createElement({ id: ELEMENT_ID.menus, tagName: 'div', className: ELEMENT_ID.menus });
    this.createMenuItem();
  }

  /**
   * 挂载
   * @param stageElement
   */
  mount(stageElement: HTMLElement): void {
    if (this.element) {
      stageElement.append(this.element);
      this.element.append(...this.menuItemList);
      stageElement.onmouseover = (): void => {
        this.setStyle({ opacity: 1, visibility: 'visible' });
      };
      stageElement.onmouseout = (): void => {
        this.setStyle({ opacity: 0, visibility: 'hidden' });
      };

      // 适配移动端交互
      let timer: number;

      stageElement.ontouchend = (): void => {
        clearTimeout(timer);
        this.setStyle({ opacity: 1, visibility: 'visible' });
        timer = setTimeout(() => {
          this.setStyle({ opacity: 0, visibility: 'hidden' });
        }, 3000);
      };
    }
  }

  /**
   * 重载样式
   */
  reloadStyle(): void {
    switch (getWindowSizeType()) {
      case WindowSizeType.pc:
        this.setStyle(handleCommonStyle(this.options.menus.style || {}));
        this.setItemStyle(handleCommonStyle(this.options.menus.itemStyle || {}));
        break;
      case WindowSizeType.mobile:
        this.setStyle(handleCommonStyle(this.options.menus.mobileStyle || {}));
        this.setItemStyle(handleCommonStyle(this.options.menus.mobileItemStyle || {}));
        break;
    }
  }

  /**
   * 初始化样式
   */
  initializeStyle(): void {
    this.reloadStyle();
  }

  // 更新
  update(options: DefaultOptions): void {
    this.options = options;
    this.reloadStyle();
  }

  setStyle(style: CSSProperties): void {
    if (this.element) {
      this.style = mergeDeep(this.style, style);
      setStyleForElement(this.style, this.element);
    }
  }

  setItemStyle(style: CSSProperties): void {
    this.itemStyle = mergeDeep(this.itemStyle, style);
    this.menuItemList.forEach((item) => {
      setStyleForElement(this.itemStyle, item);
    });
  }
}

import { mergeDeep } from 'tianjie';

import { ELEMENT_ID, MENU_ITEMS } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import type { CSSProperties, DefaultOptions } from '../types/index.js';
import { createElement, getWindowSizeType, handleCommonStyle, setStyleForElement } from '../utils/index.js';

export class Menus {
  element?: HTMLElement;
  private style: CSSProperties = {};
  private itemStyle: CSSProperties = {};
  private clickItem?: ((name: string) => void) | ((name: string) => Promise<void>);
  private menuItemList: HTMLElement[] = [];

  constructor(private options: DefaultOptions) {}

  createMenuItem(): void {
    this.menuItemList = MENU_ITEMS.map((item) => {
      const el = createElement({
        id: item.id,
        tagName: 'div',
        dataName: item.id,
        className: 'oml2d-menus-item',
        innerHtml: `
      <svg class="oml2d-icon">
        <use xlink:href="#${item.name}"></use>
      </svg>
    `
      });

      el.title = item.title;

      return el;
    });

    // this.element.append(...this.menuItemList);

    // this.element.addEventListener('click', (e) => {
    //   if (e.target === e.currentTarget) {
    //     return;
    //   }
    //   let target = e.target as HTMLElement;

    //   while (target.parentNode !== e.currentTarget) {
    //     target = target.parentNode as HTMLElement;
    //   }

    //   void this.clickItem?.(target.getAttribute('data-name')!);
    // });
  }
  create(): void {
    this.element = createElement({ id: ELEMENT_ID.menus, tagName: 'div', className: ELEMENT_ID.menus });
    this.createMenuItem();
  }

  mount(stageElement: HTMLElement): void {
    if (this.element) {
      stageElement.append(this.element);
      this.element.append(...this.menuItemList);
      stageElement.addEventListener('mouseover', () => this.setStyle({ opacity: 1, visibility: 'visible' }));
      stageElement.addEventListener('mouseout', () => this.setStyle({ opacity: 0, visibility: 'hidden' }));
    }
  }

  reloadStyle(): void {
    switch (getWindowSizeType()) {
      case WindowSizeType.pc:
        this.setStyle(handleCommonStyle(this.options.menus.style || {}));
        this.setItemStyle(handleCommonStyle(this.options.menus.itemStyle || {}));
        break;
      case WindowSizeType.mobile:
        this.setStyle(handleCommonStyle(this.options.menus.style || {}));
        this.setItemStyle(handleCommonStyle(this.options.menus.itemStyle || {}));
        break;
    }
  }

  initializeStyle(): void {
    this.reloadStyle();
  }

  // 更新
  update(options: DefaultOptions): void {
    this.options = options;
    this.reloadStyle();
  }

  onClickItem(fn: ((name) => void) | ((name) => Promise<void>)): void {
    this.clickItem = fn;
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

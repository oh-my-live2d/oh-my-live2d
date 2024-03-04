import { mergeDeep } from 'tianjie';

import { CONFIG, MENU_ITEMS } from '../config/index.js';
import type { CSSProperties } from '../types/index.js';
import { createElement, setStyleForElement } from '../utils/index.js';

export class Menus {
  element: HTMLElement;
  private style: CSSProperties = {};
  private clickItem?: ((name: string) => void) | ((name: string) => Promise<void>);

  constructor(private stageElement: HTMLElement) {
    this.element = createElement({ id: CONFIG.menusId, tagName: 'div', className: CONFIG.menusId });
    this.createMenuItem();
    this.stageElement.append(this.element);
    this.ininStyle();
  }

  ininStyle(): void {
    this.setStyle({
      transition: 'all 500ms',
      visibility: 'hidden',
      opacity: 0,
      position: 'absolute',
      right: 0,
      bottom: '10%',
      zIndex: '9999',
      fontSize: '26px'
    });

    this.stageElement.addEventListener('mouseover', () => this.setStyle({ opacity: 1, visibility: 'visible' }));
    this.stageElement.addEventListener('mouseout', () => this.setStyle({ opacity: 0, visibility: 'hidden' }));
  }
  createMenuItem(): void {
    const menuItemList = MENU_ITEMS.map((item) => {
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

    this.element.append(...menuItemList);

    this.element.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        return;
      }
      let target = e.target as HTMLElement;

      while (target.parentNode !== e.currentTarget) {
        target = target.parentNode as HTMLElement;
      }

      void this.clickItem?.(target.getAttribute('data-name')!);

      // switch (target.getAttribute('data-name')) {
      //   case 'SwitchModel':
      //     this.switchModel();
      //     break;
      //   case 'Setting':
      //     this.displayLevitatedSphere('text', '施工中', 3000);
      //     break;
      //   case 'About':
      //     this.displayLevitatedSphere('text', '施工中', 3000);
      //     break;
      // }
    });
  }

  onClickItem(fn: ((name) => void) | ((name) => Promise<void>)): void {
    this.clickItem = fn;
  }

  setStyle(style: CSSProperties): void {
    this.style = mergeDeep(this.style, style);
    setStyleForElement(this.style, this.element);
  }
}

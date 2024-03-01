import { config, menusConfig } from '@/config';
import { CSSProperties } from '@/types';
import { createElement, setStyleByElement } from '@/utils';
import { mergeDeep } from 'tianjie';

export class Menus {
  element: HTMLElement;
  private style: CSSProperties = {};
  private clickItem?: (name: string) => void;

  constructor(private stageElement: HTMLElement) {
    this.element = createElement({ id: config.menusId, tagName: 'div', className: config.menusId });
    this.createMenuItem();
    this.stageElement.append(this.element);
    this.ininStyle();
  }

  ininStyle() {
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
  createMenuItem() {
    const menuItemList = menusConfig.map((item) => {
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
      if (e.target === e.currentTarget) return;
      let target: any = e.target;
      while (target.parentNode !== e.currentTarget) {
        target = target.parentNode;
      }
      this.clickItem?.(target.getAttribute('data-name'));

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

  onClickItem(fn: (name) => void) {
    this.clickItem = fn;
  }

  setStyle(style: CSSProperties) {
    this.style = mergeDeep(this.style, style);
    setStyleByElement(this.style, this.element);
  }
}

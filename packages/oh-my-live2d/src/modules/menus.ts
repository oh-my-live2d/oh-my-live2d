import { isArray, isFunction, mergeDeep } from 'tianjie';

import type { OhMyLive2D } from './oml2d.js';
import { DEFAULT_OPTIONS, ELEMENT_ID } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import { Item } from '../types/common.js';
import type { CSSProperties, DefaultMenusOptions, DefaultOptions, MenusOptions, ModelOptions } from '../types/index.js';
import { createElement, getWindowSizeType, handleCommonStyle, handleDockedPosition, setStyleForElement } from '../utils/index.js';

export class Menus {
  element?: HTMLElement;
  private style: CSSProperties = {};
  private itemStyle: CSSProperties = {};
  private menuItemList: HTMLElement[] = [];
  private _menuOptions: DefaultMenusOptions = DEFAULT_OPTIONS.menus;

  constructor(
    private options: DefaultOptions,
    private oml2d: OhMyLive2D
  ) {}

  reload(stageElement: HTMLElement): void {
    this.unmount();
    this.create();
    this.reloadStyle();
    this.mount(stageElement);
  }

  private get menuOptions(): MenusOptions {
    return this._menuOptions;
  }

  private set menuOptions(opt: MenusOptions | ((model: ModelOptions, index: number) => MenusOptions)) {
    let finalOpt: DefaultMenusOptions;

    if (isFunction(opt)) {
      finalOpt = mergeDeep(
        DEFAULT_OPTIONS.menus,
        opt(this.options.models[this.oml2d.modelIndex || 0], this.oml2d.modelIndex || 0)
      ) as DefaultMenusOptions;
    } else {
      finalOpt = opt as DefaultMenusOptions;
    }
    this._menuOptions = finalOpt;
  }

  createMenuItemElements(items: Item[]): void {
    this.menuItemList = items.map((item) => {
      const el = createElement({
        id: item.id,
        tagName: 'div',
        dataName: item.id,
        className: 'oml2d-menus-item',
        innerHtml: `<svg class="oml2d-icon"><use xlink:href="#${item.icon}"></use></svg>`
      });

      el.title = item.title;

      el.onclick = (): void => {
        void item.onClick?.(this.oml2d);
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
    this.menuOptions = this.options.menus;
    if (this.menuOptions.disable === false) {
      this.element = createElement({ id: ELEMENT_ID.menus, tagName: 'div', className: ELEMENT_ID.menus });
      this.createMenuItem();
    }
  }

  unmountItems(): void {
    this.menuItemList.forEach((item) => {
      item.remove();
    });
  }

  unmount(): void {
    this.unmountItems();
    this.element?.remove();
  }

  mountItems(): void {
    if (this.element) {
      this.element.append(...this.menuItemList);
    }
  }

  /**
   * 挂载
   * @param stageElement
   */
  mount(stageElement: HTMLElement): void {
    if (this.element) {
      stageElement.append(this.element);

      this.mountItems();
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
    this.style = {};
    switch (getWindowSizeType()) {
      case WindowSizeType.pc:
        this.setStyle(
          handleCommonStyle(mergeDeep(handleDockedPosition(this.options.dockedPosition, 10, true), this.menuOptions.style || {}))
        );
        this.setItemStyle(handleCommonStyle(this.menuOptions.itemStyle || {}));
        break;
      case WindowSizeType.mobile:
        this.setStyle(
          handleCommonStyle(mergeDeep(handleDockedPosition(this.options.dockedPosition, 10, true), this.menuOptions.mobileStyle || {}))
        );
        this.setItemStyle(handleCommonStyle(this.menuOptions.mobileItemStyle || {}));
        break;
    }
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

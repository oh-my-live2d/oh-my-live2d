import { isNumber, mergeDeep } from 'tianjie';

import { ELEMENT_ID } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import type { CSSProperties, DefaultOptions, DefaultStatusBarOptions } from '../types/index.js';
import { createElement, getWindowSizeType, handleCommonStyle, handleDockedPosition, setStyleForElement } from '../utils/index.js';

export type HoverActionParams = {
  content: string;
};

/**
 * 状态条
 */
export class StatusBar {
  element?: HTMLElement;

  private style: CSSProperties = {};
  private timer = 0;
  private status = false;
  constructor(private options: DefaultOptions) {}

  get statusBarOptions(): DefaultStatusBarOptions {
    return this.options.statusBar;
  }

  create(): void {
    if (!this.options.statusBar.disable) {
      this.element = createElement({ id: ELEMENT_ID.statusBar, tagName: 'div', innerText: '' });
    }
  }

  mount(): void {
    if (this.element) {
      this.options.parentElement.append(this.element);
    }
  }

  reloadStyle(): void {
    this.style = {};

    switch (getWindowSizeType()) {
      case WindowSizeType.pc:
        this.setStyle(handleCommonStyle(mergeDeep(handleDockedPosition(this.options.dockedPosition), this.options.statusBar.style || {})));
        break;
      case WindowSizeType.mobile:
        this.setStyle(
          handleCommonStyle(mergeDeep(handleDockedPosition(this.options.dockedPosition), this.options.statusBar.mobileStyle || {}))
        );
        break;
    }
  }

  // 初始化样式
  initializeStyle(): void {
    this.setColor(this.options.primaryColor);
    this.reloadStyle();
  }

  // 卸载
  unMount(): void {
    this.element?.remove();
  }

  // 重新挂载
  reMounte(): void {
    this.unMount();
    this.mount();
  }

  /**
   * 设置样式
   * @param style
   */
  setStyle(style: CSSProperties): void {
    if (this.element) {
      this.style = mergeDeep(this.style, style);
      setStyleForElement(style, this.element);
    }
  }

  private slideIn(): Promise<void> {
    return new Promise((resolve) => {
      if (this.status) {
        resolve();
      }
      {
        this.setStyle({
          animationName: `oml2d-status-bar-${this.options.dockedPosition}-slide-in`,
          animationDuration: `${this.statusBarOptions.transitionTime}ms`,
          animationFillMode: 'forwards'
        });
        setTimeout(() => {
          this.status = true;
          resolve();
        }, this.statusBarOptions.transitionTime);
      }
    });
  }

  private slideOut(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.status) {
        resolve();
      } else {
        this.setStyle({
          animationName: `oml2d-status-bar-${this.options.dockedPosition}-slide-out`,
          animationDuration: `${this.statusBarOptions.transitionTime}ms`,
          animationFillMode: 'forwards'
        });
        setTimeout(() => {
          this.status = true;
          resolve();
        }, this.statusBarOptions.transitionTime);
      }
    });
  }

  showLoading(): void {
    void this.open(
      `
      <div style="margin-bottom:3px;">${this.statusBarOptions.loadingMessage}</div>
      <svg class="oml2d-icon oml2d-loading" aria-hidden="true">
        <use xlink:href=#${this.statusBarOptions.loadingIcon}></use>
      </svg>
    `
    );
  }

  hideLoading(): void {
    this.popup(this.statusBarOptions.loadSuccessMessage, 1000);
  }

  setHoverEvent(events?: { onIn?: () => void | Promise<void>; onOut?: () => void | Promise<void> }): void {
    if (this.element) {
      this.element.onmouseover = events?.onIn || null;
      this.element.onmouseout = events?.onOut || null;
    }
  }

  setClickEvent(onClick: (() => void) | (() => Promise<void>)): void {
    if (this.element) {
      this.element.onclick = onClick;
    }
  }

  // 清除hover
  clearHoverEvent(): void {
    if (this.element) {
      this.element.onmouseover = null;
      this.element.onmouseout = null;
    }
  }

  // 清除点击事件
  clearClickEvent(): void {
    if (this.element) {
      this.element.onclick = null;
    }
  }

  rest(): void {
    this.popup(this.statusBarOptions.restMessage, this.statusBarOptions.restMessageDuration);
  }

  /**
   * 专门处理加载失败, 需要传入一个重新加载的方法
   * @param reloadFn
   */
  loadingError(reloadFn: () => void): void {
    this.setHoverEvent({
      onIn: () => {
        this.setContent(this.statusBarOptions.reloadMessage);
      },
      onOut: () => {
        this.setContent(this.statusBarOptions.loadFailMessage);
      }
    });

    // 设置点击事件
    this.setClickEvent(() => {
      void reloadFn();
    });

    // 弹出状态提示
    void this.open(this.statusBarOptions.loadFailMessage, this.options.statusBar.errorColor);
  }

  get stateColor(): { info: string; error: string } {
    return {
      info: this.options.primaryColor,
      error: this.options.statusBar.errorColor
    };
  }

  setColor(color: string): void {
    if (!color) {
      return;
    }
    this.setStyle({ backgroundColor: color });
  }

  open(content?: string, color = this.options.primaryColor): void {
    this.popup(content, false, color);
  }

  close(content?: string, color = this.options.primaryColor, delay = 0): void {
    this.popup(content, delay, color);
  }

  /**
   * 状态条弹出, 自动收起, delay为false时不收起
   * @param message
   * @param state
   * @param delay
   */
  popup(message?: string, delay: number | false = 0, color = this.options.primaryColor): void {
    clearTimeout(this.timer);
    this.setColor(color);
    if (message) {
      this.setContent(message);
    }

    void this.slideIn();

    if (isNumber(delay)) {
      this.timer = setTimeout(() => {
        void this.slideOut();
      }, delay + this.statusBarOptions.transitionTime);
    }
  }

  setContent(content: string): void {
    if (this.element) {
      this.element.innerHTML = content;
    }
  }
}

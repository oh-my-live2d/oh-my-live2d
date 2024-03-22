import { isNumber, mergeDeep } from 'tianjie';

import { ELEMENT_ID } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import type { CSSProperties, DefaultOptions } from '../types/index.js';
import { createElement, getWindowSizeType, handleCommonStyle, setStyleForElement } from '../utils/index.js';

export const enum SystemState {
  info = 'info',
  error = 'error'
}

export type HoverActionParams = {
  state: SystemState;
  content: string;
};

/**
 * 状态条
 */
export class StatusBar {
  element?: HTMLElement;
  transitionTime = 800;

  private style: CSSProperties = {};
  private timer = 0;
  private status = false;
  constructor(private options: DefaultOptions) {}

  create(): void {
    this.element = createElement({ id: ELEMENT_ID.statusBar, tagName: 'div', innerText: '' });
  }

  mount(): void {
    if (this.element) {
      this.options.parentElement.append(this.element);
    }
  }

  reloadStyle(): void {
    switch (getWindowSizeType()) {
      case WindowSizeType.pc:
        this.setStyle(handleCommonStyle(this.options.statusBar.style || {}));
        break;
      case WindowSizeType.mobile:
        this.setStyle(handleCommonStyle(this.options.statusBar.mobileStyle || {}));
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
          animationName: 'oml2d-status-bar-slide-in',
          animationDuration: `${this.transitionTime}ms`,
          animationFillMode: 'forwards'
        });
        setTimeout(() => {
          this.status = true;
          resolve();
        }, this.transitionTime);
      }
    });
  }

  private slideOut(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.status) {
        resolve();
      } else {
        this.setStyle({
          animationName: 'oml2d-status-bar-slide-out',
          animationDuration: `${this.transitionTime}ms`,
          animationFillMode: 'forwards'
        });
        setTimeout(() => {
          this.status = true;
          this.clearClickEvent();
          this.clearHoverEvent();
          resolve();
        }, this.transitionTime);
      }
    });
  }

  showLoading(): void {
    this.popup(
      `
      <div style="margin-bottom:3px;">加载中</div>
      <svg class="oml2d-icon oml2d-loading" aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg>
    `,
      false
    );
  }

  hideLoading(): void {
    this.popup('加载成功');
  }

  // setHoverAction(inContent: HoverActionParams, outContent: HoverActionParams): void {
  //   if (this.element) {
  //     this.element.onmouseover = (): void => {
  //       this.popup(inContent.content, inContent.state, false);
  //     };
  //     this.element.onmouseout = (): void => {
  //       this.popup(outContent.content, outContent.state, false);
  //     };
  //   }
  // }

  setHoverEvent(events?: { onIn?: () => void; onOut?: () => void }): void {
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

  /**
   * 专门处理加载失败, 需要传入一个重新加载的方法
   * @param reloadFn
   */
  loadingError(reloadFn: () => void): void {
    this.setHoverEvent({
      onIn: () => {
        this.setContent('重新加载');
      },
      onOut: () => {
        this.setContent('加载失败');
      }
    });

    // 设置点击事件
    this.setClickEvent(() => {
      void reloadFn();
    });

    // 弹出状态提示
    this.popup('加载失败', false, this.options.statusBar.errorColor);
  }

  // rest(isPermanent = false, callback?: () => void): void {
  //   if (isPermanent) {
  //     this.popup('看板娘休息中', SystemState.info, false, () => {
  //       void this.slideOut();
  //       callback?.();
  //     });
  //   } else {
  //     this.popup('看板娘休息中', SystemState.info, 8000);
  //   }
  // }

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
    // this.setStyle({ backgroundColor: this.stateColor[state] });
    void this.slideIn().then(() => {
      if (isNumber(delay)) {
        this.timer = setTimeout(() => {
          void this.slideOut();
        }, delay);
      }
    });
  }

  setContent(content: string): void {
    if (this.element) {
      this.element.innerHTML = content;
    }
  }
}

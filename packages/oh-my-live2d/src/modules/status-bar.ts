import { mergeDeep } from 'tianjie';

import { ELEMENT_ID } from '../config/index.js';
import type { CSSProperties, DefaultOptions } from '../types/index.js';
import { createElement, handleCommonStyle, setStyleForElement } from '../utils/index.js';

const enum Status {
  display = 1,
  hidden = 0
}

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
  element: HTMLElement;
  transitionTime = 800;
  status: Status = Status.hidden;

  private style: CSSProperties = {};
  private timer = 0;
  constructor(private options: DefaultOptions) {
    // this.options = options;
    this.element = createElement({ id: ELEMENT_ID.statusBar, tagName: 'div', innerText: 'hello' });
    // this.options.parentElement.append(this.element);

    // this.initialize();
  }

  get userStyle(): CSSProperties {
    return handleCommonStyle(this.options.statusBar.style || {});
  }

  initialize(options: DefaultOptions): void {
    this.options = options;
    this.setStyle(this.userStyle);
    this.updateParentElement();
  }

  updateParentElement(): void {
    this.element.remove();
    this.options.parentElement.append(this.element);
  }
  // 销毁
  destroy(): void {
    this.element.remove();
  }

  setStyle(style: CSSProperties): void {
    this.style = mergeDeep(this.style, style);
    this.style.backgroundColor ||= this.stateColor.info;
    setStyleForElement(style, this.element);
  }

  private slideIn(): Promise<Status> {
    return new Promise((resolve) => {
      this.status = Status.display;
      this.setStyle({
        animationName: 'oml2d-status-bar-slide-in',
        animationDuration: `${this.transitionTime}ms`,
        animationFillMode: 'forwards'
      });
      setTimeout(() => {
        resolve(this.status);
      }, this.transitionTime);
    });
  }

  private slideOut(): Promise<Status> {
    return new Promise((resolve) => {
      this.status = Status.hidden;
      this.setStyle({
        animationName: 'oml2d-status-bar-slide-out',
        animationDuration: `${this.transitionTime}ms`,
        animationFillMode: 'forwards'
      });
      setTimeout(() => {
        // 每次收起后移除所有事件
        this.element.onclick = null;
        this.element.onmousemove = null;
        this.element.onmouseout = null;
        resolve(this.status);
      }, this.transitionTime);
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
      SystemState.info,
      false
    );
  }

  hideLoading(): void {
    this.popup('加载成功');
  }

  setHoverAction(inContent: HoverActionParams, outContent: HoverActionParams): void {
    this.element.onmouseover = (): void => {
      this.popup(inContent.content, inContent.state, false);
    };
    this.element.onmouseout = (): void => {
      this.popup(outContent.content, outContent.state, false);
    };
  }

  // 清除hover
  clearHoverAction(): void {
    this.element.onmousemove = null;
    this.element.onmouseout = null;
  }

  /**
   * 专门处理加载失败, 需要传入一个重新加载的方法
   * @param reloadFn
   */
  loadingError(reloadFn: () => void): void {
    this.popup('加载失败', SystemState.error, false);

    // this.setStyle({})
    // 添加 mouseover 事件监听器
    // const mouseover = (): void => {
    //   this.popup('重新加载', SystemState.info, false);
    // };

    // const mouseout = (): void => {
    //   this.popup('加载失败', SystemState.error, false);
    // };
    this.setHoverAction({ content: '重新加载', state: SystemState.info }, { content: '加载失败', state: SystemState.error });
    const handleClick = (): void => {
      reloadFn();
      // this.element.removeEventListener('mouseout', mouseout);
      // this.element.removeEventListener('mouseover', mouseover);
      this.clearHoverAction();
      this.element.removeEventListener('click', handleClick);
      this.showLoading();
    };

    this.element.addEventListener('click', handleClick);
    // this.element.addEventListener('mouseover', mouseover);
    // this.element.addEventListener('mouseout', mouseout);
  }

  rest(isPermanent = false, callback?: () => void): void {
    if (isPermanent) {
      this.popup('看板娘休息中', SystemState.info, false, () => {
        // this.popup('看板娘休息中', SystemState.info, 10);
        void this.slideOut();
        callback?.();
      });
    } else {
      this.popup('看板娘休息中', SystemState.info, 8000);
    }
  }

  get stateColor(): { info: string; error: string } {
    return {
      info: this.options.primaryColor,
      error: this.options.statusBar.errorColor
    };
  }
  /**
   * 状态条弹出, 自动收起, delay为false时不收起
   * @param message
   * @param state
   * @param delay
   */
  popup(message: string, state: SystemState = SystemState.info, delay: number | false = 1000, callback?: () => void): void {
    clearTimeout(this.timer);
    this.setContent(message);
    this.setStyle({ backgroundColor: this.stateColor[state] });
    void this.slideIn().then(() => {
      if (delay) {
        this.timer = setTimeout(() => {
          void this.slideOut();
        }, delay);
      } else {
        if (callback) {
          this.element.onclick = callback;
        }
      }
    });
  }

  setContent(content: string): void {
    this.element.innerHTML = content;
  }
}

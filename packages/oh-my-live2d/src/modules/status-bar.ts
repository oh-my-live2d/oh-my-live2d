import { mergeDeep } from 'tianjie';

import { CONFIG } from '../config/index.js';
import type { CSSProperties } from '../types/index.js';
import { createElement, setStyleForElement } from '../utils/index.js';

const enum Status {
  Display = 1,
  Hidden = 0
}

export const enum SystemState {
  info = 'info',
  error = 'error'
}

/**
 * 状态条
 */
export class StatusBar {
  element: HTMLElement;
  transitionTime = 800;
  status: Status = Status.Hidden;
  stateColor = {
    info: '#58b0fc',
    error: '#F08080'
  };

  private style: CSSProperties = {};
  constructor(wrapperElement: HTMLElement) {
    this.element = createElement({ id: CONFIG.statusBarId, tagName: 'div', innerText: 'hello' });
    wrapperElement.append(this.element);
    this.initStyle();
  }

  initStyle(): void {
    this.setStyle({
      minWidth: '20px',
      minHeight: '50px',
      position: 'fixed',
      transform: 'translateX(-110%)',
      left: '0',
      bottom: '80px',
      padding: '7px 5px',
      zIndex: '9998',
      backgroundColor: '#58b0fc',
      borderStyle: 'solid',
      borderColor: '#fff',
      fontWeight: 'bold',
      borderRadius: '0 5px 5px 0',
      borderWidth: '2px 2px 2px 0',
      boxShadow: '0 0 5px #999',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      flexWrap: 'wrap',
      fontSize: '14px',
      writingMode: 'vertical-lr'
    });
  }

  setStyle(style: CSSProperties): void {
    this.style = mergeDeep(this.style, style);
    setStyleForElement(style, this.element);
  }

  private slideIn(): Promise<Status> {
    return new Promise((resolve) => {
      this.status = Status.Display;
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
      this.status = Status.Hidden;
      this.setStyle({
        animationName: 'oml2d-status-bar-slide-out',
        animationDuration: `${this.transitionTime}ms`,
        animationFillMode: 'forwards'
      });
      setTimeout(() => {
        // this.setStyle({ backgroundColor: this.stateColor.info });
        resolve(this.status);
      }, this.transitionTime);
    });
  }

  showLoading(): void {
    this.setContent(
      `
      <div style="margin-bottom:3px;">加载中</div>
      <svg class="oml2d-icon oml2d-loading" aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg>
    `
    );
    void this.slideIn();
  }

  hideLoading(): void {
    this.popup('加载成功');
  }

  /**
   * 专门处理加载失败, 需要传入一个重新加载的方法
   * @param reloadFn
   */
  loadingError(reloadFn: () => any): void {
    this.popup('加载失败', SystemState.error, false);

    // this.setStyle({})
    // 添加 mouseover 事件监听器
    const mouseover = (): void => {
      this.popup('重新加载', SystemState.info, false);
    };
    const mouseout = (): void => {
      this.popup('加载失败', SystemState.error, false);
    };

    const handleClick = (): void => {
      reloadFn();
      this.element.removeEventListener('mouseout', mouseout);
      this.element.removeEventListener('mouseover', mouseover);
      this.element.removeEventListener('click', handleClick);
    };

    this.element.addEventListener('click', handleClick);
    this.element.addEventListener('mouseover', mouseover);
    this.element.addEventListener('mouseout', mouseout);
  }

  /**
   * 状态条弹出, 自动收起, delay为false时不收起
   * @param message
   * @param state
   * @param delay
   */
  popup(message: string, state: SystemState = SystemState.info, delay: number | false = 1000): void {
    this.setContent(message);
    this.setStyle({ backgroundColor: this.stateColor[state] });
    void this.slideIn().then(() => {
      if (delay) {
        setTimeout(() => {
          void this.slideOut();
        }, delay);
      }
    });
  }

  setContent(content: string): void {
    this.element.innerHTML = content;
  }
}

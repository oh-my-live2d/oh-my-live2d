import { isNumber } from 'tianjie';

import { Style } from './style.js';
import { STATUS_BAR_ID } from '../constants/index.js';
import emitter from '../emitter/index.js';
import { store } from '../store/index.js';
import { icon, loading } from '../styles/icon.js';
import { statusBarLeftSlideOut, statusBarLeftSlidein } from '../styles/keyframes.js';
import { createElement } from '../utils/element.js';

export class StatusBar {
  element: HTMLElement;
  style: Style;

  private timer: number | undefined;
  private status: boolean = false; // 状态, true为显示, false为隐藏
  constructor() {
    this.element = this.create();
    this.style = new Style(this.element);
    this.initialize();
  }

  get options() {
    return store.get().options;
  }

  get statusBarOptions() {
    return store.get().options.statusBar;
  }

  initialize() {
    this.registerListeners();
  }

  create() {
    const el = createElement({
      id: STATUS_BAR_ID,
      tagName: 'div',
      style: {
        backgroundColor: this.options.primaryColor,
        minWidth: '20px',
        minHeight: '50px',
        position: 'absolute',
        transform: 'translateX(-130%)',
        bottom: '80px',
        padding: '7px 5px',
        zIndex: '9998',
        borderStyle: 'solid',
        borderColor: '#fff',
        fontWeight: 'bold',
        borderRadius: '5px',
        borderWidth: '2px',
        boxShadow: '0 0 5px #999',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        // flexWrap: 'wrap',
        // wordWrap: 'revert',
        fontSize: '14px',
        writingMode: 'vertical-lr',
        cursor: 'pointer',
        left: 0
      }
    });

    return el;
  }

  showLoading() {
    const text = `
    <div style="margin-bottom:3px;">${this.statusBarOptions.loadingMessage}</div>
    <svg class="${icon} ${loading}" aria-hidden="true">
      <use xlink:href=#${this.statusBarOptions.loadingIcon}></use>
    </svg>
    `;

    this.style.update({
      minHeight: '60px'
    });

    this.popup(text, false, this.options.primaryColor);
  }

  loadSuccess() {
    this.popup(this.statusBarOptions.loadSuccessMessage, 0, this.options.primaryColor);
  }

  loadFailed() {
    this.slideOut();
    this.statusBarOptions.loadFailMessage, 0, this.statusBarOptions.errorColor;
  }

  slideIn(): Promise<void> {
    return new Promise((resolve) => {
      if (this.status) {
        resolve();
      }
      this.style.update({
        animationName: statusBarLeftSlidein,
        animationDuration: `${this.statusBarOptions.transitionTime}ms`,
        animationFillMode: 'forwards'
      });
      setTimeout(() => {
        this.status = true;
        resolve();
      }, this.statusBarOptions.transitionTime);
    });
  }

  slideOut(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.status) {
        resolve();
      }
      this.style.update({
        animationName: statusBarLeftSlideOut,
        animationDuration: `${this.statusBarOptions.transitionTime}ms`,
        animationFillMode: 'forwards'
      });
      setTimeout(() => {
        this.status = false;
        this.style.update({
          minHeight: '30px'
        });
        resolve();
      }, this.statusBarOptions.transitionTime);
    });
  }
  setColor(color: string): void {
    if (!color) {
      return;
    }
    this.style.update({ backgroundColor: color });
  }

  popup(message?: string, delay: number | false = 0, color = this.options.primaryColor): void {
    clearTimeout(this.timer);
    this.setColor(color);
    if (message) {
      // this.setContent();
      this.element.innerHTML = message;
    }

    void this.slideIn();

    if (isNumber(delay)) {
      this.timer = setTimeout(() => {
        void this.slideOut();
      }, delay + this.statusBarOptions.transitionTime);
    }
  }

  // 注册监听器
  private registerListeners() {
    emitter.on('modelLoad', (state) => {
      switch (state) {
        case 'loading':
          this.showLoading();
          break;
        case 'fail':
          this.loadFailed();
          break;
        case 'success':
          this.loadSuccess();
          break;
      }
    });
  }
}

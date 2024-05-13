import { isFunction } from 'tianjie';

import { Style } from './style.js';
import { TIPS_CONTENT_ID, TIPS_ID } from '../constants/index.js';
import { store } from '../store/index.js';
import { tipsDisplay, tipsHide, tipsShake } from '../styles/keyframes.js';
import { IdleTimer } from '../types/common.js';
import { createElement } from '../utils/element.js';

export class Tips {
  private transitionTime = 1000; // 默认的消息过渡动画持续时长
  element: HTMLElement;
  contentElement: HTMLElement;
  idlePlayer?: IdleTimer;
  style: Style;
  priority = 0; // 优先级
  closeTimer: number | undefined = 0;
  constructor() {
    this.element = this.create();
    this.style = new Style(this.element);
    this.contentElement = this.createContent();
  }

  get options() {
    return store.get().options;
  }

  get tipsOptions() {
    const tips = store.get().tips;

    if (isFunction(tips)) {
      return tips(store.get().currentModel, store.get().modelIndex);
    } else {
      return tips;
    }
  }

  private create() {
    const el = createElement({
      id: TIPS_ID,
      tagName: 'div',
      style: {
        position: 'absolute',
        fontSize: '18px',
        borderRadius: '10px',
        filter: 'drop-shadow(0 0 5px #999)',
        border: '2px solid #fff',
        color: '#fff',
        padding: '5px 5px',
        opacity: 0,
        visibility: 'hidden',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        justifyContent: 'center',
        animationDuration: `1000ms,1000ms`,
        animationFillMode: 'forwards, none',
        animationIterationCount: '1, infinite',
        width: '60%',
        left: '50%',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        minHeight: '100px'
      }
    });

    return el;
  }

  private createContent() {
    const contentEl = createElement({
      id: TIPS_CONTENT_ID,
      tagName: 'div',
      style: {
        wordBreak: 'break-all',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: this.tipsOptions.messageLine,
        overflow: 'hidden'
      }
    });

    this.element.appendChild(contentEl);

    return contentEl;
  }

  showMessage(message: string, duration = 3000, priority = 0): void {
    if (priority < this.priority) {
      return;
    }
    this.priority = priority;
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }
    this.setContent(message);
    this.style.update({
      animationName: `${tipsDisplay},${tipsShake}`
    });

    this.closeTimer = setTimeout(() => {
      this.style.update({
        animationName: `${tipsHide},${tipsShake}`
      });
      this.priority = 0;
    }, duration) as unknown as number;
  }

  setContent(message: string): void {
    this.contentElement.textContent = message;
  }

  notification(message: string, duration = 3000, priority = 3): void {
    this.idlePlayer?.stop();
    this.showMessage(message, duration, priority);
    setTimeout(() => {
      void this.idlePlayer?.start();
    }, duration + this.transitionTime);
  }
}

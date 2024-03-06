import { getRandomElement, isFunction, mergeDeep, setIntervalAsync } from 'tianjie';

import { CONFIG } from '../config/index.js';
import type { IdleTimer } from '../types/common.js';
import type { CSSProperties, DeepRequired, TipsOptions } from '../types/index.js';
import { createElement, getWelcomeMessage, getWordTheDay, setStyleForElement, sleep } from '../utils/index.js';

export class Tips {
  private element: HTMLElement;
  // private status: Status = Status.Hidden;
  idlePlayer?: IdleTimer;

  private closeTimer = 0;
  private transitionTime = 1000; // 默认的消息过渡动画持续时长
  private style: CSSProperties = {};
  private priority = 0; // 当前优先级

  constructor(
    stageElement: HTMLElement,
    private tipsOptions: DeepRequired<TipsOptions>
  ) {
    this.element = createElement({ id: CONFIG.tipsId, tagName: 'div' });
    stageElement.append(this.element);
    this.initStyle();
    this.idlePlayer = this.createIdleMessagePlayer();
  }

  /**
   * 初始化样式
   */
  initStyle(): void {
    this.setStyle({
      position: 'absolute',
      fontSize: '18px',
      borderRadius: '10px',
      filter: 'drop-shadow(0 0 5px #999)',
      backgroundColor: '#58b0fc',
      border: '2px solid #fff',
      color: '#fff',
      padding: '3px 5px',
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateX(-50%)',
      left: '50%',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animationDuration: `${this.transitionTime}ms,${this.transitionTime}ms`,
      animationFillMode: 'forwards, none',
      animationIterationCount: '1, infinite',
      minWidth: '230px',
      minHeight: '100px',
      top: 0
    });
    if (this.tipsOptions) {
      const { width = 230, height = 100, offsetX = 0, offsetY = 0 } = this.tipsOptions.style || {};

      this.setStyle({
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        left: `calc(${offsetX}px + 50%)`,
        top: `${offsetY}px`
      });
    }
  }

  /**
   * 设置提示框样式
   * @param style
   */
  setStyle(style: CSSProperties): void {
    this.style = mergeDeep(this.style, style);
    setStyleForElement(this.style, this.element);
  }

  private setContent(message: string): void {
    this.element.innerHTML = message;
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
    this.setStyle({
      animationName: 'oml2d-display-tips,oml2d-shake-tips'
    });

    this.closeTimer = setTimeout(() => {
      this.setStyle({
        animationName: 'oml2d-hidden-tips,oml2d-shake-tips'
      });
      this.priority = 0;
    }, duration) as unknown as number;
  }

  /**
   * 清除提示框所有状态
   */
  clear(): void {
    this.setStyle({
      animationName: 'oml2d-hidden-tips,oml2d-shake-tips'
    });
    this.idlePlayer?.stop();
    clearTimeout(this.closeTimer);
    this.priority = 0;
  }

  /**
   * 公开暴露的通知方法, 所有地方可调用, 调用时会先暂停闲置消息的循环播放
   */
  notification(message: string, duration = 3000, priority = 3): void {
    this.idlePlayer?.stop();
    this.showMessage(message, duration, priority);
    setTimeout(() => {
      void this.idlePlayer?.start();
    }, duration + this.transitionTime);
  }

  /**
   * 欢迎提示
   */
  welcome(): void {
    if (!this.tipsOptions) {
      return;
    }
    const message = getWelcomeMessage(this.tipsOptions.welcomeTips || {});
    const { duration, priority } = this.tipsOptions.welcomeTips;

    this.notification(message, duration, priority);
  }

  /**
   * 复制时提示
   */
  copy(): void {
    if (this.tipsOptions.copyTips?.message?.length) {
      const messageText = getRandomElement(this.tipsOptions.copyTips.message);

      this.notification(messageText!, this.tipsOptions.copyTips.duration, this.tipsOptions.copyTips.priority);
    }
  }

  /**
   * 创建闲置消息播放器
   * @returns
   */
  private createIdleMessagePlayer(): undefined | IdleTimer {
    if (!this.tipsOptions) {
      return;
    }
    const { message: messages, duration, priority } = this.tipsOptions.idleTips;
    let message = '';
    const timer = setIntervalAsync(async () => {
      // 是否开启每日一言
      if (this.tipsOptions.idleTips.wordTheDay) {
        if (isFunction(this.tipsOptions.idleTips.wordTheDay)) {
          message = await getWordTheDay(this.tipsOptions.idleTips.wordTheDay);
        } else {
          message = await getWordTheDay();
        }
      } else {
        if (isFunction(messages)) {
          message = await messages();
        } else {
          message = getRandomElement(messages || []) || '';
        }
      }

      if (message) {
        this.showMessage(message, duration, priority);
        await sleep(duration);
      } else {
        timer.stop();
      }
    }, this.tipsOptions.idleTips.interval);

    return timer;
  }
}

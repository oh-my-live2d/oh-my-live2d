import { getRandomArrayItem, isFunction, mergeDeep, setIntervalAsync } from 'tianjie';

import { ELEMENT_ID, TIPS_DEFAULT_STYLE } from '../config/index.js';
import type { IdleTimer } from '../types/common.js';
import type { CSSProperties, DefaultOptions, DefaultTipsOptions } from '../types/index.js';
import { createElement, getWelcomeMessage, getWordTheDay, handleCommonStyle, setStyleForElement, sleep } from '../utils/index.js';

export class Tips {
  private element: HTMLElement;
  // private status: Status = Status.Hidden;
  options: DefaultOptions;
  idlePlayer?: IdleTimer;
  private closeTimer = 0;
  private transitionTime = 1000; // 默认的消息过渡动画持续时长
  private style: CSSProperties = TIPS_DEFAULT_STYLE;
  private priority = 0; // 当前优先级
  private contentElement: HTMLElement;
  private contentStyle: CSSProperties = {};
  constructor(
    private stageElement: HTMLElement,
    options: DefaultOptions
    // private tipsOptions: DefaultTipsOptions,
    // private primaryColor: string
  ) {
    this.options = options;
    this.element = createElement({ id: ELEMENT_ID.tips, tagName: 'div' });
    this.contentElement = createElement({ id: 'oml2dTipsContent', tagName: 'div' });
    this.element.append(this.contentElement);
    this.stageElement.append(this.element);
    this.initStyle();
    // 创建空闲消息播放器
    this.idlePlayer = this.createIdleMessagePlayer();
  }

  get tipsOptions(): DefaultTipsOptions {
    return this.options.tips;
  }
  get primaryColor(): string {
    return this.options.primaryColor;
  }
  get userStyle(): CSSProperties {
    return handleCommonStyle(this.tipsOptions.style || {});
  }
  get userMobileStyle(): CSSProperties {
    return handleCommonStyle(this.tipsOptions.mobileStyle || {});
  }

  /**
   * 初始化样式
   */
  initStyle(): void {
    this.setStyle({ backgroundColor: this.primaryColor });
    this.setContentStyle({
      wordBreak: 'break-all',
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: this.tipsOptions.messageLine,
      overflow: 'hidden'
    });
  }

  /**
   * 设置提示框样式
   * @param style
   */
  setStyle(style: CSSProperties = {}): void {
    this.style = mergeDeep(this.style, style);
    setStyleForElement(this.style, this.element);
  }

  setContentStyle(style: CSSProperties): void {
    this.contentStyle = mergeDeep(this.contentStyle, style);
    setStyleForElement(this.contentStyle, this.contentElement);
  }

  private setContent(message: string): void {
    this.contentElement.innerHTML = message;
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
    if (this.tipsOptions.copyTips.message.length) {
      const messageText = getRandomArrayItem(this.tipsOptions.copyTips.message) || '';

      this.notification(messageText, this.tipsOptions.copyTips.duration, this.tipsOptions.copyTips.priority);
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
          message = getRandomArrayItem(messages || []) || '';
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

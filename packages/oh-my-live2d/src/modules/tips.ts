import { getRandomArrayItem, isFunction, mergeDeep, setIntervalAsync } from 'tianjie';

import { ELEMENT_ID } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import type { IdleTimer } from '../types/common.js';
import type { CSSProperties, DefaultOptions, DefaultTipsOptions } from '../types/index.js';
import {
  createElement,
  getWelcomeMessage,
  getWindowSizeType,
  getWordTheDay,
  handleCommonStyle,
  setStyleForElement,
  sleep
} from '../utils/index.js';

export class Tips {
  idlePlayer?: IdleTimer;
  private element?: HTMLElement;
  private contentElement?: HTMLElement;
  private closeTimer = 0;
  private transitionTime = 1000; // 默认的消息过渡动画持续时长
  private style: CSSProperties = {};
  private priority = 0; // 当前优先级
  private contentStyle: CSSProperties = {};
  constructor(private options: DefaultOptions) {
    // 创建空闲消息播放器
    this.idlePlayer = this.createIdleMessagePlayer();
  }

  private get tipsOptions(): DefaultTipsOptions {
    return this.options.tips;
  }

  create(): void {
    this.element = createElement({ id: ELEMENT_ID.tips, tagName: 'div' });
    this.contentElement = createElement({ id: 'oml2d-tips-content', tagName: 'div' });
  }

  mount(stageElement: HTMLElement): void {
    if (this.element && this.contentElement) {
      this.element.append(this.contentElement);
      stageElement.append(this.element);
    }
  }

  unmount(): void {
    this.element?.remove();
    this.contentElement?.remove();
  }

  remount(stageElement: HTMLElement): void {
    this.clear();
    this.unmount();
    this.create();
    this.initializeStyle();
    this.mount(stageElement);
  }

  get primaryColor(): string {
    return this.options.primaryColor;
  }

  // 重载样式
  reloadStyle(): void {
    switch (getWindowSizeType()) {
      case WindowSizeType.pc:
        this.setStyle(handleCommonStyle(this.options.tips.style || {}));
        break;
      case WindowSizeType.mobile:
        this.setStyle(handleCommonStyle(this.options.tips.mobileStyle || {}));
        break;
    }
  }

  /**
   * 初始化样式
   */
  initializeStyle(): void {
    this.style = {};
    this.reloadStyle();
    this.setContentStyle({
      wordBreak: 'break-all',
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: this.options.tips.messageLine,
      overflow: 'hidden'
    });
  }

  /**
   * 设置提示框样式
   * @param style
   */
  setStyle(style: CSSProperties = {}): void {
    if (this.element) {
      this.style = mergeDeep(this.style, style);
      this.style.backgroundColor ||= this.options.primaryColor;
      setStyleForElement(this.style, this.element);
    }
  }

  setContentStyle(style: CSSProperties): void {
    if (this.contentElement) {
      this.contentStyle = mergeDeep(this.contentStyle, style);
      setStyleForElement(this.contentStyle, this.contentElement);
    }
  }

  private setContent(message: string): void {
    if (this.contentElement) {
      this.contentElement.innerHTML = message;
    }
  }

  showMessage(message: string, duration = 3000, priority = 0): void {
    if (priority < this.priority) {
      return;
    }
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
    const message = getWelcomeMessage(this.tipsOptions.welcomeTips || {});
    const { duration, priority } = this.options.tips.welcomeTips;

    this.notification(message, duration, priority);
  }

  /**
   * 复制时提示
   */
  copy(): void {
    if (this.options.tips.copyTips.message.length) {
      const messageText = getRandomArrayItem(this.options.tips.copyTips.message) || '';

      this.notification(messageText, this.options.tips.copyTips.duration, this.options.tips.copyTips.priority);
    }
  }
  /**
   * 创建闲置消息播放器
   * @returns
   */
  private createIdleMessagePlayer(): undefined | IdleTimer {
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
        if (isFunction(this.tipsOptions.idleTips.message)) {
          message = await this.tipsOptions.idleTips.message();
        } else {
          message = getRandomArrayItem(this.tipsOptions.idleTips.message || []) || '';
        }
      }

      if (message) {
        this.showMessage(message, this.tipsOptions.idleTips.duration, this.tipsOptions.idleTips.priority);
        await sleep(this.tipsOptions.idleTips.duration);
      } else {
        timer.stop();
      }
    }, this.options.tips.idleTips.interval);

    return timer;
  }
}

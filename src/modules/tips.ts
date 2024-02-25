import { config } from '@/config';
import { CSSProperties } from '@/types';
import { Tips as TipsOptions } from '@/types/tips';
import { createElement, setIntervalAsync, setStyleByElement, sleep } from '@/utils';
import { getWelcomeMessage } from '@/utils/tips';
import { getRandomElement, mergeDeep } from 'tianjie';

enum Status {
  Display = 1,
  Hidden = 0
}

export class Tips {
  element: HTMLElement;
  status: Status = Status.Hidden;
  showCount = 0; // 调用显示计数
  idlePlayer?: {
    start: () => Promise<void>;
    stop: () => void;
  };
  private transitionTime = 1000; // 默认的消息过渡动画持续时长
  private idleTipsInterval = 3000; // 默认的闲置消息循环播放间隔
  private style: CSSProperties = {};
  private priority = 0;

  constructor(stageElement: HTMLElement, private options: TipsOptions | false) {
    this.element = createElement({ id: config.tipsId, tagName: 'div' });
    stageElement.append(this.element);
    this.initStyle();
    this.idlePlayer = this.createIdleMessagePlayer();
  }

  /**
   * 初始化样式
   */
  initStyle() {
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
    if (this.options) {
      const { width = 230, height = 100, offsetX = 0, offsetY = 0 } = this.options.style || {};
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
  setStyle(style: CSSProperties) {
    this.style = mergeDeep(this.style, style);
    setStyleByElement(this.style, this.element);
  }

  private setContent(message: string) {
    this.element.innerHTML = message;
  }

  private show(): Promise<Status> {
    return new Promise((resolve) => {
      this.status = Status.Display;
      this.showCount++;
      // console.log('+++++++++++++++', this.showCount);
      this.setStyle({
        animationName: 'oml2d-display-tips,oml2d-shake-tips'
      });

      setTimeout(() => {
        resolve(this.status);
      }, this.transitionTime);
    });
  }

  private hide(): Promise<Status> {
    return new Promise((resolve) => {
      this.status = Status.Hidden;

      setTimeout(() => {
        if (this.showCount === 1) {
          // 一直减到最后一个才隐藏, 前面如果还有则一直展示
          this.setStyle({
            animationName: 'oml2d-hidden-tips,oml2d-shake-tips'
          });
        }
        this.showCount--;
        // console.log('-----------------', this.showCount);
        resolve(this.status);
      }, this.transitionTime);
    });
  }

  /**
   * 私有的弹出消息方法,提供给闲置消息播放器使用
   * @param message
   * @param duration
   */
  private async popup(message: string, duration = 3000, priority = 0) {
    if (priority < this.priority) return;
    this.priority = priority;
    this.setContent(message);
    await this.show();
    await sleep(duration);
    await this.hide();
    // if (!this.status) this.clearContent();
    this.priority = 0;
  }

  /**
   * 公开暴露的通知方法, 所有地方可调用, 调用时会先暂停闲置消息的循环播放
   */
  async notification(message: string, duration: number, priority: number) {
    console.log(message);
    this.idlePlayer?.stop();
    await this.popup(message, duration, priority);
    this.idlePlayer?.start();
  }

  /**
   * 欢迎提示
   */
  async welcome() {
    if (!this.options) return;
    const message = getWelcomeMessage(this.options.welcomeTips || {});
    const { persistTime = 3000, priority = 2 } = this.options.welcomeTips || {};
    await this.notification(message, persistTime, priority);
  }

  /**
   * 创建闲置消息播放器
   * @returns
   */
  private createIdleMessagePlayer() {
    if (!this.options) return;
    const { message: messages, persistTime, priority } = this.options.idleTips || {};
    let message = '';
    const timer = setIntervalAsync(async () => {
      message = getRandomElement(messages || []) || '';
      if (message) await this.popup(message, persistTime, priority);
      else {
        timer.stop();
      }
    }, this.options.idleTips?.interval || this.idleTipsInterval);

    return timer;
  }
}

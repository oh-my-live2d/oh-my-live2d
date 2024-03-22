import { OhMyLive2D } from './oml2d.js';
import { DEFAULT_OPTIONS } from '../config/index.js';
import type { EventType } from '../types/common.js';
import { DefaultOptions } from '../types/index.js';
import { Options } from '../types/options.js';
import { loadOml2dSDK, mergeOptions } from '../utils/index.js';

export class LoadOhMyLive2D {
  options: DefaultOptions = DEFAULT_OPTIONS;
  private oml2d?: OhMyLive2D;

  /**
   * 安装组件
   */
  async setup(options: Options): Promise<void> {
    this.options = mergeOptions(DEFAULT_OPTIONS, options);

    const { PIXI, PixiLive2dDisplay } = await loadOml2dSDK(this.options.importType, this.options.libraryUrls);

    this.oml2d = new OhMyLive2D(this, PIXI, PixiLive2dDisplay);

    await this.oml2d.initialize();
  }

  /**
   * 主动提示消息
   * @param message 提示信息
   * @param duration 持续时间  默认值: 3000
   * @param priority  优先级 默认值: 3
   */
  tipsMessage(message: string, duration?: number, priority?: number): void {
    this.oml2d?.tips.notification(message, duration, priority);
  }

  /**
   * 加载下一个模型
   */
  async loadNextModel(): Promise<void> {
    await this.oml2d?.loadNextModel();
  }

  /**
   * 重新加载当前模型
   */
  async reloadModel(): Promise<void> {
    await this.oml2d?.reloadModel();
  }

  /**
   * 舞台滑入
   */
  async stageSlideIn(): Promise<void> {
    await this.oml2d?.stage.slideIn();
  }

  /**
   * 舞台滑出
   */
  async stageSlideOut(): Promise<void> {
    await this.oml2d?.stage.slideOut();
  }

  clearTips(): void {
    this.oml2d?.tips.clear();
  }

  stopTipsIdle(): void {
    this.oml2d?.tips.idlePlayer?.stop();
  }

  startTipsIdle(): void {
    void this.oml2d?.tips.idlePlayer?.start();
  }

  async statusBarOpen(content?: string, color?: string): Promise<void> {
    await this.oml2d?.statusBar.open(content, color);
  }

  async statusBarClose(content?: string, color?: string, delay?: number): Promise<void> {
    await this.oml2d?.statusBar.close(content, color, delay);
  }

  statusBarPopup(content?: string, delay?: number, color?: string): void {
    this.oml2d?.statusBar.popup(content, delay, color);
  }

  setStatusBarClickEvent(fn: EventType): void {
    this.oml2d?.statusBar.setClickEvent(fn);
  }

  setStatusBarHoverEvent(events?: { onIn?: EventType; onOut?: EventType }): void {
    this.oml2d?.statusBar.setHoverEvent(events);
  }
}

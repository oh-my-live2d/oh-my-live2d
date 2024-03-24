import { Events } from './events.js';
import { OhMyLive2D } from './oml2d.js';
import { DEFAULT_OPTIONS } from '../config/index.js';
import type { EventFn, LoadEventFn } from '../types/events.js';
import { DefaultOptions } from '../types/index.js';
import { Options } from '../types/options.js';
import { loadOml2dSDK, mergeOptions } from '../utils/index.js';

export class LoadOhMyLive2D {
  options: DefaultOptions = DEFAULT_OPTIONS;
  private events: Events;
  private oml2d?: OhMyLive2D;
  constructor() {
    this.events = new Events();
  }
  /**
   * 安装组件
   */
  async setup(options: Options): Promise<void> {
    this.options = mergeOptions(DEFAULT_OPTIONS, options);

    const { PIXI, PixiLive2dDisplay } = await loadOml2dSDK(this.options.importType, this.options.libraryUrls);

    this.oml2d = new OhMyLive2D(this, this.events, PIXI, PixiLive2dDisplay);

    this.oml2d.initialize();
  }

  /**
   * 当前模型索引值
   */
  get modelIndex(): number | undefined {
    return this.oml2d?.modelIndex;
  }

  /**
   * 主动提示消息, 调用时会提前自动关闭当前空闲消息播放器, 调用结束之后会自动开启空闲消息播放器
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

  /**
   * 清除当前提示框内容并关闭空闲消息播放器
   */
  clearTips(): void {
    this.oml2d?.tips.clear();
  }

  /**
   * 停止空闲消息播放器
   */
  stopTipsIdle(): void {
    this.oml2d?.tips.idlePlayer?.stop();
  }

  /**
   * 开启空闲消息播放器
   */
  startTipsIdle(): void {
    void this.oml2d?.tips.idlePlayer?.start();
  }

  /**
   * 弹出状态条并保持打开状态
   * @param content
   * @param color
   */
  statusBarOpen(content?: string, color?: string): void {
    this.oml2d?.statusBar.open(content, color);
  }

  /**
   * 收起状态条
   * @param content
   * @param color
   * @param delay
   */
  statusBarClose(content?: string, color?: string, delay?: number): void {
    this.oml2d?.statusBar.close(content, color, delay);
  }

  /**
   * 弹出状态条, 一段时间后自动收起
   * @param content
   * @param delay
   * @param color
   */
  statusBarPopup(content?: string, delay?: number, color?: string): void {
    this.oml2d?.statusBar.popup(content, delay, color);
  }

  /**
   * 清除状态条所有绑定事件
   */
  statusBarClearEvents(): void {
    this.oml2d?.statusBar.clearClickEvent();
    this.oml2d?.statusBar.clearHoverEvent();
  }

  /**
   * 设置状态条点击事件
   * @param fn
   */
  setStatusBarClickEvent(fn: EventFn): void {
    this.oml2d?.statusBar.setClickEvent(fn);
  }

  /**
   * 设置状态条hover事件
   * @param events
   */
  setStatusBarHoverEvent(events?: { onIn?: EventFn; onOut?: EventFn }): void {
    this.oml2d?.statusBar.setHoverEvent(events);
  }

  // ------------- event

  /**
   * 模型在每次加载状态发生变化时的事件监听
   * @param fn
   */
  onLoad(fn: LoadEventFn): void {
    this.events.add('load', fn);
  }

  /**
   * 舞台滑入动画执行完毕后的事件监听
   * @param fn
   */
  onStageSlideIn(fn: EventFn): void {
    this.events.add('stageSlideIn', fn);
  }

  /**
   * 舞台滑出动画执行完毕后的事件监听
   * @param fn
   */
  onStageSlideOut(fn: EventFn): void {
    this.events.add('stageSlideOut', fn);
  }
}

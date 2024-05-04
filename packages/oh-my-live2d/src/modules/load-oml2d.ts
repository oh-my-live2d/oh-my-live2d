import { isNumber, mergeDeep } from 'tianjie';

import { Events } from './events.js';
import { OhMyLive2D } from './oml2d.js';
import { DEFAULT_OPTIONS } from '../config/index.js';
import { CommonStyleType } from '../types/common.js';
import type { EventFn, LoadEventFn } from '../types/events.js';
import { DefaultOptions } from '../types/index.js';
import { ModelOptions, Options } from '../types/options.js';
import { handleCommonStyle, loadOml2dSDK, mergeOptions } from '../utils/index.js';

export class LoadOhMyLive2D {
  options: DefaultOptions = DEFAULT_OPTIONS;
  private events: Events;
  private oml2d?: OhMyLive2D;

  constructor(options: Options) {
    this.events = new Events();
    void this.setup(options);
  }

  /**
   * 安装组件
   */
  private async setup(options: Options): Promise<void> {
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
   * 当前模型选项
   */
  get model(): ModelOptions | undefined {
    if (isNumber(this.modelIndex)) {
      return this.oml2d?.models.currentModelOptions;
    }
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
   * 加载随机模型
   */
  async loadRandomModel(): Promise<void> {
    await this.oml2d?.loadRandomModel();
  }

  /**
   * 加载下一个模型
   */
  async loadNextModel(): Promise<void> {
    await this.oml2d?.loadNextModel();
  }

  /**
   * @description 通过模型索引值加载模型
   * @param modelIndex 模型的索引值
   * @param modelClothesIndex 指定模型的衣服索引值, 该参数仅在传入的指定模型的 path 是 string[] 时生效
   */
  async loadModelByIndex(modelIndex: number, modelClothesIndex?: number): Promise<void> {
    await this.oml2d?.loadModelByIndex(modelIndex, modelClothesIndex);
  }

  /**
   * @description 通过模型名称加载模型
   * @param modelIndex 模型的名称
   * @param modelClothesIndex 指定模型的衣服索引值, 该参数仅在传入的指定模型的 path 是 string[] 时生效
   */
  async loadModelByName(modelName: string, modelClothesIndex?: number) {
    await this.oml2d?.loadModelByName(modelName, modelClothesIndex);
  }

  /**
   * 加载模型的下一个衣服, 即切换同个角色的不同模型
   */
  async loadNextModelClothes(): Promise<void> {
    await this.oml2d?.loadNextModelClothes();
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
   * 设置当前模型的舞台样式
   * @param size
   */
  setStageStyle(style: CommonStyleType): void {
    this.oml2d?.stage.setStyle(handleCommonStyle(style));
    this.oml2d?.pixiApp?.resize();

    if (this.model) {
      this.model.stageStyle = mergeDeep(this.model?.stageStyle, style);
    }
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

  /**
   * 设置当前模型位置
   * @param x
   * @param y
   */
  setModelPosition(position: { x?: number; y?: number }): void {
    const { x, y } = position;

    this.oml2d?.models.setPosition(x, y);
    if (this.model) {
      this.model.position = [x || 0, y || 0];
    }
  }

  /**
   * 设置当前模型的旋转角度
   * @param rotation
   */
  setModelRotation(rotation: number): void {
    this.oml2d?.models.setRotation(rotation);
    if (this.model) {
      this.model.rotation = rotation;
    }
  }

  /**
   * 设置当前模型的锚点位置
   * @param anchor
   */
  setModelAnchor(anchor: { x?: number; y?: number }): void {
    const { x, y } = anchor;

    this.oml2d?.models.setAnchor(x, y);

    if (this.model) {
      this.model.anchor = [x || 0, y || 0];
    }
  }
  /**
   * 设置当前模型缩放
   * @param value
   */
  setModelScale(value: number): void {
    this.oml2d?.models.setScale(value);
    if (this.model) {
      this.model.scale = value;
    }
  }

  /**
   * 显示当前模型点击区域框
   */
  showModelHitAreaFrames(): void {
    this.oml2d?.models.addHitAreaFrames();
  }

  /**
   * 隐藏当前模型点击区域框
   */
  hideModelHitAreaFrames(): void {
    this.oml2d?.models.removeHitAreaFrames();
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

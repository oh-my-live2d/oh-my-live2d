// import { EventFn } from './events.js';
import { DefaultOptions } from './index.js';

// export interface OML2D extends IOml2d, IOml2dEvents {}

export interface IOml2d {
  /**
   * 组件版本号
   */
  version: string;
  /**
   * 当前模型的索引值
   */
  modelIndex: number;

  /**
   * 配置选项, 用户传入选项与默认选项合并之后的值
   */
  options: DefaultOptions;

  /**
   * 提示信息
   * @param message
   * @param duration
   * @param priority
   * @returns
   */
  tipsMessage: (message: string, duration: number, priority: number) => void;

  /**
   * 加载下一个模型
   */
  loadNextModel: () => Promise<void>;

  /**
   * 重新加载模型
   */
  reloadModel: () => Promise<void>;

  /**
   * 舞台滑入
   */
  stageSlideIn: () => Promise<void>;

  /**
   * 舞台滑出
   */
  stageSlideOut: () => Promise<void>;

  /**
   * 设置舞台大小
   * @param size
   */
  setStageStyle: (size: { width?: number; height?: number }) => void;

  /**
   * 设置模型位置
   * @param position
   */
  setModelPosition: (position: { x?: number; y?: number }) => void;

  /**
   * 显示模型的可点击区域
   * @returns
   */
  showModelHitAreaFrames: () => void;

  /**
   * 隐藏模型的可点击区域
   */
  hideModelHitAreaFrames: () => void;

  /**
   * 设置模型缩放, 这个方法应该在模型加载成功之后再调用
   * @param scale 缩放比例
   */
  setModelScale: (scale: number) => void;

  /**
   * 清除当前正在提示的消息, 并停止空闲消息播放器
   */
  clearTips: () => void;

  /**
   * 停止空闲消息播放器
   */
  stopTipsIdle: () => void;

  /**
   * 开始空闲消息播放器
   */
  startTipsIdle: () => void;

  /**
   * 弹出状态条并保持打开状态
   * @param content
   * @param color
   */
  statusBarOpen: (content?: string, color?: string) => void;

  /**
   * 收起状态条
   */
  statusBarClose: (content?: string, color?: string, delay?: number) => void;

  /**
   * 弹出状态条, 一段时间后自动收起
   * @param content
   * @param delay
   * @param color
   */
  statusBarPopup: (content?: string, delay?: number, color?: string) => void;

  /**
   * 设置状态条点击事件
   * @param fn
   */
  setStatusBarClickEvent: (fn: () => void | Promise<void>) => void;

  /**
   *  设置状态条hover事件
   * @param events
   */
  setStatusBarHoverEvent: (events?: { onIn?: () => void | Promise<void>; onOut?: () => void | Promise<void> }) => void;

  /**
   * 清除状态条所有已绑定事件, 当您在执行完一个任务后需要手动清除状态条上已绑定的事件, 避免被误操作
   * @returns
   */
  statusBarClearEvents: () => void;

  loadNextModelClothes: () => Promise<void>;
}

export interface IOml2dEvents {
  onLoad: (fn: (status: 'loading' | 'success' | 'fail') => void | Promise<void>) => void | Promise<void>;
  onStageSlideIn: (fn: () => void | Promise<void>) => void | Promise<void>;
  onStageSlideOut: (fn: () => void | Promise<void>) => void | Promise<void>;
}

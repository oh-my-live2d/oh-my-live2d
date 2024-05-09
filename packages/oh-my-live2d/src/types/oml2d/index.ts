import type { Options } from '../index.js';

/**
 * 属性可以通过实例对象访问
 * @usage
 *
 * 以下是通过实例对象访问属性的示例:
 *
 * <<< @/usages/oml2d.ts#Properties
 *
 */
export interface Oml2dProperties {
  /**
   * 组件当前版本号
   */
  version: string;
  /**
   * 当前模型的索引值
   */
  modelIndex: number;

  /**
   * 配置选项, 用户传入选项与默认选项合并之后的值
   */
  options: Options;
}

/**
 * 方法可以通过实例对象访问
 * @usage
 *
 * 以下是通过实例对象调用方法的示例:
 *
 * <<< @/usages/oml2d.ts#Methods
 */
export interface Oml2dMethods {
  /**
   * 提示信息
   * @param message 提示信息
   * @param duration 提示持续时间, 单位: 毫秒
   * @param priority 提示优先级, 数字越大优先级越高
   * @returns
   */
  tipsMessage: (message: string, duration: number, priority: number) => void;

  /**
   * 加载下一个模型
   */
  loadNextModel: () => Promise<void>;
  /**
   * 加载当前模型的下一个衣服, 即:切换同个角色的不同模型
   * @returns
   */
  loadNextModelClothes: () => Promise<void>;

  /**
   * 加载随机模型
   * @returns
   */
  loadRandomModel: () => Promise<void>;

  /**
   *
   * @param name 模型名称
   * @param clothesIndex 模型衣服索引
   * @returns
   */
  loadModelByName: (name: string, clothesIndex?: number) => Promise<void>;

  /**
   * 加载指定索引的模型
   * @param index 模型索引
   * @returns
   */
  loadModelByIndex: (index: number, clothesIndex?: number) => Promise<void>;

  /**
   * 重新加载模型
   */
  reloadModel: () => Promise<void>;

  /**
   * 舞台滑入
   *
   */
  stageSlideIn: () => Promise<void>;

  /**
   * 舞台滑出
   */
  stageSlideOut: () => Promise<void>;

  /**
   * 设置舞台大小
   * @param size 舞台大小
   * @param size.width 宽度
   * @param size.height 高度
   */
  setStageStyle: (size: { width?: number; height?: number }) => void;

  /**
   * 设置模型位置
   * @param position 模型位置
   * @param position.x x轴
   * @param position.y y轴
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
   * @param content 状态条内容
   * @param color 状态条颜色
   */
  statusBarOpen: (content?: string, color?: string) => void;

  /**
   * 关闭状态条
   * @param content 状态条内容
   * @param delay 延迟时间, 单位: 毫秒
   * @param color 状态条颜色
   * @returns
   */
  statusBarClose: (content?: string, delay?: number, color?: string) => void;

  /**
   * 弹出状态条, 一段时间后自动收起
   * @param content 状态条内容
   * @param delay 延迟时间, 单位: 毫秒
   * @param color 状态条颜色
   */
  statusBarPopup: (content?: string, delay?: number, color?: string) => void;

  /**
   * 设置状态条点击事件
   * @param fn 点击事件回调
   */
  setStatusBarClickEvent: (fn: () => void | Promise<void>) => void;

  /**
   *  设置状态条hover事件
   * @param events 鼠标事件对象
   * @param events.onIn 鼠标进入状态条时触发的回调
   * @param events.onOut 鼠标离开状态条时触发的回调
   */
  setStatusBarHoverEvent: (events?: { onIn?: () => void | Promise<void>; onOut?: () => void | Promise<void> }) => void;

  /**
   * 清除状态条所有已绑定事件, 当您在执行完一个任务后需要手动清除状态条上已绑定的事件, 避免被误操作
   * @returns
   */
  statusBarClearEvents: () => void;

  /**
   * 设置当前模型的旋转角度
   * @param rotation 模型旋转角度
   * @returns
   */
  setModelRotation: (rotation: number) => void;

  /**
   *
   * @param anchor 模型锚点
   * @param anchor.x x轴
   * @param anchor.y y轴
   * @returns
   */
  setModelAnchor: (anchor: { x?: number; y?: number }) => void;
}

/**
 * 事件可以通过实例对象访问
 * @usage
 * 以下是通过实例对象监听事件的示例:
 *
 * <<< @/usages/oml2d.ts#Events
 *
 */
export interface Oml2dEvents {
  /**
   * 模型加载事件, 加载成功不代表舞台可见, 如果需要在舞台完全可见时触发, 请在 [onStageSlideIn](#onstageslidein) 事件中执行操作.
   * @usage
   * <<< @/usages/events.ts#onLoad
   * @param fn 加载结束的回调, 回调时会传入加载状态: 'loading' |'success' | 'fail'
   *
   *  loading: 正在加载模型
   *  success: 加载成功
   *  fail: 加载失败
   * @returns
   */
  onLoad: (fn: (status: 'loading' | 'success' | 'fail') => void | Promise<void>) => void;

  /**
   * 舞台完全滑入事件
   * @usage
   * <<< @/usages/events.ts#onStageSlideIn
   * @param fn  事件回调
   * @returns
   */
  onStageSlideIn: (fn: () => void | Promise<void>) => void;

  /**
   * 舞台完全滑出事件
   * @usage
   * <<< @/usages/events.ts#onStageSlideOut
   * @param fn 事件回调
   * @returns
   */
  onStageSlideOut: (fn: () => void | Promise<void>) => void;
}

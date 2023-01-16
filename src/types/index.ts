// import { Live2DModel } from 'pixi-live2d-display';
// import { Application } from 'pixi.js';

type ImportType = 'complete' | 'cubism2' | 'cubism4';
type EventType = 'ready' | 'load';
type LoadType = 'manual' | 'auto';
type TipsType = 'welcomeTips' | 'idleTips' | 'copyTips';

interface Models {
  /**
   * 来源地中具体的模型json配置文件路径
   */
  path?: string;
  /**
   * 模型的缩放比例
   */
  scale?: number | [x: number, y: number];
  /**
   * 模型在舞台中X轴方向的位置
   */
  x?: number;
  /**
   * 模型在舞台中Y轴方向的位置
   */
  y?: number;

  /**
   * 舞台样式
   */
  stageStyle?: {
    /**
     * 舞台的背景颜色
     */
    backgroundColor?: string;
    /**
     * 舞台的宽度
     */
    width?: number | 'auto';
    /**
     * 舞台的高度
     */
    height?: number | 'auto';
  };
}

interface Options {
  /**
   * 模型来源，固定的远程或本地路径
   */
  source?: string;
  /**
   * 是否在初始化阶段打印项目信息
   */
  sayHello?: boolean;
  /**
   * 模型入场和离开的过渡动画时长
   */
  transitionTime?: number;
  /**
   * 定义模型
   */
  models?: Models;
  /**
   * 调整提示框
   */
  tips?: Tips | false;
}

type DeepRequired<T> = T extends Function ? T : T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : T;

type DefaultOptions = DeepRequired<Options>;

interface WrapperContentEls {
  canvasEl?: HTMLCanvasElement;
  tooltipEl?: HTMLDivElement;
}

interface IdleTips extends CopyTips {
  /**
   * 闲置状态循环播放消息的间隔时间
   */
  interval?: number;
}

interface WelcomeTips {
  /**
   * 播放的消息内容
   */
  message?: {
    /**
     * 早晨5-7点提示信息内容
     */
    daybreak?: string;
    /**
     * 早上8-11点提示信息内容
     */
    morning?: string;
    /**
     * 中午12-13点提示信息内容
     */
    noon?: string;
    /**
     * 下午14-17点提示信息内容
     */
    afternoon?: string;
    /**
     * 傍晚18-19点提示信息内容
     */
    dusk?: string;
    /**
     * 晚上20-21点提示信息内容
     */
    night?: string;
    /**
     * 深夜22-23点提示信息内容
     */
    lateNight?: string;
    /**
     * 凌晨0-4点提示信息内容
     */
    weeHours?: string;
  };
  /**
   * 提示框持续时间
   */
  persistTime?: number;
  /**
   * 优先级
   */
  priority?: number;
}

interface CopyTips {
  /**
   * 播放的消息内容
   */
  message?: string | string[];
  /**
   * 提示框持续时间
   */
  persistTime?: number;
  /**
   * 优先级
   */
  priority?: number;
}

interface Tips {
  /**
   * 调整提示框样式
   */
  style?: {
    /**
     * 提示框宽度
     */
    width?: number;
    /**
     * 提示框高度
     */
    height?: number;
    /**
     * 调整提示框位于画布中的x轴方向偏移量
     */
    offsetX?: number;
    /**
     * 调整提示框位于画布中的y轴方向偏移量
     */
    offsetY?: number;
  };

  /**
   * 闲置状态下的提示
   */
  idleTips?: IdleTips;
  /**
   * 模型入场后的欢迎提示
   */
  welcomeTips?: WelcomeTips;
  /**
   * 复制事件被触发时的提示
   */
  copyTips?: CopyTips;
}

interface OhMyLive2D {
  /**
   * 模型在完全显示之后的回调
   */
  onAfterDisplay: (callback: () => void) => void;
}

interface Events {
  afterDisplay?: () => void;
}

export type {
  TipsType,
  OhMyLive2D,
  Options,
  ImportType,
  WrapperContentEls,
  EventType,
  Events,
  LoadType,
  Tips,
  IdleTips,
  WelcomeTips,
  DefaultOptions,
  DeepRequired
};

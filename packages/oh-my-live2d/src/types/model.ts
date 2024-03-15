import { CommonStyleType } from '../types/common.js';

/**
 * # 模型配置选项
 * 可配置模型地址来源以及缩放比例、舞台大小等
 *
 * @name 模型选项
 */
export interface ModelOptions {
  /**
   * 是否显示该模型的点击区域框, 该选项是为了方便您预览和调试模型的可点击区域, 当这个选项为true时,将显示该模型的所有可点击区域, 点击区域的大小与位置取决于模型本身
   */
  showHitAreaFrames?: boolean;
  /**
   * 模型的 json 文件 url 地址, 必填项
   */
  path: string;
  /**
   * 模型的缩放比例
   * @default 0.1
   */
  scale?: number;

  /**
   * 模型在舞台中的位置。x: 横坐标, y: 纵坐标
   *
   * @valueType [x: number, y:number]
   * @default [0,0]
   */
  position?: [x: number, y: number];

  /**
   * 定义舞台样式, 支持传入CSS对象, 传入的样式将通过内联样式作用于舞台元素, 舞台的默认宽高将自适应模型的宽高, 舞台内Canvas元素的宽高始终与舞台保持一致
   * @valueType object
   */
  stageStyle?: CommonStyleType;

  /**
   * 移动端时模型的缩放比例
   * @default 0.1
   */
  mobileScale?: number;

  /**
   * 移动端时模型在舞台中的位置。x: 横坐标, y: 纵坐标
   * @valueType [x: number, y:number]
   * @default [0,0]
   */
  mobilePosition?: [x: number, y: number];

  /**
   * 移动端时舞台的样式, 支持传入CSS对象, 传入的样式将通过内联样式作用于舞台元素, 舞台的默认宽高将自适应模型的宽高, 舞台内Canvas元素的宽高始终与舞台保持一致
   * @valueType object
   */
  mobileStageStyle?: CommonStyleType;

  /**
   * 动作预加载策略
   * @valueType ALL | IDLE | NONE
   * @default IDLE
   */
  motionPreloadStrategy?: 'ALL' | 'IDLE' | 'NONE';

  /**
   * 模型播放声音的音量, 声音与动作一起播放, 如果模型存在声音资源的话, 值为 0-1 之间的number类型, 0为静音
   * @default 0.5
   */
  volume?: number;
}

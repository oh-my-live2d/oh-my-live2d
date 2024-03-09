/**
 * # 模型配置选项
 *
 * 可配置模型地址来源以及缩放比例、舞台大小等
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
   *
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
   * 动作预加载策略
   * @valueType ALL | IDLE | NONE
   * @default IDLE
   */
  motionPreloadStrategy?: 'ALL' | 'IDLE' | 'NONE';
  /**
   * 定义舞台样式
   *
   * @valueType object
   */
  stageStyle?: {
    /**
     * 舞台的背景颜色,取有效的颜色值, rbg 或 rbga, 默认透明未设置默认为空的
     */
    backgroundColor?: string;
    /**
     * 舞台的宽度, 单位 px, 默认不设置, 将自适应使用模型本体的宽度
     *
     */
    width?: number;
    /**
     * 舞台的高度, 单位 px, 默认不设置, 将自适应使用模型本体的高度
     */
    height?: number;
  };
}

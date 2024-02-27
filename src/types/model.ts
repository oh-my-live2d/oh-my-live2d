/**
 * # 模型配置选项
 * 可配置模型地址来源以及缩放比例、舞台大小等
 */
export interface Model {
  /**
   * 模型的json文件url地址, 必填项
   */
  path: string;
  /**
   * 模型的缩放比例
   * @default 0.1
   */
  scale?: number;

  /**
   * 模型在舞台中的位置. x: 横坐标, y: 纵坐标
   * @valueType [x: number, y:number]
   * @default [0,0]
   */
  position?: [x: number, y: number];

  /**
   * 定义舞台样式
   */
  stageStyle?: {
    /**
     * 舞台的背景颜色
     */
    backgroundColor?: string;
    /**
     * 舞台的宽度
     */
    width?: number;
    /**
     * 舞台的高度
     */
    height?: number;
  };
}

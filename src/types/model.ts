export interface Model {
  /**
   * 模型的json文件地址
   */
  path?: string;
  /**
   * 模型的缩放比例
   */
  scale?: number;

  /**
   * 模型在舞台中的位置
   */
  position?: [x: number, y: number];

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
    width?: number;
    /**
     * 舞台的高度
     */
    height?: number;
  };
}

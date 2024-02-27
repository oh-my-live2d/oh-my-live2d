export interface Tips {
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
     * 调整提示框位于舞台中的x轴方向偏移量
     */
    offsetX?: number;
    /**
     * 调整提示框位于舞台中的y轴方向偏移量
     */
    offsetY?: number;
  };

  /**
   * 闲置状态下的提示
   */
  idleTips?: {
    /**
     * 提示框持续时间
     */
    duration?: number;
    /**
     * 优先级
     */
    priority?: number;
    /**
     * 闲置状态循环播放消息的间隔时间
     */
    interval?: number;

    /**
     * 播放的消息内容
     */
    message?: string[];
  };
  /**
   * 模型入场后的欢迎提示
   */
  welcomeTips?: {
    /**
     * 提示框持续时间
     */
    duration?: number;
    /**
     * 优先级
     */
    priority?: number;
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
  };
}

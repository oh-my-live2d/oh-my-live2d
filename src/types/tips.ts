/**
 * # 提示框选项
 *
 * 配置提示框样式和消息内容
 * @name 提示框选项
 */
export interface Tips {
  /**
   *
   * 自定义提示框样式
   * @valueType object
   */
  style?: {
    /**
     * 提示框宽度, 单位px
     * @default 230
     *
     */
    width?: number;
    /**
     * 提示框高度, 单位px
     * @default 100
     */
    height?: number;
    /**
     * 调整提示框位于舞台中的x轴方向偏移量
     * @default 0
     */
    offsetX?: number;
    /**
     * 调整提示框位于舞台中的y轴方向偏移量
     * @default 0
     */
    offsetY?: number;
  };

  /**
   * 闲置状态下的提示
   * @valueType object
   */
  idleTips?: {
    /**
     * 提示框持续时间, 单位ms
     * @default 3000
     */
    duration?: number;
    /**
     * 优先级, 高优先级消息将会覆盖低优先级的消息
     * @default 2
     */
    priority?: number;
    /**
     * 闲置状态循环播放消息的间隔时间, 单位ms
     * @default 8000
     */
    interval?: number;

    /**
     * 播放的消息内容, 需要是一个字符串数组, 播放时会从中随机取出一条进行提示, 空数组则不播放, 默认为空数组
     * @valueType string[]
     */
    message?: string[];
  };
  /**
   * 模型入场后的欢迎提示
   * @valueType object
   *
   */
  welcomeTips?: {
    /**
     * 提示框持续时间, 单位ms
     * @default 6000
     */
    duration?: number;
    /**
     * 提示优先级
     * @default 3
     */
    priority?: number;
    /**
     * 播放的消息内容, 每个时段播放对应消息内容
     * @valueType object
     */
    message?: {
      /**
       * 早晨5-7点提示信息内容
       * @default 早上好！一日之计在于晨，美好的一天就要开始了。
       */
      daybreak?: string;
      /**
       * 早上8-11点提示信息内容
       * @default 上午好！工作顺利嘛，不要久坐，多起来走动走动哦！
       */
      morning?: string;
      /**
       * 中午12-13点提示信息内容
       * @default 中午了，工作了一个上午，现在是午餐时间！
       */
      noon?: string;
      /**
       * 下午14-17点提示信息内容
       * @default 午后很容易犯困呢，来杯咖啡吧~
       */
      afternoon?: string;
      /**
       * 傍晚18-19点提示信息内容
       * @default 傍晚了！工作一天幸苦啦~
       */
      dusk?: string;
      /**
       * 晚上20-21点提示信息内容
       * @default 晚上好，今天过得怎么样呢？
       */
      night?: string;
      /**
       * 深夜22-23点提示信息内容
       * @default 已经这么晚了呀，早点休息吧，晚安~
       */
      lateNight?: string;
      /**
       * 凌晨0-4点提示信息内容
       * @default 这么晚还不睡吗？当心熬夜秃头哦！
       */
      weeHours?: string;
    };
  };
}

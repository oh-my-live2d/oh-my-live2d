import type { CommonStyleType, WordTheDayData } from '../common.js';

/**
 * 配置提示框样式和消息内容, 与菜单选项一样支持您传入选项对象或者返回选项对象的函数, 如果它是一个函数, 则会在模型每次加载成功时被调用, 调用时会传入当前模型选项以及当前模型的索引值, 这样您就可以根据这些信息来做判断, 为不同的模型提供不同的选项
 * @usage
 * #### 基础用法:
 *
 * <<< @/usages/options.ts#TipsOptionsBasic
 *
 * #### 为不同模型提供不同的提示配置:
 * 支持使用函数, 每当模型加载成功后函数就会被调用, 回调时会传入当前模型配置以及索引方便您根据这些信息来做判断, 返回类型为菜单选项
 *
 * - 判断模型索引值:
 * ::: details 点击查看代码
 * <<< @/usages/options.ts#TipsOptionsAdvanced-1
 * :::
 *
 * - 判断模型名称:
 * 您还可以根据当前模型的选项值来判断, 当您选择使用这个方法时, 推荐您为每个模型命名, 之后您就可以在函数中拿到当前模型的名称, 方便后续判断:
 * ::: details 点击查看代码
 * <<< @/usages/options.ts#TipsOptionsAdvanced-2
 * :::
 *
 */
export interface TipsOptions {
  /**
   * 提示消息限制展示的行数, 默认3行, 超出将会在消息结尾加上省略号
   * @defaultValue 3
   */
  messageLine?: number;
  /**
   *
   * 定义提示框内联样式, 支持传入CSS对象, 提示框的默认情况下, 始终与舞台保持水平居中, 默认宽度为舞台的60%, 最小高度为 100px, 内容默认垂直水平居中.
   *
   */
  style?: CommonStyleType;

  /**
   *
   * 移动端时的提示框的内联样式, 支持传入CSS对象, 提示框的默认情况下, 始终与舞台保持水平居中, 默认宽度为舞台的60%, 最小高度为 100px, 内容默认垂直水平居中.
   */
  mobileStyle?: CommonStyleType;
  /**
   * 闲置状态下的提示
   *
   */
  idleTips?: {
    /**
     * 是否开启每日一言, 默认为关闭状态, 开启后将从 <https://v1.hitokoto.cn> 发送网络请求, 并将请求到的随机信息作为闲置提示内容, 除了 boolean 类型之外, 它还支持您传入一个格式化函数, 这在您需要自定义消息格式时非常有用, 格式化函数的返回值必须是一个 string 类型, 其接收一个 wordTheDayData, 该参数包含了这次网络请求成功后的所有响应数据, 方便您处理格式化.
     *
     * 以下是一个示例:
     * ```ts
     *{
     *   tips: {
     *     idleTips: {
     *       wordTheDay(wordTheDayData) {
     *         return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`;
     *       }
     *     }
     *   }
     *}
     * ```
     *
     * ::: tip
     *
     * 开启后将接管闲置状态下 message 选项设定的值
     *
     * :::
     * @default false
     */
    wordTheDay?: boolean | ((wordTheDayData: WordTheDayData) => string);

    /**
     * 提示框持续时间, 单位 ms
     * @default 5000
     */
    duration?: number;

    /**
     * 优先级, 高优先级消息将会覆盖低优先级的消息
     *
     * @default 2
     */
    priority?: number;

    /**
     * 闲置状态循环播放消息的间隔时间, 单位 ms
     *
     * @default 10000
     */
    interval?: number;

    message?: string[] | (() => Promise<string>);
  };
  /**
   * 模型入场后的欢迎提示
   *
   */
  welcomeTips?: {
    /**
     * 提示框持续时间, 单位 ms
     *
     * @default 6000
     */
    duration?: number;

    /**
     * 提示优先级
     *
     * @default 3
     */
    priority?: number;

    /**
     * 播放的消息内容, 每个时段播放对应消息内容
     *
     */
    message?: {
      /**
       * 早晨 5-7 点提示信息内容
       *
       * @default "早上好！一日之计在于晨，美好的一天就要开始了。"
       */
      daybreak?: string;

      /**
       * 早上 8-11 点提示信息内容
       *
       * @default "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"
       */
      morning?: string;

      /**
       * 中午 12-13 点提示信息内容
       *
       * @default "中午了，工作了一个上午，现在是午餐时间！"
       */
      noon?: string;

      /**
       * 下午 14-17 点提示信息内容
       *
       * @default "午后很容易犯困呢，来杯咖啡吧~"
       */
      afternoon?: string;

      /**
       * 傍晚 18-19 点提示信息内容
       *
       * @default "傍晚了！工作一天幸苦啦~"
       */
      dusk?: string;

      /**
       * 晚上 20-21 点提示信息内容
       *
       * @default "晚上好，今天过得怎么样呢？"
       */
      night?: string;

      /**
       * 深夜 22-23 点提示信息内容
       *
       * @default ”已经这么晚了呀，早点休息吧，晚安~“
       */
      lateNight?: string;

      /**
       * 凌晨 0-4 点提示信息内容
       *
       * @default “这么晚还不睡吗？当心熬夜秃头哦！”
       */
      weeHours?: string;
    };
  };

  /**
   * 复制网站文字内容时的提示
   */
  copyTips?: {
    /**
     * 提示框持续时间, 单位 ms
     *
     * @default 3000
     */
    duration?: number;
    /**
     * 优先级, 高优先级消息将会覆盖低优先级的消息
     *
     * @default 3
     */
    priority?: number;

    /**
     * 播放的消息内容, 需要是一个字符串数组, 播放时会从中随机取出一条进行提示, 空数组则不播放
     *
     * @default ['你复制了什么内容呢?记得注明出处哦~']
     */
    message?: string[];
  };
}

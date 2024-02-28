import { Model } from '@/types/model';
import { Tips } from '@/types/tips';

/**
 * # 配置选项
 *
 * @name 配置选项
 */
export interface Options {
  /**
   * 是否在初始化阶段打印项目信息
   * @valueType boolean
   * @default true
   */
  sayHello?: boolean;

  /**
   * 组件入场和离开的过渡动画时长,单位ms
   * @valueType number
   * @default 1000
   */
  transitionTime?: number;

  /**
   * 定制模型配置, 类型是模型配置对象组成的数组, 默认值是空数组, 请至少配置一个有效的模型配置
   *
   * 前往[模型选项](/options/Model)查看详细内容
   * @valueType Model[]
   * @default []
   */
  models?: Model[];

  /**
   *
   * - 默认值:
   *   ``` ts
   *   {
   *     style: {
   *         width: 230,
   *         height: 100,
   *         offsetX: 0,
   *         offsetY: 0
   *     },
   *     idleTips: {
   *       message: [],
   *       duration: 3000,
   *       interval: 8000,
   *       priority: 2
   *     },
   *    welcomeTips: {
   *      message: {
   *        daybreak: '早上好！一日之计在于晨，美好的一天就要开始了。',
   *        morning: '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
   *        noon: '中午了，工作了一个上午，现在是午餐时间！',
   *        afternoon: '午后很容易犯困呢，来杯咖啡吧~',
   *        dusk: '傍晚了！工作一天幸苦啦~',
   *        night: '晚上好，今天过得怎么样呢？',
   *        lateNight: '已经这么晚了呀，早点休息吧，晚安~',
   *        weeHours: '这么晚还不睡吗？当心熬夜秃头哦！'
   *      },
   *      duration: 6000,
   *      priority: 3
   *     }
   *   }
   *   ```
   * 自定义提示框样式和内容, 前往[提示框选项](/options/Tips)查看详细内容
   * @valueType Tips
   */
  tips?: Tips;

  /**
   * 为组件提供一个父元素，如果未指定则默认挂载到 body 中
   * @valueType HtmlElement
   * @default document.body
   */
  parentElement?: HTMLElement;

  /**
   * 组件是否使用固定定位
   * > [!WARNING]
   * > 注意, 关闭这个属性后舞台的定位属性将从 fixed 改为 relative, 使舞台回到文档流, 另外该属性不影响状态条定位属性, 状态条与舞台之间相互独立,样式互不干扰.
   * @valueType boolean
   * @default true
   *
   */
  fixed?: boolean;
}

export * from './model';
export * from './tips';

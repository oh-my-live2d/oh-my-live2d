import { CommonStyleType, Item } from '../common.js';

/**
 * 菜单选项不仅支持传入一个对象, 还支持您传入一个返回选项对象的函数, 如果它是一个函数, 则会在模型每次加载成功时被调用, 调用时会传入当前模型选项以及当前模型的索引值, 这样您就可以根据这些信息来做判断, 为不同的模型提供不同的选项.
 * @usage
 *
 *  #### 基础用法:
 * <<< @/usages/options.ts#MenuOptionsBasic
 *
 *  #### 高级用法:
 * 支持使用函数, 每当模型加载成功后函数就会被调用, 回调时会传入当前模型配置以及索引方便您根据这些信息来做判断, 返回类型为菜单选项
 *
 * - 判断当前索引:
 * ::: details 点我查看代码
 * <<< @/usages/options.ts#MenuOptionsAdvanced-1
 * :::
 *
 * - 判断模型名称:
 * ::: details 点我查看代码
 * <<< @/usages/options.ts#MenuOptionsAdvanced-2{5,9,13}
 * :::
 */
export interface MenusOptions {
  /**
   * 是否禁用菜单, 为true时将不会创建菜单
   * @default false
   */
  disable?: boolean;
  /**
   * 配置菜单项, 您可以通过这个选项配置菜单项, 该配置选项非常的灵活, 它可以是一个由 Item 类型组成的数组, 也可以是一个函数, 当值是一个数组时, 它将覆盖默认菜单项配置. 当值是一个函数时, 您可以从函数中拿到默认菜单项
   *
   * #### Item 类型描述:
   * - id
   *   - 类型: string
   *   - 必须: 是
   *   - 描述: 唯一键
   * - title
   *   - 类型: string
   *   - 必须: 是
   *   - 描述: 菜单项标题, 鼠标悬浮时提示此标题
   * - icon
   *   - 类型: string
   *   - 必须: 是
   *   - 描述: 菜单项图标, 详见: [自定义图标](/guide/icon)
   * - onClick
   *   - 类型: ([oml2d](/api/interfaces/Oml2dProperties)) => void
   *   - 必须: 否
   *   - 描述: 定义菜单项点击事件, 函数中可以通过参数获取到[oml2d对象示例](/api/interfaces/Oml2dProperties), 方便您定制更多功能
   */
  items?: Item[] | ((defaultItems: Item[]) => Item[]);

  /**
   * 配置菜单整体样式
   */
  style?: CommonStyleType;

  /**
   * 移动端下整体样式
   */
  mobileStyle?: CommonStyleType;

  /**
   * 配置菜单每个子项按钮的样式
   */
  itemStyle?: CommonStyleType;

  /**
   * 移动端下菜单子项样式
   */
  mobileItemStyle?: CommonStyleType;
}

import { CommonStyleType } from './common.js';

/**
 * # 菜单选项
 * @name 菜单选项
 */
export interface MenusOptions {
  /**
   * 配置菜单整体样式
   * @valueType object
   */
  style?: CommonStyleType;

  /**
   * 配置菜单每个子项按钮的样式
   * @valueType object
   */
  itemStyle?: CommonStyleType;
}

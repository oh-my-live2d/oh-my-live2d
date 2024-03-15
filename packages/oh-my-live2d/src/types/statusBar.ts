import { CommonStyleType } from './common.js';

/**
 * # 状态条选项
 * @name 状态条选项
 */
export interface StatusBarOptions {
  /**
   * 异常时展示的背景色
   */
  errorColor?: string;
  /**
   * 配置状态条样式
   * @valueType object
   */
  style?: CommonStyleType;
}

import { CommonStyleType } from './common.js';

/**
 * # 状态条选项
 * @name 状态条选项
 */
export interface StatusBarOptions {
  /**
   * 禁用状态条, 为true时将不再展示状态条
   * @default false
   */
  disable?: boolean;
  /**
   * 加载异常时展示的背景色
   */
  errorColor?: string;
  /**
   * 配置状态条样式
   * @valueType object
   */
  style?: CommonStyleType;
  /**
   * 移动端下状态条样式
   */
  mobileStyle?: CommonStyleType;
}

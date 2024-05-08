import { CommonStyleType } from '../common.js';

/**
 * 自定义状态条样式以及不同状态的文本和颜色
 * @usage
 * <<< @/usages/options.ts#StatusBarOptions
 */
export interface StatusBarOptions {
  /**
   * 是否禁用状态条, 为true时将不会创建状态条
   * @default false
   */
  disable?: boolean;

  /**
   * 加载时的提示文本
   * @default '加载中'
   */
  loadingMessage?: string;
  /**
   * 模型加载成功时提示的文本信息
   * @default '加载成功'
   */
  loadSuccessMessage?: string;

  /**
   * 模型加载失败时提示的文本信息
   * @default '加载失败'
   */
  loadFailMessage?: string;

  /**
   * 加载失败hover事件时模型重新加载文本信息
   * @default '重新加载'
   */
  reloadMessage?: string;

  /**
   * 模型休息状态时提示的文本信息
   * @default '看板娘休息中'
   */
  restMessage?: string;

  /**
   * 模型切换时提示的文本信息
   * @default '正在切换'
   */
  switchingMessage?: string;
  /**
   * 模型休息时提示持续时长, 仅作用于移动端禁用时的提示 单位ms
   * @default 8000
   */
  restMessageDuration?: number;

  /**
   * 自定义模型加载时的icon, 详见: [自定义图标](/guide/icon)
   * @default icon-loading
   */
  loadingIcon?: string;

  /**
   * 状态条弹入弹出时过渡动画时长, 单位ms
   * @default 800
   */
  transitionTime?: number;
  /**
   * 加载异常时展示的背景色
   */
  errorColor?: string;

  /**
   * 配置状态条样式
   */
  style?: CommonStyleType;

  /**
   * 移动端下状态条样式
   */
  mobileStyle?: CommonStyleType;
}

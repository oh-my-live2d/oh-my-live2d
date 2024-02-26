import { Model } from '@/types/model';
import { Tips } from '@/types/tips';

export interface Options {
  /**
   * @name 是否在初始化阶段打印项目信息
   * @description 为true时会在控制台打印项目信息
   */
  sayHello?: boolean;
  /**
   * 组件入场和离开的过渡动画时长
   */
  transitionTime?: number;
  /**
   * 定义一个或一组模型
   */
  models?: Model[];
  /**
   * 定义提示框
   */
  tips?: Tips;
  /**
   * 为组件提供一个父元素，如果未指定则默认挂载到 body 中
   */
  parentElement?: HTMLElement;
  /**
   * 组件是否使用固定定位,默认为true
   */
  fixed?: boolean;
}

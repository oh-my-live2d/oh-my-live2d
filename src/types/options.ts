import { Model } from '@/types/model';
import { Tips } from '@/types/tips';

export interface Options {
  /**
   * 是否在移动端显示，默认为false
   */
  mobileShow?: boolean;
  /**
   * 模型来源，固定的远程或本地路径
   */
  source?: string;
  /**
   * 是否在初始化阶段打印项目信息
   */
  sayHello?: boolean;
  /**
   * 模型入场和离开的过渡动画时长
   */
  transitionTime?: number;
  /**
   * 定义一个或一组模型
   */
  models?: Model[];
  /**
   * 定义提示框
   */
  tips?: Tips | false;
  /**
   * 指定挂载元素，不指定则挂载到body
   */
  mountTarget?: HTMLElement;
}

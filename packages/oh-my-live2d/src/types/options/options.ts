import type { MenusOptions } from './menus.js';
import type { ModelOptions } from './model.js';
import type { StatusBarOptions } from './statusBar.js';
import type { TipsOptions } from './tips.js';
import type { CommonStyleType } from '../common.js';

/**
 *
 * @usage
 * <<< @/usages/options.ts#options
 */

export interface Options {
  /**
   * 组件停靠位置, 当您希望组件靠右展示时这个属性会非常有用. 同时影响状态条、舞台、菜单.
   *
   * 默认值: left, 当值为left时舞台和状态条居左, 菜单居右(位置值相反),
   * @default left
   */
  dockedPosition?: 'left' | 'right';
  /**
   * 移动端是否展示, 开启将会在移动端设备上以移动端样式展示各元素
   * @default false
   */
  mobileDisplay?: boolean;
  /**
   * @deprecated 不再使用按需导入的方式,默认全量导入,该选项将在下个版本被移除
   */
  importType?: string;

  /**
   * 定义主题色, 影响所有模块
   * @default '#38B0DE'
   */
  primaryColor?: string;
  /**
   * @deprecated sdk已内置,该选项已弃用,将在下个版本被移除
   */
  libraryUrls?: {
    /**
     * 自定义全量SDK地址
     */
    complete?: string;
    /**
     * 自定义 Cubism2 SDK 地址
     */
    cubism2?: string;

    /**
     * 自定义 Cubism5 SDK 地址
     */
    cubism5?: string;
  };

  /**
   * 是否在初始化阶段打印项目信息
   * @default true
   */
  sayHello?: boolean;

  /**
   * 组件入场和离开的过渡动画时长,单位 ms
   * @default 1000
   */
  transitionTime?: number;

  /**
   * 公共舞台样式, 作用于所有模型的舞台样式, 优先级低于模型选项中的舞台样式
   */
  stageStyle?: CommonStyleType;

  /**
   * 模型选项, 类型是模型配置对象组成的数组, 默认值是空数组
   *
   * 详见: [模型选项](./ModelOptions)
   * @default []
   */
  models?: ModelOptions[];

  /**
   * 自定义提示框样式和内容, 前往[提示框选项](./TipsOptions)查看详细内容
   *
   */
  tips?: TipsOptions | ((currentModel: ModelOptions, modelIndex: number) => TipsOptions);

  /**
   * 状态条选项, 详见: [状态条选项](./StatusBarOptions)
   */
  statusBar?: StatusBarOptions;

  /**
   * 菜单配置, 详见: [菜单选项](./MenusOptions)
   */
  menus?: MenusOptions | ((currentModel: ModelOptions, modelIndex: number) => MenusOptions);

  /**
   * 为组件提供一个父元素，如果未指定则默认挂载到 body 中
   * @default document.body
   */
  parentElement?: HTMLElement;

  /**
   * 用于控制组件在浏览器中以当前地址首次访问时的初始状态是否处于睡眠状态或活动状态,
   * @default 'active'
   */
  initialStatus?: 'sleep' | 'active';
}

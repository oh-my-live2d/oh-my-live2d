import type { CommonStyleType } from './common.js';
import type { MenusOptions } from './menus.js';
import type { ModelOptions } from './model.js';
import type { StatusBarOptions } from './statusBar.js';
import type { TipsOptions } from './tips.js';

import type { ImportType } from './index.js';

/**
 *
 * @name 配置选项
 */
export interface Options {
  /**
   * 组件停靠位置, 当您希望组件靠右展示时这个属性会非常有用. 同时影响状态条、舞台、菜单.
   *
   * 默认值: left, 当值为left时舞台和状态条居左, 菜单居右(位置值相反),
   * @default left
   * @valueType left | right
   */
  dockedPosition?: 'left' | 'right';
  /**
   * 移动端是否展示, 开启将会在移动端设备上以移动端样式展示各元素
   * @default false
   */
  mobileDisplay?: boolean;
  /**
   * 导入类型, 这个选项的作用是从 libraryUrls 选项决定SDK加载地址, 默认使用全量导入: complete
   * @default complete
   * @valueType complete | cubism2 | cubism5
   */
  importType?: ImportType;

  /**
   * 定义主题色, 影响所有模块
   * @default #38B0DE
   */
  primaryColor?: string;
  /**
   * 自定义 Cubism SDK 外部资源地址, oh-my-live2d 会通过 script 标签的 src 属性来加载核心SDK文件, 这个加载是完全自动的, 您无需关心这个加载过程, 默认情况下您也无需修改此选项, 但当您发现SDK加载出现异常时您可以在此选项自定义自己的地址, 同时您可以在[此处](https://github.com/oh-my-live2d/oh-my-live2d/tree/main/packages/oh-my-live2d/lib)找到以下对应的3个SDK地址, 必要时您可以备份这些脚本文件
   * @valueType object
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
   * @valueType boolean
   * @default true
   */
  sayHello?: boolean;

  /**
   * 组件入场和离开的过渡动画时长,单位 ms
   * @valueType number
   * @default 1000
   */
  transitionTime?: number;

  /**
   * 全局舞台样式
   * @valueType Object
   */
  stageStyle?: CommonStyleType;

  /**
   * 模型选项, 类型是模型配置对象组成的数组, 默认值是空数组
   *
   * 详见: [模型选项](/options/ModelOptions)
   * @valueType ModelOptions[]
   * @default []
   */
  models?: ModelOptions[];

  /**
   * 自定义提示框样式和内容, 前往[提示框选项](/options/TipsOptions)查看详细内容
   *
   * @valueType TipsOptions | ((currentModel: ModelOptions, modelIndex: number) => TipsOptions)
   */
  tips?: TipsOptions | ((currentModel: ModelOptions, modelIndex: number) => TipsOptions);

  /**
   * 状态条选项, 详见: [状态条选项](/options/StatusBarOptions)
   * @valueType StatusBarOptions
   */
  statusBar?: StatusBarOptions;

  /**
   * 菜单配置, 详见: [菜单选项](/options/MenusOptions)
   * @valueType MenusOptions | ((currentModel: ModelOptions, modelIndex: number) => MenusOptions)
   */
  menus?: MenusOptions | ((currentModel: ModelOptions, modelIndex: number) => MenusOptions);
  /**
   * 为组件提供一个父元素，如果未指定则默认挂载到 body 中
   * @valueType HtmlElement
   * @default document.body
   */
  parentElement?: HTMLElement;
}

export * from './model.js';
export * from './tips.js';
export * from './statusBar.js';
export * from './menus.js';

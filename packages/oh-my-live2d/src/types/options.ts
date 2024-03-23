import type { MenusOptions } from './menus.js';
import type { ModelOptions } from './model.js';
import type { StatusBarOptions } from './statusBar.js';
import type { TipsOptions } from './tips.js';

import type { ImportType } from './index.js';

/**
 * # 配置选项
 *
 * @name 配置选项
 */
export interface Options {
  /**
   * 移动端是否展示, 开启将会在移动端设备上以移动端样式展示各元素
   * @default false
   */
  mobileDisplay?: boolean;
  /**
   * 导入类型, 默认使用全量导入: complete
   * @default complete
   * @valueType complete | cubism2 | cubism5
   */
  importType?: ImportType;

  /**
   * 主题色
   */
  primaryColor?: string;
  /**
   * 自定义 Cubism SDK 外部资源地址, 当您发现SDK加载出现异常时您可以在此选项自定义自己的地址, 您可以在[此处](https://github.com/oh-my-live2d/oh-my-live2d/tree/main/packages/oh-my-live2d/lib)找到以下对应的3个SDK地址, 必要时您可以备份这些脚本文件
   *
   * > [!TIP]
   * >  自 v0.5.0 版本起, 将通过 script 标签的 src 属性按需去引入对应版本的 Cubism SDK , 这个过程是完全自动的, 默认情况下它将使用我们提供的默认地址进行加载, 您无需关注这个过程也无需手动的去引入这些资源, 我们尽量保证 SDK 地址的安全与稳定性. 若发现 SDK 加载出现异常, 请及时联系作者.
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
   * 模型选项, 类型是模型配置对象组成的数组, 默认值是空数组
   *
   * 详见: [模型选项](/options/ModelOptions)
   * @valueType Model[]
   * @default []
   */
  models?: ModelOptions[];

  /**
   * 自定义提示框样式和内容, 前往[提示框选项](/options/TipsOptions)查看详细内容
   *
   * @default object
   * @valueType Tips
   */
  tips?: TipsOptions | ((currentModel: ModelOptions, modelIndex: number) => TipsOptions);

  /**
   * 状态条选项, 详见: [状态条选项](/options/StatusBarOptions)
   * @valueType object
   */
  statusBar?: StatusBarOptions;

  /**
   * 菜单配置, 详见: [菜单选项](/options/MenusOptions)
   * @valueType object
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

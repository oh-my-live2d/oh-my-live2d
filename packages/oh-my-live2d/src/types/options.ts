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
   * 自定义 Cubism SDK 外部资源地址
   *
   * > [!TIP]
   * > 从 v0.5.0 版本开始, 不再通过模块方式使用 vite 打包 SDK ,  自 v0.5.0 版本起, 将通过 script 标签的 src 属性按需去引入对应版本的 Cubism SDK , 这个过程是完全自动的, 您无需关注这个过程也无需手动的去引入这些资源, 官方将长期维护这个服务器, 保证此 SDK 地址的安全与稳定性. 若发现 SDK 加载出现异常, 请及时联系作者.
   * @valueType object
   */
  libraryUrls?: {
    complete?: string;
    /**
     * 自定义 Cubism2 SDK 地址
     * @default oh-my-live2d提供的默认地址
     */
    cubism2?: string;

    /**
     * 自定义 Cubism5 SDK 地址
     * @default oh-my-live2d提供的默认地址
     */
    cubism5?: string;

    // pixi?: string;
    // pixiLive2dDisplay?: string;
    // pixiLive2dDisplayCubism2?: string;
    // pixiLive2dDisplayCubism4?: string;
    // pixiLive2dDisplayExtra?: string;
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
   * 定制模型配置, 类型是模型配置对象组成的数组, 默认值是空数组, 请至少配置一个有效的模型配置
   *
   * 前往[模型选项](/options/ModelOptions)查看详细内容
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
  tips?: TipsOptions;

  statusBar?: StatusBarOptions;

  /**
   * 菜单配置
   */
  menus?: MenusOptions;
  /**
   * 为组件提供一个父元素，如果未指定则默认挂载到 body 中
   * @valueType HtmlElement
   * @default document.body
   */
  parentElement?: HTMLElement;

  /**
   * 组件是否使用固定定位 <Badge type="danger" text="已弃用" />
   *
   * > [!WARNING]
   * > 该属性将在下个版本移除, 现在您可以通过模型选项的stageStyle属性为舞台元素设置定位属性
   * @valueType boolean
   * @default true
   * @deprecated 已弃用将在下个版本移除
   *
   */
  fixed?: boolean;
}

export * from './model.js';
export * from './tips.js';
export * from './statusBar.js';
export * from './menus.js';

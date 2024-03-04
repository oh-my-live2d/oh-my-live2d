import type { ModelOptions } from './model.js';
import type { TipsOptions } from './tips.js';

import type { ImportType } from './index.js';

/**
 * # 配置选项
 *
 * @name 配置选项
 */
export interface Options {
  /**
   * 导入类型, 默认使用全量导入: 'complete'
   * @default complete
   * @valueType complete | cubism2 | cubism5
   */
  importType?: ImportType;

  /**
   * 自定义 Cubism SDK 外部资源地址
   *
   * > [!TIP]
   * > 从 v0.5.0 版本开始, 不再以模块形式通过 vite 打包构建 SDK , 因为这会造成部分模型在生产环境中展示异常, 这在 Vite5 中已得到证实, 为了更稳定的加载模型, 自 v0.5.0 版本后, 将通过 script 标签的 src 属性按需去引入对应版本的 Cubism SDK , 而这个过程是完全自动的, 您无需手动的去引入这些资源, 官方将长期维护这个服务器, 保证此 SDK 地址的安全与稳定性. 若发现 SDK 加载出现异常, 请及时联系作者
   * @valueType object
   */
  libraryUrls?: {
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

  /**
   * 为组件提供一个父元素，如果未指定则默认挂载到 body 中
   * @valueType HtmlElement
   * @default document.body
   */
  parentElement?: HTMLElement;

  /**
   * 组件是否使用固定定位
   *
   * > [!WARNING]
   * > 注意, 关闭这个属性后舞台的定位属性将从 fixed 改为 relative, 使舞台回到文档流, 另外该属性不影响状态条定位属性, 状态条与舞台之间相互独立,样式互不干扰.
   * @valueType boolean
   * @default true
   *
   */
  fixed?: boolean;
}

export * from './model.js';
export * from './tips.js';

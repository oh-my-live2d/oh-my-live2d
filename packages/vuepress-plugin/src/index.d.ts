import type { Options } from 'oh-my-live2d';
import type { PluginObject } from 'vuepress';
declare const oml2dPlugin: (options?: Options) => () => PluginObject;
declare const omlOptions: Options;
export { oml2dPlugin };

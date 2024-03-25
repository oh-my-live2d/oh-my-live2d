import { Options } from 'oh-my-live2d';
import type { Plugin } from 'vuepress';
import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);

export const oml2dPlugin = (options: Options = {}): Plugin => ({
  name: 'vuepress-plugin-oh-my-live2d',
  define: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __OML2D_OPTIONS__: options
  },
  multiple: false,
  clientConfigFile: path.resolve(__dirname, '../client/config.js')
});

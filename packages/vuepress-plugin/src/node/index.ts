import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);

export const oml2dPlugin = (options = {}) => ({
  name: 'vuepress-plugin-oh-my-live2d',
  define: {
    __OML_OPTIONS__: options
  },
  multiple: false,
  clientConfigFile: path.resolve(__dirname, '../client/config.js')
});

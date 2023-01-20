import { defineUserConfig } from 'vuepress';
import { ohmylive2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import theme from './theme.js';

export default defineUserConfig({
  // plugins: [ohmylive2dPlugin()],
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vuepress-plugin-oh-my-live2d',
      description: 'The vuepress-plugin-oh-my-live2d documents.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'oh-my-live2d',
      description: 'vuepress-plugin-oh-my-live2d 官方文档'
    }
  },
  theme
});

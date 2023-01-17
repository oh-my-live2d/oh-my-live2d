import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'OhMyLive2D',
      description: 'The Oh My Live2D Documents'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'oh-my-live2d',
      description: 'Oh My Live2D 官方文档'
    }
  },
  theme,
  shouldPrefetch: false
});

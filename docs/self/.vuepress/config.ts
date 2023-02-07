import { defineUserConfig } from 'vuepress';
import { ohmylive2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import theme from './theme.js';

export default defineUserConfig({
  plugins: [
    ohmylive2dPlugin({
      models: [
        {
          path: '/pa15_3701/normal/normal.model3.json'
        },
        {
          path: '/pio/index.json'
        }
      ]
    })
  ],
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'oh-my-live2d',
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

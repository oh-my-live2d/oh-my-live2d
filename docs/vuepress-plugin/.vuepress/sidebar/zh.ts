import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/zh/': [],
  '/zh/guide/': [
    {
      icon: 'creative',
      text: '指南',
      prefix: '',
      children: 'structure'
    }
  ],
  '/zh/configure/': [
    {
      icon: 'config',
      text: '配置',
      prefix: '',
      children: 'structure'
    }
  ]
});

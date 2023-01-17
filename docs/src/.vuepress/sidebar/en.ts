import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
  '/': [],
  '/guide/': [
    {
      icon: 'creative',
      text: '指南',
      prefix: '',
      children: 'structure'
    }
  ],
  '/configure/': [
    {
      icon: 'config',
      text: '配置',
      prefix: '',
      children: 'structure'
    }
  ]
});

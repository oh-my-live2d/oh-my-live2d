import { defineConfig } from 'vitepress';

// 导入主题的配置
import { blogTheme } from './blog-theme.js';
import sidebarData from '../../sideBarData.json';
import pkg from '../../../lerna.json';

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config

const examples = [
  {
    text: '在vitepress中使用',
    link: '/guide/vitepress'
  },
  {
    text: '在vuepress中使用',
    link: '/guide/vuepress'
  },
  {
    text: '在hexo中使用',
    link: '/guide/hexo'
  }
];

export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: 'zh-cn',
  title: 'OhMyLive2D',
  description: '支持所有Live2D模型版本的Web组件, 快速为您的个人网站加入看板娘',
  lastUpdated: true,
  appearance: 'dark',
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 4],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    logo: {
      dark: '/logo-white.png',
      light: '/logo-black.png'
    },
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    sidebar: {
      '/options': sidebarData,
      '/guide': [
        {
          text: '简介',
          items: [
            {
              text: '快速入门',
              link: '/options/Options'
            }
          ]
        },
        {
          text: '使用示例',
          items: examples
        }
      ]
    },
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '选项', link: '/options/Options' },
      // { text: "关于作者", link: "/about" },
      {
        text: '使用示例',
        items: examples
      },
      {
        text: '更新日志',
        link: '/CHANGELOG'
      },
      {
        text: `v${pkg.version}`,
        link: ''
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/oh-my-live2d/oh-my-live2d'
      }
    ]
  }
});

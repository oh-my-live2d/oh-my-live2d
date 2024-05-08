import { defineConfig } from 'vitepress';
// 导入主题的配置
import { blogTheme } from './blog-theme.js';
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
    text: '通过VitePlugin方式使用',
    link: '/guide/vite'
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
  description: '支持所有Live2D模型版本的Web组件, 快速为您的个人网站添加看板娘.',
  lastUpdated: true,
  appearance: 'dark',
  markdown: {
    lineNumbers: true
  },
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
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
      '/api/interfaces': [
        {
          text: '配置选项',
          items: [
            { text: '公共选项', link: '/api/interfaces/Options' },
            {
              text: '模型选项',
              link: '/api/interfaces/ModelOptions'
            },
            {
              text: '菜单选项',
              link: '/api/interfaces/MenusOptions'
            },
            {
              text: '提示框选项',
              link: '/api/interfaces/TipsOptions'
            },
            {
              text: '状态栏选项',
              link: '/api/interfaces/StatusBarOptions'
            }
          ]
        },
        {
          text: '实例对象',
          items: [
            {
              text: '属性',
              link: '/api/interfaces/Oml2dProperties'
            },
            {
              text: '方法',
              link: '/api/interfaces/Oml2dMethods'
            },
            {
              text: '事件',
              link: '/api/interfaces/Oml2dEvents'
            }
          ]
        }
      ],
      // '/options': sidebarData,
      '/': [
        {
          text: '简介',
          items: [
            {
              text: '快速入门',
              link: '/guide/'
            },
            // {
            //   text: '加载模型',
            //   link: '/guide/loadModel'
            // },
            {
              text: '组件加载',
              link: '/api/functions/loadOml2d'
            },
            {
              text: '自定义图标',
              link: '/guide/icon'
            }
          ]
        },
        {
          text: '使用示例',
          items: examples
        },
        {
          text: '扩展',
          items: [{ text: '模型资源', link: '/guide/models' }]
        }
      ]
    },
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '选项', link: '/api/interfaces/Options' },
      {
        text: '使用示例',
        items: examples
      },
      {
        text: '模型资源',
        link: '/guide/models'
      },
      {
        text: '关于',
        link: '/about'
      },
      {
        text: `v${pkg.version}`,
        items: [
          {
            text: '更新日志',
            link: '/CHANGELOG'
          }
        ]
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

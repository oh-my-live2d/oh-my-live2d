// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node';

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  blog: false,
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // 如果npx pagefind 时间过长，可以手动将其安装为项目依赖 pnpm add pagefind
  // search: false,

  // 页脚
  footer: {
    version: false,
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: 'MIT License | Hacxy',
    icpRecord: {
      name: '鄂ICP备2021019656号',
      link: 'https://beian.miit.gov.cn/'
    }
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },
  comment: {
    repo: 'oh-my-live2d/oh-my-live2d',
    repoId: 'R_kgDOIsEpbQ',
    category: 'Announcements',
    categoryId: 'DIC_kwDOIsEpbc4CTWk1',
    mapping: 'title'
  },
  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: 'Hacxy',

  // 友链
  // friend: [
  //   {
  //     nickname: "粥里有勺糖",
  //     des: "你的指尖用于改变世界的力量",
  //     avatar:
  //       "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
  //     url: "https://sugarat.top",
  //   },
  //   {
  //     nickname: "Vitepress",
  //     des: "Vite & Vue Powered Static Site Generator",
  //     avatar: "https://vitepress.dev/vitepress-logo-large.webp",
  //     url: "https://vitepress.dev/",
  //   },
  // ],

  // 公告
  popover: {
    title: '公告',
    body: [
      {
        type: 'text',
        content: '欢迎大家加群&私信交流'
      },
      { type: 'text', content: '↓ 微信群 ------ QQ群 ↓' },
      {
        type: 'image',
        src: 'https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/wxq.png',
        style: 'display: inline-block;width:46%;padding-right:6px'
      },
      {
        type: 'image',
        src: 'https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/202403111755979.png',
        style: 'display: inline-block;width:46%;padding-left:6px'
      },
      {
        type: 'text',
        content: '微信群二维码失效请联系作者'
      },
      {
        type: 'text',
        content: ' 作者微信: coder7915'
      }
      // {
      //   type: 'text',
      //   content: '文章首/文尾有群二维码',
      //   style: 'padding-top:0'
      // },
      // {
      //   type: 'button',
      //   content: '作者博客',
      //   link: 'https://sugarat.top'
      // },
      // {
      //   type: 'button',
      //   content: '加群交流',
      //   props: {
      //     type: 'success'
      //   },
      //   link: 'https://theme.sugarat.top/group.html'
      // }
    ],
    duration: 60000
  }
});

export { blogTheme };

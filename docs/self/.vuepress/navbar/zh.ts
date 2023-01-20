import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  '/zh/',
  // { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: '指南',
    icon: 'creative',
    link: '/zh/guide/'
    // children: [
    //   {
    //     text: "Bar",
    //     icon: "creative",
    //     prefix: "bar/",
    //     children: ["baz", { text: "...", icon: "more", link: "" }],
    //   },
    //   {
    //     text: "Foo",
    //     icon: "config",
    //     prefix: "foo/",
    //     children: ["ray", { text: "...", icon: "more", link: "" }],
    //   },
    // ],
  },
  {
    text: '配置',
    icon: 'config',
    link: '/zh/configure/'
  }
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);

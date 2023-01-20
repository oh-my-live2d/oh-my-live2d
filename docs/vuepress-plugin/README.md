---
home: true
icon: home
title: 主页
heroImage: /logo-black.png
heroImageDark: /logo-white.png
heroText: Vuepress Plugin Oh My Live2D
tagline: 一个开箱即用的 Live2D Web 应用组件
actions:
  - text: 快速开始 💡
    link: /guide/
    type: primary

  - text: 文档
    link: /guide/

features:
  - title: 高兼容性
    icon: advance
    link: /guide/
    details: 默认集成 Cubism 2  和 Cubism 4 SDK 运行库，兼容所有 Live2D 模型版本。

  - title: 可定制化
    icon: activity
    link: /configure/
    details: 可自定义模型来源，以及多个控件的样式。

  - title: 支持 Vuepress2
    icon: creative
    link: /vuepress-plugin/
    details: 在 Vuepress2 中使用 oh-my-live2d 扩展插件

copyright: false
footer: 使用 <a href="https://github.com/oh-my-live2d/oh-my-live2d" target="_blank">oh-my-live2d</a> MIT 协议, 版权所有 © 2023-present Loclink
---

# vuepress-plugin-oh-my-live2d

vuepress-plugin-oh-my-live2d 是一个用于 vuepress 2 的 live2d 看板娘插件，基于 [oh-my-live2d](https://github.com/oh-my-live2d/oh-my-live2d) 扩展开发，并与之同步更新。

## 快速开始：

### 安装：

::: code-tabs#shell

@tab:active npm

```bash
npm install vuepress-plugin-oh-my-live2d@next
```

@tab pnpm

```bash
pnpm add vuepress-plugin-oh-my-live2d@next
```

@tab yarn

```bash
yarn add vuepress-plugin-oh-my-live2d@next
```

:::

### 使用：

```ts
// .vuepress/config.ts
import { ohmylive2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  plugins: [
    ohmylive2dPlugin({
      // 在这里进行配置
    })
  ]
  //  ...more
});
```

### 配置：

参考：[基础配置](/configure/)

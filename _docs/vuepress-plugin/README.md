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

  - title: 同步更新
    icon: creative
    link: https://oml2d.com
    details: 插件核心依赖于 oh-my-live2d 并与之同步更新。

copyright: false
footer: 使用 <a href="https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d" target="_blank">oh-my-live2d</a> MIT 协议, 版权所有 © 2023-present Loclink
---

# 快速开始：

## 安装：

::: code-tabs#shell

@tab:active npm

```bash
npm install vuepress-plugin-oh-my-live2d
```

@tab pnpm

```bash
pnpm add vuepress-plugin-oh-my-live2d
```

@tab yarn

```bash
yarn add vuepress-plugin-oh-my-live2d
```

:::

## 使用：

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

## 配置选项：

请参考：[基础配置](/configure/)

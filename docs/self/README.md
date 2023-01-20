---
home: true
title: 主页
heroImage: /logo-black.png
heroImageDark: /logo-white.png
heroText: Oh My Live2D
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

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/202301191529042.gif)

# 立即体验

## 安装：

::: code-tabs#shell

@tab:active npm

```bash
npm i oh-my-live2d@next
```

@tab pnpm

```bash
pnpm add oh-my-live2d@next
```

@tab yarn

```bash
yarn add oh-my-live2d@next
```

:::

## 基本使用

默认情况下，无论你是使用 CDN 或 ES6 Module 的方式导入包，都无需从中导入任何模块或从全局成员变量中调用任何方法，即可得到一个完整的 Live2D 组件，这个过程属于自动装载，自动装载的 Live2D 组件将使用默认选项进行创建，并在模型加载完成后挂载到`<body>`标签中，

### CDN 导入：

::: code-tabs#html

@tab:active 全量导入（支持所有模型）

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js"></script>
```

@tab 导入 Cubism2 依赖（支持 Model2）

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism2.min.js"></script>
```

@tab 导入 Cubism4 依赖（支持 Model3-4）

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism4.min.js"></script>
```

:::

#### 示例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OhMyLive2D</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js"></script>
  </body>
</html>
```

---

### ESM 导入：

::: code-tabs#ts

@tab:active 全量导入（支持所有模型）

```ts
import 'oh-my-live2d';
```

@tab 导入 Cubism2 依赖（支持 Model2）

```ts
import 'oh-my-live2d/dist/oml-cubism2';
```

@tab 导入 Cubism4 依赖（支持 Model3-4）

```ts
import 'oh-my-live2d/dist/oml-cubism4';
```

:::

#### 示例：

在 `webpack5` 或 `vite` 管理的项目中使用此导入方式，以下为 `webpack5` 管理的 `react` 项目使用示例：

```ts
// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'oh-my-live2d';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

## 更多内容：

参考：[介绍](/guide)

## 关于：

本项目不提供任何 Live2D Model 的下载地址。该 Live2D 模型来自于网络，OhMyLive2D 默认配置了一个模型地址，方便在初次使用时体验预览效果，仅供参考和学习。

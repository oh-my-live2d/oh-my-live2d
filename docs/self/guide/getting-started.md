# 快速上手

OhMyLive2D 支持 CDN 或 ESM 两种导入方式。

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

默认情况下，无论你是使用 CDN 或 ES6 Module 的方式导入包，都无需从中导入任何模块或从全局成员变量中调用任何方法，即可得到一个完整的 Live2D 组件，这个过程属于自动装载，自动装载的 Live2D 组件将使用默认选项进行创建，并在模型加载完成后挂载到`<body>`标签中，之后你可以在浏览器中看到以下效果：

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/202301171541453.gif)

::: tip
本项目不提供任何 Live2D Model 的下载地址。该 Live2D 模型来自于网络，OhMyLive2D 默认配置了一个模型地址，方便在初次使用时体验预览效果，仅供参考和学习。
:::

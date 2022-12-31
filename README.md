# oh-my-live2d

`oh-my-live2d` 是一个开箱即用的 `Live2D 看板娘` web 应用组件，它的使用方式简单到能让你不禁发出惊叹。

## 特征

- 支持所有版本的 Live2D 模型。
- 支持 **cdn** 方式引入组件，或在 **webpack** 以及 **vite** 项目中以`es6 module`的方式引入组件并使用。
- 本项目已集成 `Cubism 2 SDK` 和 `Cubism 4 SDK` 运行库，你无需额外引入相关依赖。
- 支持自定义使用本地或远程的 `Live2D Model` 来源 `（model.json）`。
- 本项目完全使用 TypeScript 开发，具有完整的类型推导。
- 支持按需引入指定版本的 `Cubism SDK` 依赖组件模块，或者全量引入。

## Cubism 是什么

`Cubism` 是 `Live2D SDK` 的名称，截至目前它一共存在三个版本：`Cubism 2`、`Cubism 3`、`Cubism 4`。

- `Cubism 2` 是只能驱动 `Live2D Model` 版本为 2 的 `SDK`，它无法驱动 `Live2D Model 3` 和 `Live2D Model 4`。

- `Cubism 4` 向后兼容了`Live2D Model 3` 并支持 `Live2D Model 4`，但它无法驱动 `Live2D Model 2`。

> **本项目已集成 `Cubism 2.1` 与 `Cubism 4.2.2` ，完整覆盖了 `Live2D Model` 的所有版本。**

## 开始

`oh-my-live2d` 的使用非常的简单，无论你是零基础开发者还是初体验尝鲜，只需要在项目入口的 `html` 文件中以`cdn`的 方式引入它即可。

在 `<body>` 中引入以下内容:

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js"></script>
```

### 通过 `CDN` 导入：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js"></script>
    <script>
      // ...业务代码
    </script>
  </body>
</html>
```

cdn 的引入并不限制引入位置是在`<body>`或是在`<head>`中，但考虑到性能问题，还是推荐你在`<body>`的最底部引入脚本，避免 `DOM` 在渲染时造成阻塞。

> 在生产环境中请避免使用远程的 cdn 地址，远程地址是不稳定的，将脚本下载至本地并在生产环境中导入是你的最佳选择，[下载地址](https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js)，打开链接后右键鼠标另存为。

### 通过 ES6 Module 导入

在 `vite` 或 `webpack` 构建的项目中使用该引入方式。

#### 安装模块（三种方式任选其一）

通过 npm 安装

```shell
npm install oh-my-live2d
```

通过 yarn 安装

```shell
yarn add oh-my-live2d
```

通过 pnpm 安装

```shell
pnpm add oh-my-live2d

```

#### 导入模块

在项目的入口文件中导入即可：

```ts
import 'oh-my-live2d';
```

这里以 webpack 5 构建的 react 项目为例，在入口文件 `src/index.tsx` 中导入 `oh-my-live2d`：

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

默认情况下，你无需从 `oh-my-live2d` 中导出任何模块即可得到一个以默认配置装载的 `Live2D` 组件，导入成功后你将在浏览器中看到效果：

![img](https://gitee.com/mihu915/map-bed/raw/master/image/%E5%8A%A8%E7%94%BB6.gif)

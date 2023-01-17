# oh-my-live2d

![GitHub package.json version](https://img.shields.io/github/package-json/v/oh-my-live2d/oh-my-live2d) ![](https://img.shields.io/npm/dm/oh-my-live2d.svg) ![](https://img.shields.io/badge/Live2D-Component-red) ![](https://img.shields.io/badge/pixi.js-v6.5.2-yellowgreen) ![](https://img.shields.io/badge/pixi--live2d--display-v0.4.0-brightgreen) ![](https://img.shields.io/badge/cubism-2%2F3%2F4-orange)

oh-my-live2d 是一个开箱即用的 **Live2D 看板娘 web 应用组件**，支持在 Vite 或 Webpack 管理的项目中使用该组件，例如：`vue`、`react` 等项目，它还支持在 `html` 文件中以 `CDN` 方式导入，在使用过程中你无需添加其他任何外部依赖包括 SDK，即可获得一个具备完整功能的 Live2D 组件。

## 特点：

- 支持所有版本的`Live2D`模型。
- 支持 **CDN** 方式引入组件，或在 **webpack** 以及 **vite** 管理的项目中以 **ES6 Module** 的方式引入组件，例如：`vue`、`react`等项目。
- 默认集成 `Cubism 2 SDK` 和 `Cubism 4 SDK` 运行库，无需额外引入其他外部依赖。
- 支持使用自定义的本地或远程的`Live2D Model`来源`（model.json）`。
- 本项目完全使用`TypeScript`开发，具有完整的类型推导。
- 提供多种导入方式，可选导入指定版本的 `Cubism SDK` 依赖组件或全量导入所有依赖组件。

## Cubism 是什么：

`Cubism`是`Live2D SDK`的名称，截至目前它一共存在三个版本：`Cubism 2`、`Cubism 3`、`Cubism 4`。

- `Cubism 2` 是只能驱动 `Live2D Model` 版本为 2 的 `SDK`，它无法驱动 `Live2D Model 3` 和 `Live2D Model 4`。

- `Cubism 4` 向后兼容了 `Live2D Model 3` 并支持 `Live2D Model 4`，但它无法驱动 `Live2D Model 2`。

> **本项目已集成 `Cubism 2.1` 与 `Cubism 4.2.2` ，完整覆盖了 `Live2D Model` 的所有版本。**

## 使用：

`oh-my-live2d` 的使用非常简单，无论你是初学者还是初体验尝鲜，你只需要在项目入口的 `html` 文件中以 `CDN` 的方式导入它即可。

在 `<body>` 标签中加入以下内容:

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js"></script>
```

### 通过 `CDN` 方式导入：

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

**如果你选择使用 CDN 方式导入模块，请避免在生产环境中使用远程地址加载脚本，远程地址是极为不稳定的，将脚本[下载至本地](https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js)并导入到项目是你的最佳选择，打开链接后右键鼠标另存为即可完成下载。**

### 通过 ES6 Module 方式导入：

在 `vite` 或 `webpack` 构建管理的项目中使用此导入方式。

#### 安装模块：

以下方式任选其一即可：

- `npm` 安装：

  ```shell
  npm install oh-my-live2d
  ```

- `yarn` 安装：

  ```shell
  yarn add oh-my-live2d
  ```

- 国内源安装可使用 `tyarn`：

  ```shell
  tyarn add oh-my-live2d
  ```

- `pnpm` 安装：

  ```shell
  pnpm add oh-my-live2d
  ```

#### 导入模块：

安装完成后你只需要在项目的入口文件中导入包即可：

```ts
import 'oh-my-live2d';
```

这里以 `webpack 5` 管理的 `react 18` 项目为例，在入口文件 `src/index.tsx` 中导入 `oh-my-live2d`：

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

默认情况下，无论你是使用 CDN 或 ES6 Module 的方式导入，都无需导出任何模块或从全局变量中调用任何方法，即可得到一个完整的 `Live2D` 组件，这个过程属于**自动装载**，自动装载的 Live2D 组件将使用默认配置加载，并在加载完成后挂载到`<body>`标签中，之后你可以在浏览器中看到以下效果：

![img1](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/oml1.gif)

## 在 vuepress2 中使用 oh-my-live2d

本项目已为 vuepress2 开发了对应的扩展插件，浏览 [vuepress-plugin-oh-my-live2d](https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d) 查看使用方法。

## 文档：

前往 [oh-my-live2d 官方文档](https://oh-my-live2d.netlify.app/)

## 鸣谢：

本项目主要依赖于 `pixi-live2d-display`, 感谢 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) 为 `Live2D` 社区做出的贡献。

## 关于：

本项目中所使用的所有 Live2D 模型仅用作参考或学习，本项目不提供任何 Live2D Model 资源的相关下载地址，如有需要请自行寻找。

### 讨论：

- Q 群：474032914

## 许可证书：

- [MIT](https://github.com/oh-my-live2d/oh-my-live2d/blob/master/license)

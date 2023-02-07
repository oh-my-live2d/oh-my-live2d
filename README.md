# oh-my-live2d

![npm](https://img.shields.io/npm/v/oh-my-live2d?label=version) ![](https://img.shields.io/npm/dt/oh-my-live2d.svg) ![](https://img.shields.io/badge/cubism-2%2F3%2F4-orange)

OhMyLive2D 是一个运行在浏览器环境的 Live2D 看板娘组件，它支持所有版本的 Live2D 模型，开箱即用且可定制化。   
如果你还在苦于寻找一个支持所有版本模型的 Live2D For Web 组件，为你的个人网站增加一个看板娘，那么请看看这个！🥳   
[查阅文档](https://oml2d.com/)了解更多详细的使用教程 🎉。

## ✨ 特点：
<img align="right" height="260" src="https://raw.githubusercontent.com/mihu915/picgo-images/master/images202302041451147.gif"/>

- 支持所有版本的`Live2D`模型。
- 支持 `CDN` 或 `ES6 Module` 导入，现在你可以在 `webpack`以及`vite`项目中使用它。
- 默认集成 `Cubism 2 SDK` 和 `Cubism 4 SDK`，无需额外引入其他外部依赖。
- 自定义的本地或远程的 `Live2D Model` 来源`（model.json）`。
- 完全使用 `TypeScript` 开发，具有完整的类型推导。
- 多种导入模式，导入指定版本的 `Cubism SDK` 依赖或全量导入所有依赖。
- 支持配置多个模型，使用控件对其切换。
- 支持在 vuepress2 中使用，前往[vuepress-plugin-oh-my-live2d](https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d)了解更多相关内容。

## 🤔 Cubism 是什么：

Cubism 是 Live2D SDK 的名称，截至目前它一共存在三个版本：Cubism 2、Cubism 3、Cubism 4。

- Cubism 2 是只能驱动 Live2D Model 版本为 2 的 SDK，它无法驱动 Live2D Model 3 和 Live2D Model 4。

- Cubism 4 向后兼容了 Live2D Model 3 并支持 Live2D Model 4，但它无法驱动 Live2D Model 2。

**本项目已集成 `Cubism 2.1` 与 `Cubism 4.2.2` ，完整覆盖了 `Live2D Model` 的所有版本。**

## 🌈 使用：

### CDN 引入

**oh-my-live2d** 的使用非常简单，无论你是初学者还是初体验尝鲜，你只需要在项目入口的 `html` 文件中以 `CDN` 的方式导入它即可。

在 `<body>` 标签中加入以下内容:

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js"></script>
```

### 使用 Node 包管理工具安装：

- 使用 `npm` 安装：

  ```shell
  npm install oh-my-live2d@latest
  ```

- 使用 `yarn` 安装：

  ```shell
  yarn add oh-my-live2d@latest
  ```

- 国内源安装可使用 `tyarn`：

  ```shell
  tyarn add oh-my-live2d@latest
  ```

- 使用 `pnpm` 安装：

  ```shell
  pnpm add oh-my-live2d@latest
  ```

### CDN 使用示例：

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
    <script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js"></script>
    <script>
      // ...业务代码
    </script>
  </body>
</html>
```

**如果你选择使用 CDN 方式导入模块，请避免在生产环境中使用远程地址加载脚本，远程地址是极为不稳定的，将脚本[下载至本地](https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js)并导入到项目是你的最佳选择。**

### ESM 使用示例：

在 `vite` 或 `webpack` 构建管理的项目中使用此导入方式。

```ts
import 'oh-my-live2d';
```

这里以 `webpack 5` 管理的 `react 18` 项目为例，在入口文件 `src/index.tsx` 中导入 `oh-my-live2d`：

<img height="400px" align="right" src="https://raw.githubusercontent.com/mihu915/picgo-images/master/images202302041507232.gif"/>

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

默认情况下，无论你是使用 `CDN` 或 `ES6 Module` 的方式导入，都无需导出任何模块或从全局变量中调用任何方法，即可得到一个完整的 `Live2D` 组件，这个过程属于**自动装载**。
自动装载的 Live2D 组件将使用默认配置加载，并在加载完成后挂载到`<body>`标签中。     
如果你想更换自己的模型或对其进行自定义，请[查阅文档](https://oml2d.com/)中自定义章节的相关内容。   


## 💕 鸣谢：

本项目主要依赖于 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display), 感谢其为 `Live2D` 社区做出的贡献。

## 🔗 关于：

本项目中所使用的所有 Live2D 模型仅用作参考或学习，本项目不提供任何 Live2D Model 资源的相关下载地址，如有需要请自行寻找。

## 📧 讨论：

- Q 群：474032914

## 📃 许可证：

- [MIT](https://github.com/oh-my-live2d/oh-my-live2d/blob/master/license)

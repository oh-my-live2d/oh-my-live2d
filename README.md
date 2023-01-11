# oh-my-live2d

![GitHub package.json version](https://img.shields.io/github/package-json/v/oh-my-live2d/oh-my-live2d) ![](https://img.shields.io/npm/dm/oh-my-live2d.svg) ![](https://img.shields.io/badge/Live2D-Component-red) ![](https://img.shields.io/badge/pixi.js-v6.5.2-yellowgreen) ![](https://img.shields.io/badge/pixi--live2d--display-v0.4.0-brightgreen) ![](https://img.shields.io/badge/cubism-2%2F3%2F4-orange)

`oh-my-live2d`是一个开箱即用的 **Live2D 看板娘 web 应用组件**，支持在 Vite 或 Webpack 管理的项目中使用该组件，例如：`vue`、`react` 等项目，它还支持在`html`文件中以`CDN`方式导入，在使用过程中你无需添加其他任何外部依赖包括 SDK，即可获得一个具备完整功能的`Live2D`组件。

## 预览：

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/11.gif)

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

`oh-my-live2d` 的使用非常简单，无论你是初学者还是初体验尝鲜，你只需要在项目入口的 `html` 文件中以`CDN`的方式导入它即可。

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

### 在 vuepress2 中使用 oh-my-live2d

本项目已为 vuepress2 开发了对应的扩展插件，浏览 [vuepress-plugin-oh-my-live2d](https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d) 查看使用方法。

## 自定义配置：

需要注意的是，通过自动装载的 Live2D 组件是无法自定义配置的，如果你希望修改某些配置属性来调整组件样式，则需要调用手动装载方法：`loadLive2DModel`。

通过 CDN 方式导入时，所有成员变量都可以在 `OML2D` 命名空间下使用，如：`OML2D.loadLive2DModel()`

该方法接收一个配置（`config`）对象作为参数，并返回一个 `oml` 对象。

CDN 示例：

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js"></script>

<script>
  const oml = OML2D.loadLive2DModel({
    modelPosition: [-10, 0]
    // ...more
  });
</script>
```

通过 ES6 Module 方式导入时，你可以直接从 `oh-my-live2d` 包中导入手动装载方法：`loadLive2DModel`。

ES6 Module 示例：

```ts
import { loadLive2DModel } from 'oh-my-live2d';

const oml = loadLive2DModel({
  modelPosition: [-10, 0]
  // ...more
});
```

有关配置属性的详细描述请查看[配置属性说明](#配置属性说明)。

## 配置属性说明：

所有手动装载 model 的配置属性都存在一个默认值且都是可选的。

### modelSource

- 类型：`string`
- 默认值：
  - 导入全量包，默认为：`https://oml-api.tj520.top/pa15_3701/normal/normal.model3.json`

Live2D 的模型来源，支持本地路径或远程 `url`，默认已提供远程模型资源。

---

### modelPosition

- 类型：`[x: number, y: number]`
- 默认值：`[0, 0]`

Live2D 模型对于舞台的相对位置，索引 0 为 `x` 轴距离，值越大越靠右；索引 1 为`y`轴距离，值越大越靠上。

---

### sayHello

- 类型：`boolean`
- 默认值：`true`

是否在装载过程的初始化阶段打印`oh-my-live2d`的基本信息，默认为打印。

---

### transitionTime

- 类型：`number`
- 默认值：`1000`

模型装载完成后出现或隐藏的过渡动画时长，单位为 ms

---

### stage

- 类型：`object`
- 默认值：
  ```ts
  {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    xs: {
      // 屏幕 < 768px
      scale: 0.05,
    },
    md: {
      // 屏幕 >= 768px 且 < 1200px
      scale: 0.08,
    },
    xl: {
      // 屏幕 >= 1200px
      scale: 0.1,
    }
  }
  ```

配置舞台相关属性。

---

### stage.backgroundColor

- 类型：`string`
- 默认值：`rgba(0, 0, 0, 0)`

舞台的背景颜色，方便开发调试时查看包装器的大小，值可以是 `rgb` 或 `rgba` 或 `16 进制`等代表颜色的字符串类型，默认为透明。

---

### stage.xs || stage.md || stage.xl

- 类型：`AdaptiveConfig`

  可分别根据屏幕大小配置舞台大小和模型缩放比例，`xs` 表示 `屏幕 < 768px`，`md` 表示 `屏幕 >= 768px 且 < 1200px`，`xl` 表示 `屏幕 >= 1200px`。

  - **scale**

    - 类型：`number | [x: number, y: number]`

    模型的缩放比例，默认值为 0.1 表示缩放比例是 10%，值可以是一个 `number` 类型或一个由`x`和`y`组成的数组类型。当为`number`类型时，表示同时作用 x 轴 和 y 轴，当值为数组类型时，可依次设置 x 轴和 y 轴缩放比例，**该值会影响模型边界的宽高**。

  - **width**

    - 类型：`number`

    舞台宽度，默认自动设置为模型边界的宽度。

  - **height**

    - 类型：`number`

    舞台高度，默认自动设置为模型边界的高度。

---

### tips

- 类型：`Tips`
- 默认值：

  ```ts
  // default config
  const defaultConfig = {
    // ...more
    tips: {
      idleTips: {
        //....more
      }
    }
  };
  ```

定义消息提示配置，可配置闲置时提示信息内容、持续时间、提示优先级、以及提示间隔。

---

### tips.idleTips

- 类型：`IdleTipsConfig | false`
- 默认值：

  ```ts
  {
    message: [
      '今天学习了吗？',
      '整理一下学习思路吧~',
      '最近在玩什么游戏呢？',
      '失去人性，失去很多；失去兽性，失去一切。  ——《三体》刘慈欣',
      '最近在看什么书呢？',
      'react18的新特性，你了解了吗？',
      'vite都出到4啦，还不赶紧去学一下？',
      'vue3正式版已经发布很久了，你会用了吗？',
      '头顶凉飕飕的？',
      '了解真相，才能获得真正的自由~'
    ],
    persistTime: 5000,
    interval: 5000,
    priority: 2
  }
  ```

配置闲置状态下的提示，为 `false` 时关闭闲置状态提示。

---

### tips.idleTips.message

- 类型：`string | string[]`

提示的内容,值可为`sring[]`类型或`string`类型，为数组类型时，将随机抽取一条显示。

---

### tips.idleTips.persistTime

- 类型：`number`
- 默认：`5000`

提示的持续时长，单位为 ms。

---

### tips.idleTips.interval

- 类型：`number`
- 默认：`5000`

循环提示的间隔时间，单位为 ms。

---

### tips.idleTips.priority

- 类型： `number`
- 默认：`2`

消息提示的优先级

## 方法：

你可以通过调用 `loadLive2DModel()` 方法并获取它的返回值：`oml`对象，该对象提供了以下`api`，可帮助你完成额外操作。

CDN 导入方式的使用：

```html
<script>
  const oml = OML2D.loadLive2DModel({
    // ... config
  });

  oml.onAfterDisplay(() => {
    console.log('模型已完全显示');
  });
</script>
```

ES6 Module 导入方式的使用：

```ts
import { loadLive2DModel } from 'oh-my-live2d';

const oml = loadLive2DModel({
  modelSource: 'https://oml-api.tj520.top/model/get?model_id=1&textures_id=2',
  modelPosition: [0, 0],
  sayHello: true,
  transitionTime: 1000,
  stage: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    xs: {
      // 屏幕 < 768px
      scale: 0.5,
      size: 140
    },
    md: {
      // 屏幕 >= 768px 且 > 1200px
      scale: 0.7,
      size: 196
    },
    xl: {
      // 屏幕 >= 1200px
      scale: 1,
      size: 280
    }
  }
  // ...more
});

oml.onAfterDisplay(() => {
  console.log('模型已完全显示');
});
```

### oml 对象属性说明：

#### onAfterDisplay:

- 类型：`(callback: () => void) => void`
- 参数：
  - `callback: () => void`

模型在完全显示之后的回调函数。即加载完出现直到显示动画结束之后。

## 按需导入：

`oh-my-live2d` 提供了多种类型的导入方式，即：全量导入、依赖 Cubism 2 包导入、依赖 Cubism 4 包导入。

### 导入全量依赖的组件 ：

如果你的项目中希望支持多个 Live2D 模型的版本，请使用全量导入。

#### CDN 方式：

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js"></script>
```

#### ES6 Model 方式：

```ts
import 'oh-my-live2d';
```

### 仅导入依赖 Cubism 2 的组件：

如果你的项目中仅使用 Live2D Model 2，请使用依赖 Cubism 2 包导入。

#### CDN 方式：

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism2.umd.js"></script>
```

#### ES6 Model 方式：

```ts
import 'oh-my-live2d/cubism2';
```

### 仅导入依赖 Cubism 4 的组件：

如果你的项目中使用了 Live2D Model 3 或 Live2D Model 4，请使用依赖 Cubism 4 包导入。

#### CDN 方式：

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism4.umd.js"></script>
```

#### ES6 Model 方式：

```ts
import 'oh-my-live2d/cubism4';
```

## 鸣谢：

本项目主要依赖于 `pixi-live2d-display`, 感谢 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) 为 `Live2D` 社区做出的贡献。

## 关于：

由于版权原因，本项目中所使用的所有 Live2D 模型仅用作参考或学习，本项目不提供任何 Live2D Model 资源的相关下载地址，如有需要，请自行寻找。

## 许可证书：

- [MIT](https://github.com/oh-my-live2d/oh-my-live2d/blob/master/license)

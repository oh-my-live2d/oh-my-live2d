# OhMyLive2D

![npm](https://img.shields.io/npm/v/oh-my-live2d?label=version) ![](https://img.shields.io/npm/dt/oh-my-live2d.svg) ![](https://img.shields.io/badge/cubism-2%2F3%2F4-orange)

OhMyLive2D 是一个运行在浏览器环境的 Live2D 看板组件，它支持从 model2 到 model4 之间的所有版本的 Live2D 模型，开箱即用且可定制化。  
如果你还在苦于寻找一个支持所有版本模型的 Live2D For Web 组件，为你的个人网站增加一个看板娘，那么请看看这个！🥳

[查阅文档](https://oml2d.com) 以了解更多详细的使用教程 🎉。

> [!TIP] > **本项目目前正处于积极维护中, 急需志同道合的伙伴加入 😄**

## ✨ 特点：

<img align="right" height="270" src="https://raw.githubusercontent.com/mihu915/picgo-images/master/images202302080219383.gif"/>

- 支持 `CDN` 或 `ES6 Module` 两种导入方式。
- 默认集成 `Cubism 2 SDK` 和 `Cubism 4 SDK`，无需额外引入其他外部依赖。
- 自定义的本地或远程的 `Live2D Model` 来源。
- 完全使用 `TypeScript` 开发，具有完整的类型推导。
- 按需引入 `Cubism SDK` 依赖或全量导入所有`Cubism SDK`版本依赖。
- 支持配置多个模型，使用控件对其切换。
- 第三方文档构建工具的支持。

## 🤔 Cubism 是什么：

Cubism 是 Live2D SDK 的名称，截至目前它一共存在三个版本：Cubism 2、Cubism 3、Cubism 4。

Cubism 2 是只能驱动 Live2D Model 版本为 2 的 SDK，它无法驱动 Live2D Model 3 和 Live2D Model 4。

Cubism 4 向后兼容了 Live2D Model 3 并支持 Live2D Model 4，但它无法驱动 Live2D Model 2。

> [!TIP]
> 本项目已集成 Cubism 2.1 与 Cubism 4.2.2 ，完整覆盖了从 model2 到 model4 的所有版本。

## 🌈 使用：

> [!WARNING]
> 本项目从 `0.4.0` 版本对所有模块都进行了一次重构, 并且不再采用自动加载组件的模式, 现在你可以通过 `loadOml2d` 方法加载组件至 `body` 中, 或者为其指定一个父元素.

### CDN 引入

通过 CDN 方式导入时，所有成员变量都可以在 `OML2D` 命名空间下被使用。

并且该方法接收一个 `options` 配置选项对象，示例如下。

有关配置选项的详细内容请查看: [配置选项](https://oml2d.com/options/Options)

在 `<body>` 标签中加入以下内容:

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
    <script>
      OML2D.loadOml2d({
        models: [
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
            scale: 0.12,
            position: [-50, 50],
            stageStyle: {
              width: 320
            }
          },
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/Fox%20Hime%20Zero/mori_miko/mori_miko.model3.json',
            position: [50, 100],
            stageStyle: {
              width: 300,
              height: 450
            }
          }
        ],
        tips: {
          style: {
            offsetY: 40
          }
        }
      });
    </script>
  </body>
</html>
```

**如果你选择使用 CDN 方式导入模块，请避免在生产环境中使用远程地址加载脚本，远程地址是极为不稳定的，将脚本[下载至本地](https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js)并导入到项目是你的最佳选择。**

### 使用包管理工具安装：

- 使用 `npm` 安装：

  ```shell
  npm install oh-my-live2d
  ```

- 使用 `yarn` 安装：

  ```shell
  yarn add oh-my-live2d
  ```

- 国内源安装可使用 `tyarn`：

  ```shell
  tyarn add oh-my-live2d
  ```

- 使用 `pnpm` 安装：

  ```shell
  pnpm add oh-my-live2d
  ```

### ESM 使用示例：

OhMyLive2D 在使用 ES6Module 方式导入时暴露了一个`loadOml2d`方法, 该方法接收一个配置选项`options`.
有关配置选项的详细内容请查看: [配置选项](https://oml2d.com/options/Options)

```ts
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  models: [
    {
      path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
      scale: 0.12,
      position: [-50, 50],
      stageStyle: {
        width: 320
      }
    },
    {
      path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/Fox%20Hime%20Zero/mori_miko/mori_miko.model3.json',
      position: [50, 100],
      stageStyle: {
        width: 300,
        height: 450
      }
    }
  ],
  tips: {
    style: {
      offsetY: 40
    }
  }
});
```

如果您想更换自己的模型或对其进行自定义，请[查阅文档](https://oml2d.com/)中自定义章节的相关内容。

## ✨ 其他支持:

- [在 vitepress 中使用](https://oml2d.com/guide/vitepress)

- [在 vuepress2 中使用](https://oml2d.com/guide/vuepress)

## 💕 鸣谢：

本项目主要依赖于 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display), 感谢其为 `Live2D` 社区做出的贡献。

## 📧 讨论：

添加好友以加入微信群：  
添加好友时请备注：oml2d

<img width=240 src="https://cdn.jsdelivr.net/gh/loclink/loclink@master/img/20231023130440.png"/>

## 📃 开源许可：

- [MIT](https://github.com/oh-my-live2d/oh-my-live2d/blob/master/license)

## 版权声明:

本项目仅提供模型加载技术支持, 不提供任何 Live2D Model 的下载地址。文档中提供的所有模型地址均来源于网路，仅供参考和学习。

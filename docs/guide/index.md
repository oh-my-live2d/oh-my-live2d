# 快速入门

`OhMyLive2D` 是一个应用于 `Web` 环境的 `Live2D` 模型看板组件。

`OhMyLive2D` 的初衷是为了解决官方 Cubism SDK 在使用时还需要额外通过 `script` 标签外部引入以及使用和学习成本较高的缺点。而现在它在被 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) 驱动的同时又提供了多种导入方式和按需导入的模式，以及更加方便自定义配置的 API。现在你完全可以在 **vite** 或者 **webpack** 中更便捷的使用它，并且无需再导入其他任何依赖或官方 SDK。

> [!TIP]  
> **本项目目前正处于积极维护状态, 欢迎志同道合的伙伴加入 😄**

## Live2D 是什么?

Live2D 是一个向插图灌注生命力并能够进行 2D 立体表现的技术, 具体效果请参考本站左下角.

更多内容请前往：[Live2D 官方网站](https://www.live2d.com/)

## Cubism 是什么?

Cubism 是 Live2D SDK 的名称，截至目前它一共存在四个版本：Cubism 2、Cubism 3、Cubism 4。Cubism 5

Cubism 2 是只能驱动 Live2D Model 版本为 2 的 SDK，它无法驱动 Live2D Model 3 和 Live2D Model 4。

Cubism 5 向后兼容了 Live2D Model 3 并支持 Live2D Model 4 ，但它无法驱动 Live2D Model 2。

> [!TIP]
> 本项目已集成 Cubism 2.1 与 Cubism 5.0.0 ，完整覆盖了从 model2 到 model4 的所有版本。

## 快速开始：

> [!WARNING]
> 本项目从 `0.4.0` 版本开始将不再采用自动加载组件的模式, 现在你可以通过 `loadOml2d` 方法加载组件至 body 中, 或者为其指定一个父元素.

### 安装

::: code-group

```bash [npm]
npm install oh-my-live2d
```

```bash [pnpm]
pnpm add oh-my-live2d
```

```bash [yarn]
yarn add oh-my-live2d
```

:::

### 更新

如需更新 `oh-my-live2d` 你只需要在安装命令后缀加上`@latest`即可更新至当前最新发行版, 当然 `vuepress` 等插件也同理

::: code-group

```bash [npm]
npm install oh-my-live2d@latest
```

```bash [pnpm]
pnpm add oh-my-live2d@latest
```

```bash [yarn]
yarn add oh-my-live2d@latest
```

:::

### CDN 方式导入

通过 CDN 方式导入时，所有成员变量都可以在 `OML2D` 命名空间下被使用。

并且该方法接收一个 `options` 配置选项对象，示例如下。

有关配置选项的详细内容请查看: [配置选项](../options/Options.md)

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
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
          }
        ]
      });
    </script>
  </body>
</html>
```

---

### ESM 导入：

OhMyLive2D 在使用 ES6Module 方式导入时暴露了一个`loadOml2d`方法, 该方法接收一个配置选项`options`.
有关配置选项的详细内容请查看: [配置选项](../options/Options.md)

```ts
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  models: [
    {
      path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
    }
  ]
});
```

以上示例的使用效果请参考本站左下角.

### 其他支持

- [在 VitePress 中使用](./vitepress.md)

- [在 VuePress2 中使用](./vuepress.md)

- [在 Hexo 中使用](./hexo.md)

## 📧 讨论

- qq 群: 474032914

- 微信群:
  添加好友以加入微信群：  
  添加好友时请备注：`oml2d`
  <img width=240 src="https://cdn.jsdelivr.net/gh/loclink/loclink@master/img/20231023130440.png"/>

### 版权声明

本项目仅提供模型加载技术支持, 不提供任何 Live2D Model 的下载地址。文档中提供的所有模型地址均来源于网路，仅供参考和学习。

# 快速入门

`OhMyLive2D` 是一个应用于 `Web` 环境的 `Live2D` 模型看板组件。

`OhMyLive2D` 的初衷是为了解决官方 Cubism SDK 在使用时还需要额外通过 `script` 标签外部引入以及使用和学习成本较高的缺点。而现在它在被 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) 驱动的同时又提供了多种导入方式和按需导入的模式，以及更加方便自定义配置的 API。现在你完全可以在 **vite** 或者 **webpack** 中更便捷的使用它，并且无需再导入其他任何依赖或官方 SDK。

本项目主要是依赖于 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display)，感谢其为 **Live2D** 社区做出的贡献。

> [!TIP]  
> **本项目目前正处于积极维护中, 急需志同道合的伙伴加入 😄**

## Live2D 是什么?

Live2D 是一个向插图灌注生命力并能够进行 2D 立体表现的技术, 具体效果请参考本站左下角.

更多内容请前往：[Live2D 官方网站](https://www.live2d.com/)

## Cubism 是什么?

Cubism 是 Live2D SDK 的名称，截至目前它一共存在三个版本：Cubism 2、Cubism 3、Cubism 4。

Cubism 2 是只能驱动 Live2D Model 版本为 2 的 SDK，它无法驱动 Live2D Model 3 和 Live2D Model 4。

Cubism 4 向后兼容了 Live2D Model 3 并支持 Live2D Model 4，但它无法驱动 Live2D Model 2。

> [!TIP]
> 本项目已集成 Cubism 2.1 与 Cubism 4.2.2 ，完整覆盖了从 model2 到 model4 的所有版本。

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

---

### CDN 方式导入：

通过 CDN 方式导入时，所有成员变量都可以在 `OML2D` 命名空间下被使用。

并且该方法接收一个 `options` 配置选项对象，示例如下。

有关配置选项的详细内容请查看: [配置选项](/options/Options)

::: code-group

```html [全量导入]
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

```html [仅cubism2]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OhMyLive2D</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/oml2d-cubism2.min.js"></script>
    <script>
      OML2D.loadOml2d({
        models: [
          {
            path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
            scale: 0.3
          }
        ]
      });
    </script>
  </body>
</html>
```

```html [仅cubism4]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OhMyLive2D</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/oml2d-cubism4.min.js"></script>
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

:::

---

### ESM 导入：

OhMyLive2D 在使用 ES6Module 方式导入时暴露了一个`loadOml2d`方法, 该方法接收一个配置选项`options`.
有关配置选项的详细内容请查看: [配置选项](/options/Options)

> [!WARNING]
> 使用 ESM 方式时, 如果你的项目是使用 **Vite5** 构建, 那么可能出现 **model2** 的模型在项目打包后部署至线上环境后模型加载异常的情况, 切换为 **CDN** 方式引入将解决这个问题. 目前仅发现**model2**在**vite5**环境中才会出现此异常, **model3** 则不会, 具体原因不详.

::: code-group

```ts [全量]
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

```ts [仅cubism2]
import { loadOml2d } from 'oh-my-live2d/dist/oml2d-cubism2';
loadOml2d({
  models: [
    {
      path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
      scale: 0.3
    }
  ]
});
```

```ts [仅cubism4]
import { loadOml2d } from 'oh-my-live2d/dist/oml2d-cubism4';
loadOml2d({
  models: [
    {
      path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
      scale: 0.12,
      position: [-10, 50]
    }
  ]
});
```

:::

以上示例的使用效果请参考本站左下角.

### 其他支持:

- [在 vitepress 中使用](/guide/vitepress)

- [在 vuepress2 中使用](/guide/vuepress)

### 版权声明:

本项目仅提供模型加载技术支持, 不提供任何 Live2D Model 的下载地址。文档中提供的所有模型地址均来源于网路，仅供参考和学习。

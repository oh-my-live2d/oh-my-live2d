# oh-my-live2d

`oh-my-live2d` 是一个开箱即用的 `Live2D 看板娘` web 应用组件，它的使用方式简单到能让你不禁发出惊叹。

## 特征

- 支持所有版本的 Live2D 模型。
- 支持 `cdn` 方式引入组件，或在 `webpack` 以及 `vite` 项目中以`es6 module`的方式引入组件并使用。
- 本项目已集成 `Cubism 2 SDK` 和 `Cubism 4 SDK` 运行库，你无需额外引入相关依赖。
- 支持自定义使用本地或远程的 `Live2D Model` 来源 `（model.json）`。
- 本项目完全使用 TypeScript 开发，具有完整的类型推导。
- 支持按需引入指定版本的 `Cubism SDK` 依赖组件模块，或者全量引入。

## Cubism 是什么

`Cubism` 是 `Live2D SDK` 的名称，截至目前它一共存在三个版本：`Cubism 2`、`Cubism 3`、`Cubism 4`。

- `Cubism 2` 是只能驱动 `Live2D Model` 版本为 2 的 SDK，它无法驱动 `Live2D Model 3` 或者 `Live2D Model 4`。

- `Cubism 4` 向后兼容了`Live2D Model 3` 并支持 `Live2D Model 4`，但它无法驱动 `Live2D Model 2`。

> **本项目已集成 `Cubism 2.1` 与 `Cubism 4.2.2` ，完美的支持了所有 `Live2D Model` 版本。**

## 开始

`oh-my-live2d` 的使用非常的简单，无论你是零基础开发者还是想要初体验尝鲜，你只需要在项目入口的 `html` 文件中使用`cdn`方式引入它即可。

在 `<body></body>` 中引入以下内容:

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js?"></script>
```

### `CDN` 引入示例：

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
    <script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js?"></script>
    <script>
      // ...业务代码
    </script>
  </body>
</html>
```

> `cdn` 引入方式并不要求你必须将脚本放至 `<body>` 中， 你也可以放至 `<head>` 中，这么做虽然不会影响程序的运行，但会在 `DOM` 加载过程中造成一定程度上的阻塞，所以并不推荐。

### ES6 Module 引入

在 `vite` 或者 `webpack` 构建的项目中使用此引入方式

```ts
import 'oh-my-live2d';
```

默认情况下，你无需导出任何模块即可得到一个以默认配置创建的 Live2D 组件

# 在 VitePress 项目中使用

由于 VitePress 不提供插件模式, 所以我们可以使用动态导入的形式在主题配置中来使用 `oh-my-live2d`。

::: warning
使用时注意需要判断环境变量已确保编译打包时的环境为非服务端。
:::

## 安装

- 首先在 VitePress 项目中安装 `oh-my-live2d`

```sh
npm install oh-my-live2d
```

## 使用

- 之后需要手动创建 `.vitepress/theme/index.js` 文件, 并以如下方式使用, 效果参考本站:

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
          }
        ]
      });
    }
  }
};
```

如需自定义配置, 请在[配置选项](../options/Options.md)中查阅详细配置内容.

## 案例

以下是 VitePress 的一些使用案例:

- [tianjie.loclink.cn](https://tianjie.loclink.cn)

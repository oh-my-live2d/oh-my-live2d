# 在 vitepress 项目中使用:

由于 vitepress 不提供插件模式, 所以我们可以使用动态导入的形式来使用 `oh-my-live2d`, 使用时需要判断环境变量已确保编译打包时的环境为非服务端

## 安装

- 首先在 vitepress 项目中安装`oh-my-live2d`

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
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
            scale: 0.12,
            position: [-10, 50],
            stageStyle: {
              width: 350
            }
          }
        ]
      });
    }
  }
};
```

如需自定义配置, 请在[配置选项](/options/Options)中查阅详细配置内容.

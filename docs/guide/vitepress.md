# 在 vitepress 项目中使用:

- 首先在 vitepress 项目中安装`oh-my-live2d`

```sh
npm install oh-my-live2d
```

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
              width: '350px'
            }
          }
        ]
      });
    }
  }
};
```

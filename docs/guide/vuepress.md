# 在 vuepress 中使用

值的庆幸的是 `oh-my-live2d`为 `vuepress2` 提供了特有的插件支持, 现在您可以直接在您的 vuepress2 项目中安装并使用这个插件.

## 安装插件

```sh
npm install vuepress-plugin-oh-my-live2d
```

## 使用插件

在 `.vuepress/config.js` 中使用插件, 即使您在 js 中使用此插件也同样可以享受到它带来的智能提示.

```js
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  // ... other configs
  plugins: [
    oml2dPlugin({
      // 在这里配置选项
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
    })
  ]
  //  ...other plugins
});
```

如需自定义配置, 请在[配置选项](/options/Options)中查阅详细配置内容.

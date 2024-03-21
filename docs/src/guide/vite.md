# 在 Vite 项目中通过VitePlugin 方式使用

> [!WARNING]
> 现在您可以通过VitePlugin的方式在Vite构建的项目中使用`oh-my-live2d`, 这看似是一个很`Hack`的方式, 但是需要注意, 该方式目前还是实验性的.

## 安装插件

```sh
npm install vite-plugin-oh-my-live2d
```

## 使用

在除了 `vitepress` 和 `vuepress` 之外的任意Vite项目中通过插件的形式使用.

暂时不支持 `vitepress` 和 `vuepress`, 因为它们似乎不会在构建生产环境代码时触发 `transformIndexHtml` 钩子

以下是一个在vue3项目中使用的例子:

```ts
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { oml2d } from 'vite-plugin-oh-my-live2d';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    oml2d({
      models: [
        {
          path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
          position: [-10, 20]
        },
        {
          path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
          scale: 0.4,
          position: [0, 50],
          stageStyle: {
            height: 300
          }
        }
      ],

      tips: {
        idleTips: {
          wordTheDay: (wordTheDayData) => {
            return wordTheDayData.hitokoto;
          }
        }
      }
    })
  ]
});
```

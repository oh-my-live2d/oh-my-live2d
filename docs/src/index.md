---
layout: home
hero:
  name: 'OhMyLive2D'
  text: 'Live2D For Web 组件'
  tagline: 支持所有Live2D模型版本的Web组件, 快速为您的个人网站加入看板娘
  image:
    light: /logo-black.png
    dark: /logo-white.png
    alt: logo
  actions:
    - theme: brand
      text: 快速入门
      link: /guide/
    - theme: alt
      text: Github
      link: https://github.com/oh-my-live2d/oh-my-live2d

features:
  - icon: 📦
    title: 高度集成   ️
    details: 默认同时集成 cubism2 与 cubism5, 支持从 model2 到 model4 版本的模型, 无需引入其他外部依赖
  - icon: 🛠️
    title: 可定制化
    details: 支持自定义部分控件样式, 同时可自定义多个模型来源，并在组件面板中通过菜单切换模型展示
  - icon: 💡
    title: 多种使用场景
    details: 支持Vue、React 以及CDN导入方式, 同时还支持在多种文档构建工具中使用, 例如 vitepress、vuepress
---

## 快速体验

在任意项目使用 `CDN` 导入方式立即体验 `oh-my-live2d`:

<img align="right" style="margin-left:10px;border-radius: 10px;height:397px" src="https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image%E5%BD%95%E5%B1%8F2024-02-28%2017.49.14%202.GIF"/>

```html
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
      }
    ]
  });
</script>
```

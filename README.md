<!-- markdownlint-disable -->
<p align="center">
  <img width="240" style="text-align:center;" src="https://raw.githubusercontent.com/hacxy/hacxy/main/images/121472002.png"/ >
</p>
<h1 align="center">OhMyLive2D</h1>
<h4 align="center">应用于浏览器环境的Live2D模型看板组件</h4>

![npm](https://img.shields.io/npm/v/oh-my-live2d?label=npm) ![](https://img.shields.io/npm/dt/oh-my-live2d.svg) ![](https://img.shields.io/badge/cubism-2%2F5-orange) ![GitHub package.json version](https://img.shields.io/npm/v/vuepress-plugin-oh-my-live2d?label=vuepress-plugin)

**OhMyLive2D** 是一个应用于浏览器环境的*Live2D看板组件*, 它目前支持所有版本的Live2D模型, 现在可以使用它快速的为您的个人网站定义一个仅属于您自己的Live2D看板娘, 使您的个人网站变得更具有特色.

**[查阅文档](https://oml2d.com) 以了解更多详细使用教程。**

> [!TIP]  
> **此项目目前正处于积极维护状态, 欢迎志同道合的伙伴加入😄**

## 特征

- 支持 `CDN` 或 `ES6 Module` 两种导入方式。

- 默认自动集成 `Cubism 2 SDK` 和 `Cubism 5 SDK`，您无需手动额外引入其他外部依赖。

- 可自定义多个本地或远程 `Live2D Model`, 通过右侧菜单按顺序切换模型。

- 使用 `TypeScript` 开发，具备完整的类型推导。

- 第三方文档构建工具的支持, 如 `vitepress`、`vuepress`。

## 快速体验

使用CDN导入方式在您的任意项目中立即体验`oh-my-live2d`:

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

之后您可以查阅文档了解更多相关内容:[查阅文档](https://oml2d.com/guide/index.html)

> [!TIP]
> 😃 您的 star 是我更新的动力

## 贡献者们

感谢以下所有为 `oh-my-live2d` 贡献过代码的 [开发者们](https://github.com/oh-my-live2d/oh-my-live2d/graphs/contributors)。

<a href="https://github.com/oh-my-live2d/oh-my-live2d/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=oh-my-live2d/oh-my-live2d" />
</a>

## 社区

- qq 群: **`474032914`**

- 微信群:
  需添加好友: **`coder7915`** 请备注：`oml2d`

## 开源许可

- [MIT](https://github.com/oh-my-live2d/oh-my-live2d/blob/master/license)

## 免责声明:

本仓库所有模型文件均来源于网络, 仅供参考和学习, 严禁用于任何商业盈利项目, 所有以盈利为目的而使用本仓库的模型资源的行为均与仓库创建者无关, 仓库中每个模型的所有权均属于这个模型的作者或创作团队, 若侵权请联系: hacxy.97@outlook.com 及时删除

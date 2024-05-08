<!-- markdownlint-disable -->
<p align="center">
  <img width="240" style="text-align:center;" src="https://raw.githubusercontent.com/hacxy/hacxy/main/images/121472002.png"/>
</p>
<h1 align="center">OhMyLive2D</h1>
<h4 align="center">高可自定义的Live2D For Web组件</h4>

![npm](https://img.shields.io/npm/v/oh-my-live2d?label=npm) ![](https://img.shields.io/npm/dt/oh-my-live2d.svg) ![](https://img.shields.io/badge/cubism-2%2F5-orange) ![GitHub package.json version](https://img.shields.io/npm/v/vuepress-plugin-oh-my-live2d?label=vuepress-plugin)

**OhMyLive2D** 是一个应用于浏览器环境且开箱即用的**Live2D**组件, 它支持所有版本的Live2D模型, 使用方式足够简单并且高可自定义, 可以快速为您的个人网站添加Live2D看板娘, 使您的个人网站变得更具有特色.

**通过 [查阅文档](https://oml2d.com) 以了解更多详细使用教程。**

> [!TIP]  
> **项目目前正处于积极维护状态, 欢迎志同道合的伙伴加入😄**

## 先决条件

- 支持 **WebGL** 和 **ES6** 的浏览器

## 特点

- 支持 `CDN` 或 `ES6 Module` 两种导入方式。

- 默认自动集成 `Cubism 2 SDK` 和 `Cubism 5 SDK`，您无需手动额外引入其他外部依赖。

- 可自定义多个本地或远程 `Live2D Model`, 通过菜单按顺序切换模型。

- 使用 `TypeScript` 开发，通过完整的类型推导享受它为您带来的语法补全。

- 高可自定义, 完全可自定义的模块.

- 多种[支持方案](#更多支持)。

## 快速体验

您可以通过[stackblitz](https://stackblitz.com/edit/vitejs-vite-shccpw?file=main.js)在线体验

或者在您本地的任意项目中使用CDN导入方式来体验:

<image align="right" height="325px" src="https://raw.githubusercontent.com/hacxy/hacxy/main/images/%E5%BD%95%E5%B1%8F2024-03-21%2023.18.31.gif"/>

```html
<script src="https://unpkg.com/oh-my-live2d@latest"></script>
<script>
  OML2D.loadOml2d({
    models: [
      {
        path: 'https://model.oml2d.com/HK416-1-normal/model.json',
        position: [0, 60],
        scale: 0.08,
        stageStyle: {
          height: 450
        }
      }
    ]
  });
</script>
```

之后您可以查阅文档了解更多相关内容:[查阅文档](https://oml2d.com/guide/index.html)

## 更多支持

- [在 VitePress 中使用](https://oml2d.com/guide/vitepress.html)
- [在 VuePress2 中使用](https://oml2d.com/guide/vuepress.html)
- [通过 VitePlugin 方式使用](https://oml2d.com/guide/vite.html)
- [在 Hexo 中使用](https://oml2d.com/guide/hexo.html)

## 案例

以下是一些非常优质的使用案例:

- <https://hacxy.cn>
- <https://sugarat.top>
- <https://theme.sugarat.top>
- <https://asev.gitee.io>
- <https://docs.kisssssssss.space/setting/live2d>

**征集更多案例, 欢迎您的PR😋**

## 如何贡献代码

本项目管理方式采用 `monorepo` 结构, 开始参与维护前需要您全局安装 `pnpm`, 并提前了解 Angular Git提交规范.

- 首先 fork 本仓库并将项目 clone 至本地

- cd 到项目目录之后安装依赖:

  ```sh
  pnpm install
  ```

- 运行开发环境

  ```sh
  pnpm dev
  ```

- 运行测试
  ```sh
  pnpm test
  ```
- 运行文档
  ```sh
  pnpm docs:dev
  ```

核心代码存放于: `packages/oh-my-live2d` 中, 所有模块以命名区分分别存放于 `src/modules` 文件夹下

需要注意的是所有本地文件的导入语句需要以 `.js` 结尾, 否则会产生类型推导异常

文档中所有配置选项的描述无需您手动编辑, 它将根据 `packages/oh-my-live2d/src/types` 中导出的类型模块自动生成, 注释即文档

修改完代码后您只需按照 Angular 提交规范, 提交代码至您fork之后的仓库即可, 然后向本仓库提交PR

## 贡献者们

感谢以下所有为 `oh-my-live2d` 贡献过代码的 [开发者们](https://github.com/oh-my-live2d/oh-my-live2d/graphs/contributors)。

<a href="https://github.com/oh-my-live2d/oh-my-live2d/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=oh-my-live2d/oh-my-live2d" />
</a>

## 讨论

- 微信群:

  <image style="display: inline-block;width:200px;padding-right:6px" src='https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/wxq.png'/>

- QQ群: 474032914

> [!TIP]
> 感谢您使用 `oh-my-live2d`, 创作不易, 您的 **star** 是我更新的动力.

## Project Status

![Alt](https://repobeats.axiom.co/api/embed/b603e73fc87261ea004a095fe8937e5b738d979a.svg 'Repobeats analytics image')

## 开源许可

- [MIT](https://github.com/oh-my-live2d/oh-my-live2d/blob/main/LICENSE)

## 免责声明

本仓库所有模型文件均来源于网络, 仅供参考和学习, 严禁用于任何商业盈利项目, 所有以盈利为目的而使用本仓库的模型资源的行为均与仓库创建者无关, 仓库中每个模型的所有权均属于这个模型的作者或创作团队, 若侵权请联系: hacxy.97@outlook.com 及时删除

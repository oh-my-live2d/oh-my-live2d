# 介绍

OhMyLive2D 是一个支持所有 Live2D 模型版本的 [Live2d For Web](https://www.live2d.com/download/cubism-sdk/) 应用组件。

OhMyLive2D 的初衷是为了解决官方 Cubism SDK 在使用时还需要额外通过 script 标签外部引入以及使用和学习成本较高的缺点。而现在它在被 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) 驱动的同时又提供了多种导入方式和按需导入的模式，以及更加方便自定义配置的 API。现在你完全可以在 **vite** 或者 **webpack** 中更快捷的使用它，并且无需其他导入任何 SDK。

本项目主要是依赖于 [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display)，感谢其为 **Live2D** 社区做出的贡献。

# Live2D 是什么

Live2D 是一个向插图灌注生命力并能够进行 2D 立体表现的技术。

更多内容请前往：[Live2D 官方网站](https://www.live2d.com/)

# Cubism 是什么

Cubism 是 Live2D SDK 的名称，截至目前它一共存在三个版本：Cubism 2、Cubism 3、Cubism 4。

Cubism 2 是只能驱动 Live2D Model 版本为 2 的 SDK，它无法驱动 Live2D Model 3 和 Live2D Model 4。

Cubism 4 向后兼容了 Live2D Model 3 并支持 Live2D Model 4，但它无法驱动 Live2D Model 2。

:::tip
本项目已集成 Cubism 2.1 与 Cubism 4.2.2 ，完整覆盖了 Live2D Model 的所有版本。
:::

# 扩展内容

- [vuepress-plugin-oh-my-live2d](https://vuepress.oml2d.com)：在 vuepress2 中通过插件开发，现已得到支持。

# vuepress-plugin-oh-my-live2d

![GitHub package.json version](https://img.shields.io/npm/v/vuepress-plugin-oh-my-live2d?label=version) ![](https://img.shields.io/npm/dt/vuepress-plugin-oh-my-live2d.svg) ![](https://img.shields.io/badge/vuepress2-plugin-green) ![GitHub package.json version](https://img.shields.io/npm/v/oh-my-live2d?label=oh-my-live2d) ![](https://img.shields.io/badge/cubism-2%2F3%2F4-orange)

`vuepress-plugin-oh-my-live2d` 是一个用于 `vuepress 2` 的 `live2d` 看板娘插件，基于 [oh-my-live2d](https://github.com/oh-my-live2d/oh-my-live2d) 开发，并与之同步更新。

详细的配置教程请参考[文档](https://vuepress.oml2d.com)

## 特征：

- 完全集成 `cubism2`、`cubism4` ，支持所有版本的 `live2d model`。
- 使用 `typescript` 开发时具备完整的类型推导。
- 与 [oh-my-live2d](https://github.com/oh-my-live2d/oh-my-live2d) 同步更新。

## 示例：

一些应用示例：
 - https://loclink.cn
 - https://oml2d.com
 - https://vuepress.oml2d.com

![](https://raw.githubusercontent.com/mihu915/picgo-images/master/images202302080219383.gif)

## 开始：

### 安装：

以下方式任选其一即可：

- `npm` 安装：

  ```shell
  npm install vuepress-plugin-oh-my-live2d@latest
  ```

- `yarn` 安装：

  ```shell
  yarn add vuepress-plugin-oh-my-live2d@latest
  ```

- 国内源安装可使用 `tyarn`：

  ```shell
  tyarn add vuepress-plugin-oh-my-live2d@latest
  ```

- `pnpm` 安装：

  ```shell
  pnpm add vuepress-plugin-oh-my-live2d@latest
  ```

### 使用：

在 vuepress 项目的配置文件（`docs/.vuepress/config.ts`）中导入插件方法 `ohmylive2dPlugin`，并在 `plugins` 选项中调用，之后将会以默认配置加载一个远程的模型地址，并装载至`<body>`标签中。

```ts
import { ohmylive2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  plugins: [
    ohmylive2dPlugin({
      // 在这里进行配置
    })
  ]
  //  ...more
});
```

## 自定义配置

- 请参考：[基础配置](https://vuepress.oml2d.com/configure/)

## 关于：

本项目不提供任何模型的下载地址，如有需要请自行寻找。

### 讨论：

- Q 群：474032914

## 许可证：

[MIT](https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d/blob/master/license)

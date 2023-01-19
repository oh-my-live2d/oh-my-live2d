# vuepress-plugin-oh-my-live2d

vuepress-plugin-oh-my-live2d 是一个用于 vuepress 2 的 live2d 看板娘插件，基于 [oh-my-live2d](https://github.com/oh-my-live2d/oh-my-live2d) 扩展开发，并与之同步更新。

## 快速开始：

### 安装：

::: code-tabs#shell

@tab:active npm

```bash
npm install vuepress-plugin-oh-my-live2d@next
```

@tab pnpm

```bash
pnpm add vuepress-plugin-oh-my-live2d@next
```

@tab yarn

```bash
yarn add vuepress-plugin-oh-my-live2d@next
```

:::

### 使用：

```ts
// .vuepress/config.ts
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

### 配置：

参考：[基础配置](/configure/)

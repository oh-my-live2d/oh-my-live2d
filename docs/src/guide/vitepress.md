# 在 VitePress 项目中使用

由于 VitePress 不提供插件模式, 所以我们可以使用动态导入的形式在主题配置中来使用 `oh-my-live2d`。

::: tip
😁 由于 vitepress 不支持 plugins, 给我们造成了一定程度的不便携性, 所以非常欢迎所有 vitepress 的第三方主题开发者们默认就支持 `oh-my-live2d`, 支持方式可以查阅: [自定义主题集成](#自定义主题集成)
:::

## 安装

- 首先在 VitePress 项目中安装 `oh-my-live2d`

```sh
npm install oh-my-live2d@latest
```

### 在默认主题中推荐以此方式使用

::: warning
使用时注意需要判断环境变量已确保编译打包时的环境为非服务端。
:::

- 之后需要手动创建 `.vitepress/theme/index.js` 文件, 并以如下方式使用:

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
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
          }
        ]
      });
    }
  }
};
```

如需自定义配置, 请在[配置选项](../api/interfaces/Options.md)中查阅详细配置内容.

### 第三方主题中使用

例如 [@sugarat/theme](https://theme.sugarat.top/) ，通常情况下和默认主题使用方式相同, 需要注意的是第三方主题可能拓展了 [enhanceApp](https://vitepress.dev/guide/custom-theme#theme-interface) 需要在重写时调用一下。

```ts
// .vitepress/theme/index.ts
import BlogTheme from '@sugarat/theme';

export default {
  ...BlogTheme,
  async enhanceApp(ctx) {
    BlogTheme?.enhanceApp?.(ctx);

    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
          }
        ]
      });
    }
  }
};
```

> [!TIP]
> 需要注意的是 `@sugarat/theme` 主题自 `v0.2.26` 版本起默认集成了oh-my-live2d, 如果您使用该主题, 可以直接通过主题配置项来使用`oh-my-live2d`, 而上述示例可以在任何第三方主题中使用

### 在 @sugarat/theme 主题中使用

如果您正在使用 [@sugarat/theme](https://theme.sugarat.top/) 那么您现在可以更快捷的启用`oh-my-live2d`而无需考虑是否与主题样式冲突等问题, 我们尽量做到组件与主题之间的交互和样式相互独立互不干扰, 甚至还会在未来版本为该主题定制独享功能.
::: tip
确保您的 `@sugarat/theme` 版本最低为`v0.2.26`
:::
使用方式请查阅: [@sugarat/theme看板娘集成](https://theme.sugarat.top/config/component.html#oml2d-%E7%9C%8B%E6%9D%BF%E5%A8%98%E9%9B%86%E6%88%90)

### 自定义主题集成

得益于 oh-my-live2d 的便携性, 使得它很容易在第三方主题中集成, 如果您是第三方主题的开发者, 可以通过下面的方式集成至您的主题:

1. 安装依赖

```sh
npm install oh-my-live2d@latest
```

2. 在`onMounted`钩子中动态加载 `oh-my-live2d` 并调用, 或者将其封装成一个hook

```ts
import { onMounted } from 'vue';
// 可以编写一个获取主题里配置的 oml2d 配置的方法
// import { useOml2dOptions } from 'xxx'

export function useOml2d() {
  // const oml2dOptions = useOml2dOptions()
  // 配置可以根据主题的实际情况进行获取，这里写一个默认的
  const oml2dOptions = {
    models: [
      {
        path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
      }
    ]
  };
  onMounted(async () => {
    if (oml2dOptions) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d(oml2dOptions);
    }
  });
}
```

3. 在主题的 Layout.vue 中调用该方法即可

```vue
<script setup lang="ts">
import { useOml2d } from '../hooks/useOml2d';

// oh-my-live2d 扩展
useOml2d();
</script>
```

### 使用 Layout 组件集成

默认情况下我们推荐您[使用方式一](#使用方式一), 而当您在默认主题或第三方主题使用时**出现生产环境下图标资源加载不正常或图标不显示时**, 那么请使用此方式。

**这里以 `@sugarat/theme` 主题为例, 其他第三方主题或默认主题同样适用**

1. 在 VitePress 项目中安装 `oh-my-live2d`

```sh
npm install oh-my-live2d@latest
```

2. 创建 `.vitepress/theme/index.ts` 文件 (已存在请忽略)

3. 创建 `.vitepress/theme/Layout.vue` 文件

4. 在 `.vitepress/theme/Layout.vue`文件中重新挂载主题提供的 `Layout`,并在 `onMounted` 钩子中动态导入 `oh-my-live2d`, 具体如下:

```vue
<script setup lang="ts">
import { onMounted } from 'vue';
// 这里拿到主题提供的Layout, 并在 `template` 中挂载
import BlogTheme from '@sugarat/theme';
const Layout = BlogTheme.Layout;

onMounted(async () => {
  // 在这里动态导入 `oh-my-live2d`, 并调用 `loadOml2d` 方法
  const { loadOml2d } = await import('oh-my-live2d');

  // 在这里使用
  loadOml2d({
    // ... configure
    models: [
      {
        path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
      }
    ]
  });
});
</script>

<template>
  <Layout />
</template>
```

5. 之后我们就可以在 `.vitepress/theme/index.ts` 中使用我们自己的 `Layout` 组件, 如下:

```ts
// .vitepress/theme/index.ts
import BlogTheme from '@sugarat/theme';
import Layout from './Layout.vue';

export default {
  ...BlogTheme,
  Layout
};
```

至此就可以完全享受 `oh-my-live2d` 了, 之后的配置, 您需要在 `Layout.vue` 中的 `loadOml2d` 方法中来配置 oml2d

如需自定义配置, 请在[配置选项](../api/interfaces/Options.md)中查阅详细配置内容.

::: tip
此方式在默认主题或其他第三方主题中也同样适用
:::

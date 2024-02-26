# 自定义

在成功导入 OhMyLive2D 之后，组件将通过自动装载模式以默认配置加载组件，如果你希望修改某些配置属性来调整组件的部分样式，则需要从中导入手动装载方法：`loadLive2DModel`

而通过 CDN 方式导入时，所有成员变量都可以在 `OML2D` 命名空间下被使用。

并且该方法接收一个 `options` 配置选项对象，在调用后返回 `oml` 对象，示例如下。

::: code-tabs#ts

@tab:active CDN

```js
const oml = OML2D.loadLive2DModel({
  // 在此进行配置
});
```

@tab ESM

```ts
import { loadLive2DModel } from 'oh-my-live2d';

const oml = loadLive2DModel({
  // 在此进行配置
});
```

:::

## CDN 导入示例：

```html
<script src="https://cdn.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js"></script>

<script>
  const oml = OML2D.loadLive2DModel({
    sayHello: false,
    transitionTime: 2000,
    models: {
      scale: 1.5
    }
    // ...more
  });
</script>
```

## ESM 导入示例：

```ts
import { loadLive2DModel } from 'oh-my-live2d';

const oml = loadLive2DModel({
  sayHello: false,
  transitionTime: 2000,
  models: {
    scale: 1.5
  }
  // ...more
});
```

::: tip
更多自定义配置请前往[配置详情](/zh/configure/)
:::

# 加载模型

当您需要加载模型时, 您可以在 `oh-my-live2d` 中导入`loadOml2d` 方法, 当这个方法被调用时将根据您传入的[配置选项](/options/Options)来加载组件, 该方法返回一个实例对象, 您可以从 `oml2d` 这个实例对象中调用其中所有方法.

## 基本使用

### ESM 方式:

```ts
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadoml2d({
  // ...options
});

// 舞台完全滑入后的事件回调
oml2d.onStageSlideIn(() => {
  oml2d.tipsMessage('Oh My Live2D !!!', 3000, 10);
});
```

### CDN 方式:

通过 CDN 方式导入时，所有成员变量都可以在 `OML2D` 命名空间下被使用。

```html
<script>
  const oml2d = OML2D.loadOml2d({
    // ...options
  });

  // 舞台完全滑入后的事件回调
  oml2d.onStageSlideIn(() => {
    oml2d.tipsMessage('Oh My Live2D !!!', 3000, 10);
  });
</script>
```

## oml2d 实例

### 方法

以下方法可在oml2d对象实例中被调用.

---

#### tipsMessage

主动消息提示

- 类型: `tipsMessage:(message: string , duration: number, priority: number) => void`
- 参数说明

| 参数     | 类型   | 描述     | 必须 | 默认值 |
| -------- | ------ | -------- | ---- | ------ |
| message  | string | 提示消息 | 是   | -      |
| duration | number | 持续时间 | 否   | 3000   |
| priority | number | 优先级   | 否   | 3      |

- 示例:

```ts
oml2d.tipsMessage('hello world', 3000, 10);
```

---

#### loadNextModel

加载下一个模型, 调用时将循环切换模型, 返回 `Promise`, 当 `then` 被调用时表示模型所有资源已加载完毕

- 类型: `loadNextModel(): Promise<void>`
- 示例:

```ts
oml2d.loadNextModel().then(() => {
  console.log('加载完毕');
});
```

---

#### reloadModel

重新加载当前模型, 返回 `Promise`, 当 `then` 被调用时表示模型所有资源已加载完毕

- 类型: `reloadModel(): Promise<void>`
- 示例:

```ts
oml2d.reloadModel().then(() => {
  console.log('加载完毕');
});
```

---

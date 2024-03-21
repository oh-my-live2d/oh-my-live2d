# 加载模型

当您需要加载模型时, 您可以在 `oh-my-live2d` 中导入`loadOml2d` 方法, 当这个方法被调用时将根据您传入的[配置选项](/options/Options)来加载组件, 该方法返回 `Promise`, 这意味着它是一个异步函数, 所以您可以从函数返回值调用`then`方法来获取`oml2d`实例.

当`then`方法被调用时, 表示所有组件和当前索引模型已全部加载完毕, 在这之后您就可以从 `oml2d` 实例对象中主动调用其暴露的方法.

:::tip
需要注意的时, `loadOml2d` 方法只允许被调用一次, 如果您调用了多次, 将永远采用最后一次被调用时传入的配置加载组件, 并且会卸载之前创建的元素保证body中只存在一个oml2d组件.

```ts
const main = async () => {
  const oml2d1 = await loadoml2d({}); // 将被卸载, 且实例对象 oml2d1 不可用
  const oml2d2 = await loadoml2d({}); // 将采用此配置重新加载, oml2d2 可用
};

main();
```

:::

## 基本使用

### ESM 方式:

```ts
import { loadOml2d } from 'oh-my-live2d';
loadoml2d({
  // ...options
}).then((oml2d) => {
  settimeout(() => {
    oml2d.tipsMessage('hello world', 3000, 10);
  }, 8000);
});
```

为避免回调地狱, 可以使用`async`和`await`关键字:

```ts
const main = async () => {
  const oml2d = await loadoml2d({
    // ...options
  });

  settimeout(() => {
    oml2d.tipsMessage('hello world', 3000, 10);
  }, 8000);
};

main();
```

### CDN 方式:

通过 CDN 方式导入时，所有成员变量都可以在 `OML2D` 命名空间下被使用。

```html
<script>
  OML2D.loadOml2d({
    // ...options
  }).then((oml2d) => {
    setTimeout(() => {
      oml2d.tipsMessage('hello world', 3000, 10);
    }, 8000);
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

#### switchStatus

切换模型状态, 休息/活动

- 类型:`switchStatus(): void`

- 示例:

```ts
oml2d.switchStatus();
```

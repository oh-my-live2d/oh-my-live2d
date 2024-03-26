# 加载模型

当您需要加载模型时, 您可以在 `oh-my-live2d` 中导入`loadOml2d` 方法, 当这个方法被调用时将根据您传入的[配置选项](/options/Options)来加载组件, 该方法返回一个实例对象, 您可以从 `oml2d` 这个实例对象中调用其中所有方法.

- 为了方便您理解`loadOml2d`方法调用时发生了什么, 这里提供了一个完整的生命周期描述图供您参考:

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/%E6%97%A0%E6%A0%87%E9%A2%98-2024-03-24-1330.png)

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

### 属性

以下属性可以通过实例对象访问到:

#### modelIndex

当前模型的索引值

- 类型: `number`

---

#### options

当前选项值, 这个值是您传入后与默认选项合并后的值

- 类型: `Options`

---

### 事件

以下事件可以通过实例对象来调用监听:

#### onLoad

模型每次在加载状态发生变化时的事件监听, 它接收一个函数作为参数, 当加载状态发生变化时将回调这个函数, 回调时将传入当前加载状态.

- 类型: `(fn: (status: 'loading' | 'success' | 'fail') => void)) => void`
- 示例:

```ts
oml2d.onLoad((status) => {
  switch (status) {
    case 'success':
      console.log('加载成功');
      return;
    case 'fail':
      console.log('加载失败');
      return;
    case 'loading':
      console.log('正在加载中');
      return;
  }
});
```

---

#### onStageSlideIn

舞台滑入动画执行完毕后的事件监听

- 类型: `(fn: EventFn) => void`

- 示例:

```ts
// 舞台完全滑入后的事件回调
oml2d.onStageSlideIn(() => {
  oml2d.tipsMessage('Oh My Live2D!!!', 3000, 10);
});
```

---

#### onStageSlideOut

舞台滑出动画执行完毕后的事件监听

- 类型: `(fn: EventFn) => void`

- 示例:

```ts
// 舞台完全滑出后的事件回调
oml2d.onStageSlideOut(() => {
  console.log('舞台已完全滑出');
});
```

---

### 方法

以下方法可在oml2d对象实例中被调用:

#### tipsMessage

主动消息提示

- 类型: `(message: string , duration: number, priority: number) => void`
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

加载下一个模型, 调用时将循环切换模型, 返回 `Promise`, 当 `then` 被调用时表示模型所有资源已加载完毕, 并且舞台滑入动画已执行结束

- 类型: `() => Promise<void>`
- 示例:

```ts
oml2d.loadNextModel().then(() => {
  console.log('加载完毕');
});
```

---

#### reloadModel

重新加载当前模型, 返回 `Promise`, 当 `then` 被调用时表示模型所有资源已加载完毕并且舞台滑入动画已执行结束

- 类型: `() => Promise<void>`
- 示例:

```ts
oml2d.reloadModel().then(() => {
  console.log('加载完毕');
});
```

---

#### stageSlideIn

执行舞台滑入动画, 返回 `Promise`, 当 `then` 被调用时表示舞台滑入动画已执行结束

- 类型: `() => Promise<void>`
- 示例:

```ts
oml2d.stageSlideIn().then(() => {
  console.log('舞台已滑入');
});
```

---

#### stageSlideOut

执行舞台滑出动画, 返回 `Promise`, 当 `then` 被调用时表示舞台滑出动画已执行结束

- 类型: `() => Promise<void>`
- 示例:

```ts
oml2d.stageSlideOut().then(() => {
  console.log('舞台已滑出');
});
```

---

#### setStageSize

设置舞台大小, 这个方法应该在模型加载成功之后再调用

- 类型: `(size: { width?: number; height?: number; }) => void`
- 参数说明

| 参数 | 类型                                   | 描述       | 必须 | 默认值 |
| ---- | -------------------------------------- | ---------- | ---- | ------ |
| size | `{ width?: number; height?: number; }` | 舞台的宽高 | 是   | -      |

- 示例:

```ts
oml2d.onLoad((status) => {
  switch (status) {
    case 'success':
      console.log('加载成功');
      oml2d.setStageSize({300, 300})
      return;
    case 'fail':
      console.log('加载失败');
      return;
    case 'loading':
      console.log('正在加载中');
      return;
  }
});
```

---

#### setModelPosition

设置模型位置, 这个方法应该在模型加载成功之后再调用

- 类型: `(position: { x?: number; y?: number; }) => void`
- 参数说明

| 参数     | 类型                          | 描述                   | 必须 | 默认值 |
| -------- | ----------------------------- | ---------------------- | ---- | ------ |
| position | `{ x?: number; y?: number; }` | 模型所处舞台的坐标位置 | 是   | -      |

- 示例:

```ts
oml2d.onLoad((status) => {
  switch (status) {
    case 'success':
      console.log('加载成功');
      oml2d.setModelPosition(10, 10);
      return;
    case 'fail':
      console.log('加载失败');
      return;
    case 'loading':
      console.log('正在加载中');
      return;
  }
});
```

---

#### showModelHitAreaFrames

显示模型点击区域框, 这个方法应该在模型加载成功之后再调用

- 类型: `() => void`
- 示例:

```ts
oml2d.onLoad((status) => {
  switch (status) {
    case 'success':
      console.log('加载成功');
      oml2d.showModelHitAreaFrames();
      return;
    case 'fail':
      console.log('加载失败');
      return;
    case 'loading':
      console.log('正在加载中');
      return;
  }
});
```

---

#### hideModelHitAreaFrames

隐藏模型点击区域, 这个方法应该在模型加载成功之后再调用

- 类型: `() => void`
- 示例:

```ts
oml2d.onLoad((status) => {
  switch (status) {
    case 'success':
      console.log('加载成功');
      oml2d.showModelHitAreaFrames(); // 显示点击区域
      setTimeout(() => {
        oml2d.hideModelHitAreaFrames(); // 隐藏点击区域
      }, 1000);
      return;
    case 'fail':
      console.log('加载失败');
      return;
    case 'loading':
      console.log('正在加载中');
      return;
  }
});
```

---

#### setModelScale

设置模型缩放, 这个方法应该在模型加载成功之后再调用

- 类型: `(value: number) => void`
- 参数说明

| 参数  | 类型     | 描述                                 | 必须 | 默认值 |
| ----- | -------- | ------------------------------------ | ---- | ------ |
| value | `number` | 模型的缩放值,为 0-1 之间的number类型 | 是   | -      |

- 示例:

```ts
oml2d.onLoad((status) => {
  switch (status) {
    case 'success':
      console.log('加载成功');
      oml2d.setModelScale(0.5);
      return;
    case 'fail':
      console.log('加载失败');
      return;
    case 'loading':
      console.log('正在加载中');
      return;
  }
});
```

---

#### clearTips

清除当前正在提示的消息, 并停止空闲消息播放器

- 类型: `() => void`
- 示例:

```ts
oml2d.clearTips();
```

---

#### stopTipsIdle

停止空闲消息播放器

- 类型: `() => void`
- 示例:

```ts
oml2d.stopTipsIdle();
```

---

#### startTipsIdle

开启空闲消息播放器

- 类型: `() => void`
- 示例:

```ts
oml2d.startTipsIdle();
```

---

#### statusBarOpen

弹出状态条并保持打开状态

- 类型: `(content?: string, color?: string) => void`
- 参数说明

| 参数    | 类型   | 描述         | 必须 | 默认值     |
| ------- | ------ | ------------ | ---- | ---------- |
| content | string | 提示状态内容 | 否   | -          |
| color   | string | 背景色       | 否   | 当前主题色 |

- 示例:

```ts
oml2d.statusBarOpen('看板娘休息中');
```

---

#### statusBarClose

收起状态条

- 类型: `(content?: string, color?: string, delay?: number) => void`

- 参数说明

| 参数    | 类型   | 描述               | 必须 | 默认值     |
| ------- | ------ | ------------------ | ---- | ---------- |
| content | string | 关闭前提示状态内容 | 否   | -          |
| color   | string | 关闭前展示的背景色 | 否   | 当前主题色 |
| delay   | number | 延时多久后关闭     | 否   | 0          |

- 示例:

```ts
oml2d.statusBarClose();
```

---

#### statusBarPopup

弹出状态条, 一段时间后自动收起

- 类型: `(content?: string, delay?: number, color?: string) => void`

- 参数说明

| 参数    | 类型   | 描述           | 必须 | 默认值     |
| ------- | ------ | -------------- | ---- | ---------- |
| content | string | 提示状态内容   | 否   | -          |
| delay   | number | 延时多久后关闭 | 否   | 0          |
| color   | string | 展示的背景色   | 否   | 当前主题色 |

- 示例:

```ts
oml2d.statusBarPopup('Hello', 2000);
```

---

#### setStatusBarClickEvent

设置状态条点击事件

- 类型: `(fn: EventFn) => void`

- 参数说明

| 参数 | 类型    | 描述               | 必须 | 默认值 |
| ---- | ------- | ------------------ | ---- | ------ |
| fn   | EventFn | 事件执行的回调函数 | 是   | -      |

- 示例:

```ts
oml2d.setStatusBarClickEvent(() => console.log('状态条被点击'));
```

---

#### setStatusBarHoverEvent

设置状态条hover事件

- 类型: `(events?: { onIn?: EventFn; onOut?: EventFn; }) => void`
- 参数说明

| 参数   | 类型                                   | 描述                           | 必须 | 默认值 |
| ------ | -------------------------------------- | ------------------------------ | ---- | ------ |
| events | `{ onIn?: EventFn; onOut?: EventFn; }` | 设置鼠标在移入移出时的事件回调 | 是   | -      |

- 示例:

```ts
oml2d.setStatusBarHoverEvent({
  onIn: () => console.log('鼠标移入了'),
  onOut: () => console.log('鼠标移出了')
});
```

---

#### statusBarClearEvents

清除状态条所有已绑定事件, 当您在执行完一个任务后需要手动清除状态条上已绑定的事件, 避免被误操作

- 类型: `() => void`
- 这里演示一下默认菜单中的完整示例:

```ts{5-30}
const oml2d = await loadOml2d({
  menus: {
    disable: false,
    items: [
      {
        id: 'Rest',
        icon: 'icon-rest',
        title: '休息',
        onClick(oml2d): void {
          oml2d.statusBarOpen(oml2d.options.statusBar.restMessage); // 展示状态条
          oml2d.clearTips(); // 清除当前提示框内容, 并停止空闲消息播放器

          // 为状态条绑定点击事件
          oml2d.setStatusBarClickEvent(() => {
            void oml2d.statusBarClose(); // 关闭状态条
            void oml2d.stageSlideIn(); // 舞台滑入
            oml2d.statusBarClearEvents(); // 清除所有事件
          });

          void oml2d.stageSlideOut(); // 舞台滑出
        }
      },
      {
        id: 'SwitchModel',
        icon: 'icon-switch',
        title: '切换模型',
        onClick(oml2d): void {
          void oml2d.loadNextModel();
        }
      },
      {
        id: 'About',
        icon: 'icon-about',
        title: '关于',
        onClick(): void {
          window.open('https://oml2d.com');
        }
      }
    ]
  }
});
```

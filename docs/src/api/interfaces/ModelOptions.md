# 模型选项

模型选项接收一个有模型选项对象组成的数组, 您可以通过这个选项来配置模型地址来源以及缩放比例、舞台大小等

## 用法:

<<< @/usages/options.ts#ModelOptions

## 选项:

### anchor?

> `optional` **anchor**: [`number`, `number`]

设置模型在舞台中的锚点位置

#### 默认值:

```ts
[0, 0];
```

---

### mobilePosition?

> `optional` **mobilePosition**: [`number`, `number`]

移动端时模型在舞台中的位置。x: 横坐标, y: 纵坐标

#### 默认值:

```ts
[0, 0];
```

---

### mobileScale?

> `optional` **mobileScale**: `number`

移动端时模型的缩放比例

#### 默认值:

```ts
0.1;
```

---

### mobileStageStyle?

> `optional` **mobileStageStyle**: `CommonStyleType`

移动端舞台的样式, 支持传入CSS对象, 传入的样式将通过内联样式作用于舞台元素, 舞台的默认宽高将自适应模型的宽高, 舞台内Canvas元素的宽高始终与舞台保持一致, 仅在移动端生效

---

### motionPreloadStrategy?

> `optional` **motionPreloadStrategy**: `"ALL"` \| `"IDLE"` \| `"NONE"`

动作预加载策略

#### 默认值:

```ts
IDLE;
```

---

### name?

> `optional` **name**: `string`

模型的唯一标识, 当您需要判断当前模型时会非常有用

---

### path

> **path**: `string` \| `string`[]

模型的 json 文件 url 地址, 必填项, 当 path 为数组时, 表示该模型有一系列皮肤可以切换

---

### position?

> `optional` **position**: [`number`, `number`]

模型在舞台中的位置。x: 横坐标, y: 纵坐标

#### 默认值:

```ts
[0, 0];
```

---

### rotation?

> `optional` **rotation**: `number`

模型的旋转角度, 单位:度 (0-360)

#### 默认值:

```ts
0;
```

---

### scale?

> `optional` **scale**: `number`

模型的缩放比例

#### 默认值:

```ts
0.1;
```

---

### showHitAreaFrames?

> `optional` **showHitAreaFrames**: `boolean`

是否显示该模型的点击区域框, 该选项是为了方便您预览和调试模型的可点击区域, 当这个选项为true时,将显示该模型的所有可点击区域, 点击区域的大小与位置取决于模型本身

---

### stageStyle?

> `optional` **stageStyle**: `CommonStyleType`

定义舞台样式, 支持传入CSS对象, 传入的样式将通过内联样式作用于舞台元素, 舞台的默认宽高将自适应模型的宽高, 舞台内Canvas元素的宽高始终与舞台保持一致

---

### volume?

> `optional` **volume**: `number`

模型播放声音的音量, 声音与动作一起播放, 如果模型存在声音资源的话, 值为 0-1 之间的number类型, 0为静音

#### 默认值:

```ts
0.5;
```

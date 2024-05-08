# 实例对象中的方法

方法可以通过实例对象访问

## 用法:

以下是通过实例对象调用方法的示例:

<<< @/usages/oml2d.ts#Methods

## 方法:

### clearTips()

> **clearTips**: () => `void`

清除当前正在提示的消息, 并停止空闲消息播放器

#### 返回值类型:

`void`

---

### hideModelHitAreaFrames()

> **hideModelHitAreaFrames**: () => `void`

隐藏模型的可点击区域

#### 返回值类型:

`void`

---

### loadModelByIndex()

> **loadModelByIndex**: (`index`: `number`, `clothesIndex`?: `number`) => `Promise`\<`void`\>

加载指定索引的模型

#### 参数:

| 参数名          | 类型     | 描述     |
| :-------------- | :------- | :------- |
| `index`         | `number` | 模型索引 |
| `clothesIndex`? | `number` | -        |

#### 返回值类型:

`Promise`\<`void`\>

---

### loadModelByName()

> **loadModelByName**: (`name`: `string`, `clothesIndex`?: `number`) => `Promise`\<`void`\>

#### 参数:

| 参数名          | 类型     | 描述         |
| :-------------- | :------- | :----------- |
| `name`          | `string` | 模型名称     |
| `clothesIndex`? | `number` | 模型衣服索引 |

#### 返回值类型:

`Promise`\<`void`\>

---

### loadNextModel()

> **loadNextModel**: () => `Promise`\<`void`\>

加载下一个模型

#### 返回值类型:

`Promise`\<`void`\>

---

### loadNextModelClothes()

> **loadNextModelClothes**: () => `Promise`\<`void`\>

加载当前模型的下一个衣服, 即:切换同个角色的不同模型

#### 返回值类型:

`Promise`\<`void`\>

---

### loadRandomModel()

> **loadRandomModel**: () => `Promise`\<`void`\>

加载随机模型

#### 返回值类型:

`Promise`\<`void`\>

---

### reloadModel()

> **reloadModel**: () => `Promise`\<`void`\>

重新加载模型

#### 返回值类型:

`Promise`\<`void`\>

---

### setModelAnchor()

> **setModelAnchor**: (`anchor`: `object`) => `void`

#### 参数:

| 参数名      | 类型     | 描述     |
| :---------- | :------- | :------- |
| `anchor`    | `object` | 模型锚点 |
| `anchor.x`? | `number` | x轴      |
| `anchor.y`? | `number` | y轴      |

#### 返回值类型:

`void`

---

### setModelPosition()

> **setModelPosition**: (`position`: `object`) => `void`

设置模型位置

#### 参数:

| 参数名        | 类型     | 描述     |
| :------------ | :------- | :------- |
| `position`    | `object` | 模型位置 |
| `position.x`? | `number` | x轴      |
| `position.y`? | `number` | y轴      |

#### 返回值类型:

`void`

---

### setModelRotation()

> **setModelRotation**: (`rotation`: `number`) => `void`

设置当前模型的旋转角度

#### 参数:

| 参数名     | 类型     | 描述         |
| :--------- | :------- | :----------- |
| `rotation` | `number` | 模型旋转角度 |

#### 返回值类型:

`void`

---

### setModelScale()

> **setModelScale**: (`scale`: `number`) => `void`

设置模型缩放, 这个方法应该在模型加载成功之后再调用

#### 参数:

| 参数名  | 类型     | 描述     |
| :------ | :------- | :------- |
| `scale` | `number` | 缩放比例 |

#### 返回值类型:

`void`

---

### setStageStyle()

> **setStageStyle**: (`size`: `object`) => `void`

设置舞台大小

#### 参数:

| 参数名         | 类型     | 描述     |
| :------------- | :------- | :------- |
| `size`         | `object` | 舞台大小 |
| `size.height`? | `number` | 高度     |
| `size.width`?  | `number` | 宽度     |

#### 返回值类型:

`void`

---

### setStatusBarClickEvent()

> **setStatusBarClickEvent**: (`fn`: () => `void` \| `Promise`\<`void`\>) => `void`

设置状态条点击事件

#### 参数:

| 参数名 | 类型                                | 描述         |
| :----- | :---------------------------------- | :----------- |
| `fn`   | () => `void` \| `Promise`\<`void`\> | 点击事件回调 |

#### 返回值类型:

`void`

---

### setStatusBarHoverEvent()

> **setStatusBarHoverEvent**: (`events`?: `object`) => `void`

设置状态条hover事件

#### 参数:

| 参数名          | 类型                                | 描述                       |
| :-------------- | :---------------------------------- | :------------------------- |
| `events`?       | `object`                            | 鼠标事件对象               |
| `events.onIn`?  | () => `void` \| `Promise`\<`void`\> | 鼠标进入状态条时触发的回调 |
| `events.onOut`? | () => `void` \| `Promise`\<`void`\> | 鼠标离开状态条时触发的回调 |

#### 返回值类型:

`void`

---

### showModelHitAreaFrames()

> **showModelHitAreaFrames**: () => `void`

显示模型的可点击区域

#### 返回值类型:

`void`

---

### stageSlideIn()

> **stageSlideIn**: () => `Promise`\<`void`\>

舞台滑入

#### 返回值类型:

`Promise`\<`void`\>

---

### stageSlideOut()

> **stageSlideOut**: () => `Promise`\<`void`\>

舞台滑出

#### 返回值类型:

`Promise`\<`void`\>

---

### startTipsIdle()

> **startTipsIdle**: () => `void`

开始空闲消息播放器

#### 返回值类型:

`void`

---

### statusBarClearEvents()

> **statusBarClearEvents**: () => `void`

清除状态条所有已绑定事件, 当您在执行完一个任务后需要手动清除状态条上已绑定的事件, 避免被误操作

#### 返回值类型:

`void`

---

### statusBarClose()

> **statusBarClose**: (`content`?: `string`, `delay`?: `number`, `color`?: `string`) => `void`

关闭状态条

#### 参数:

| 参数名     | 类型     | 描述                 |
| :--------- | :------- | :------------------- |
| `content`? | `string` | 状态条内容           |
| `delay`?   | `number` | 延迟时间, 单位: 毫秒 |
| `color`?   | `string` | 状态条颜色           |

#### 返回值类型:

`void`

---

### statusBarOpen()

> **statusBarOpen**: (`content`?: `string`, `color`?: `string`) => `void`

弹出状态条并保持打开状态

#### 参数:

| 参数名     | 类型     | 描述       |
| :--------- | :------- | :--------- |
| `content`? | `string` | 状态条内容 |
| `color`?   | `string` | 状态条颜色 |

#### 返回值类型:

`void`

---

### statusBarPopup()

> **statusBarPopup**: (`content`?: `string`, `delay`?: `number`, `color`?: `string`) => `void`

弹出状态条, 一段时间后自动收起

#### 参数:

| 参数名     | 类型     | 描述                 |
| :--------- | :------- | :------------------- |
| `content`? | `string` | 状态条内容           |
| `delay`?   | `number` | 延迟时间, 单位: 毫秒 |
| `color`?   | `string` | 状态条颜色           |

#### 返回值类型:

`void`

---

### stopTipsIdle()

> **stopTipsIdle**: () => `void`

停止空闲消息播放器

#### 返回值类型:

`void`

---

### tipsMessage()

> **tipsMessage**: (`message`: `string`, `duration`: `number`, `priority`: `number`) => `void`

提示信息

#### 参数:

| 参数名     | 类型     | 描述                           |
| :--------- | :------- | :----------------------------- |
| `message`  | `string` | 提示信息                       |
| `duration` | `number` | 提示持续时间, 单位: 毫秒       |
| `priority` | `number` | 提示优先级, 数字越大优先级越高 |

#### 返回值类型:

`void`

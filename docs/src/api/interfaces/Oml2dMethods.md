# 组件方法

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

### loadNextModel()

> **loadNextModel**: () => `Promise`\<`void`\>

加载下一个模型

#### 返回值类型:

`Promise`\<`void`\>

---

### loadNextModelClothes()

> **loadNextModelClothes**: () => `Promise`\<`void`\>

#### 返回值类型:

`Promise`\<`void`\>

---

### options

> **options**: `DefaultOptions`

配置选项, 用户传入选项与默认选项合并之后的值

---

### reloadModel()

> **reloadModel**: () => `Promise`\<`void`\>

重新加载模型

#### 返回值类型:

`Promise`\<`void`\>

---

### setModelPosition()

> **setModelPosition**: (`position`) => `void`

设置模型位置

#### 参数:

| 参数          | 类型     | 描述 |
| :------------ | :------- | :--- |
| `position`    | `object` |      |
| `position.x`? | `number` | -    |
| `position.y`? | `number` | -    |

#### 返回值类型:

`void`

---

### setModelScale()

> **setModelScale**: (`scale`) => `void`

设置模型缩放, 这个方法应该在模型加载成功之后再调用

#### 参数:

| 参数    | 类型     | 描述     |
| :------ | :------- | :------- |
| `scale` | `number` | 缩放比例 |

#### 返回值类型:

`void`

---

### setStageStyle()

> **setStageStyle**: (`size`) => `void`

设置舞台大小

#### 参数:

| 参数           | 类型     | 描述 |
| :------------- | :------- | :--- |
| `size`         | `object` |      |
| `size.height`? | `number` | -    |
| `size.width`?  | `number` | -    |

#### 返回值类型:

`void`

---

### setStatusBarClickEvent()

> **setStatusBarClickEvent**: (`fn`) => `void`

设置状态条点击事件

#### 参数:

| 参数 | 类型                                | 描述 |
| :--- | :---------------------------------- | :--- |
| `fn` | () => `void` \| `Promise`\<`void`\> |      |

#### 返回值类型:

`void`

---

### setStatusBarHoverEvent()

> **setStatusBarHoverEvent**: (`events`?) => `void`

设置状态条hover事件

#### 参数:

| 参数            | 类型                                | 描述 |
| :-------------- | :---------------------------------- | :--- |
| `events`?       | `object`                            |      |
| `events.onIn`?  | () => `void` \| `Promise`\<`void`\> | -    |
| `events.onOut`? | () => `void` \| `Promise`\<`void`\> | -    |

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

> **statusBarClose**: (`content`?, `color`?, `delay`?) => `void`

收起状态条

#### 参数:

| 参数       | 类型     |
| :--------- | :------- |
| `content`? | `string` |
| `color`?   | `string` |
| `delay`?   | `number` |

#### 返回值类型:

`void`

---

### statusBarOpen()

> **statusBarOpen**: (`content`?, `color`?) => `void`

弹出状态条并保持打开状态

#### 参数:

| 参数       | 类型     | 描述 |
| :--------- | :------- | :--- |
| `content`? | `string` |      |
| `color`?   | `string` |      |

#### 返回值类型:

`void`

---

### statusBarPopup()

> **statusBarPopup**: (`content`?, `delay`?, `color`?) => `void`

弹出状态条, 一段时间后自动收起

#### 参数:

| 参数       | 类型     | 描述 |
| :--------- | :------- | :--- |
| `content`? | `string` |      |
| `delay`?   | `number` |      |
| `color`?   | `string` |      |

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

> **tipsMessage**: (`message`, `duration`, `priority`) => `void`

提示信息

#### 参数:

| 参数       | 类型     | 描述 |
| :--------- | :------- | :--- |
| `message`  | `string` |      |
| `duration` | `number` |      |
| `priority` | `number` |      |

#### 返回值类型:

`void`

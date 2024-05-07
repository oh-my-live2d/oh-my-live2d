#

## Constructors

### new LoadOhMyLive2D()

> **new LoadOhMyLive2D**(`options`): [`LoadOhMyLive2D`](LoadOhMyLive2D.md)

#### 参数

• **options**: [`Options`](../interfaces/Options.md)

#### 返回值类型

[`LoadOhMyLive2D`](LoadOhMyLive2D.md)

## 属性:

### events

> `private` **events**: `Events`

---

### oml2d?

> `private` `optional` **oml2d**: `OhMyLive2D`

---

### options

> **options**: `默认值:Options` = `DEFAULT_OPTIONS`

## Accessors

### model

> `get` **model**(): `undefined` \| [`ModelOptions`](../interfaces/ModelOptions.md)

当前模型选项

#### 返回值类型

`undefined` \| [`ModelOptions`](../interfaces/ModelOptions.md)

---

### modelIndex

> `get` **modelIndex**(): `undefined` \| `number`

当前模型索引值

#### 返回值类型

`undefined` \| `number`

## Methods

### clearTips()

> **clearTips**(): `void`

清除当前提示框内容并关闭空闲消息播放器

#### 返回值类型

`void`

---

### hideModelHitAreaFrames()

> **hideModelHitAreaFrames**(): `void`

隐藏当前模型点击区域框

#### 返回值类型

`void`

---

### loadModelByIndex()

> **loadModelByIndex**(`modelIndex`, `modelClothesIndex`?): `Promise`\<`void`\>

#### 参数

• **modelIndex**: `number`

模型的索引值

• **modelClothesIndex?**: `number`

指定模型的衣服索引值, 该参数仅在传入的指定模型的 path 是 string[] 时生效

#### 返回值类型

`Promise`\<`void`\>

#### Description

通过模型索引值加载模型

---

### loadModelByName()

> **loadModelByName**(`modelName`, `modelClothesIndex`?): `Promise`\<`void`\>

#### 参数

• **modelName**: `string`

• **modelClothesIndex?**: `number`

指定模型的衣服索引值, 该参数仅在传入的指定模型的 path 是 string[] 时生效

#### 返回值类型

`Promise`\<`void`\>

#### Description

通过模型名称加载模型

---

### loadNextModel()

> **loadNextModel**(): `Promise`\<`void`\>

加载下一个模型

#### 返回值类型

`Promise`\<`void`\>

---

### loadNextModelClothes()

> **loadNextModelClothes**(): `Promise`\<`void`\>

加载模型的下一个衣服, 即切换同个角色的不同模型

#### 返回值类型

`Promise`\<`void`\>

---

### loadRandomModel()

> **loadRandomModel**(): `Promise`\<`void`\>

加载随机模型

#### 返回值类型

`Promise`\<`void`\>

---

### onLoad()

> **onLoad**(`fn`): `void`

模型在每次加载状态发生变化时的事件监听

#### 参数

• **fn**: `LoadEventFn`

#### 返回值类型

`void`

---

### onStageSlideIn()

> **onStageSlideIn**(`fn`): `void`

舞台滑入动画执行完毕后的事件监听

#### 参数

• **fn**: `EventFn`

#### 返回值类型

`void`

---

### onStageSlideOut()

> **onStageSlideOut**(`fn`): `void`

舞台滑出动画执行完毕后的事件监听

#### 参数

• **fn**: `EventFn`

#### 返回值类型

`void`

---

### reloadModel()

> **reloadModel**(): `Promise`\<`void`\>

重新加载当前模型

#### 返回值类型

`Promise`\<`void`\>

---

### setModelAnchor()

> **setModelAnchor**(`anchor`): `void`

设置当前模型的锚点位置

#### 参数

• **anchor**

• **anchor.x?**: `number`

• **anchor.y?**: `number`

#### 返回值类型

`void`

---

### setModelPosition()

> **setModelPosition**(`position`): `void`

设置当前模型位置

#### 参数

• **position**

• **position.x?**: `number`

• **position.y?**: `number`

#### 返回值类型

`void`

---

### setModelRotation()

> **setModelRotation**(`rotation`): `void`

设置当前模型的旋转角度

#### 参数

• **rotation**: `number`

#### 返回值类型

`void`

---

### setModelScale()

> **setModelScale**(`value`): `void`

设置当前模型缩放

#### 参数

• **value**: `number`

#### 返回值类型

`void`

---

### setStageStyle()

> **setStageStyle**(`style`): `void`

设置当前模型的舞台样式

#### 参数

• **style**: `CommonStyleType`

#### 返回值类型

`void`

---

### setStatusBarClickEvent()

> **setStatusBarClickEvent**(`fn`): `void`

设置状态条点击事件

#### 参数

• **fn**: `EventFn`

#### 返回值类型

`void`

---

### setStatusBarHoverEvent()

> **setStatusBarHoverEvent**(`events`?): `void`

设置状态条hover事件

#### 参数

• **events?**

• **events.onIn?**: `EventFn`

• **events.onOut?**: `EventFn`

#### 返回值类型

`void`

---

### setup()

> `private` **setup**(`options`): `void`

安装组件

#### 参数

• **options**: [`Options`](../interfaces/Options.md)

#### 返回值类型

`void`

---

### showModelHitAreaFrames()

> **showModelHitAreaFrames**(): `void`

显示当前模型点击区域框

#### 返回值类型

`void`

---

### stageSlideIn()

> **stageSlideIn**(): `Promise`\<`void`\>

舞台滑入

#### 返回值类型

`Promise`\<`void`\>

---

### stageSlideOut()

> **stageSlideOut**(): `Promise`\<`void`\>

舞台滑出

#### 返回值类型

`Promise`\<`void`\>

---

### startTipsIdle()

> **startTipsIdle**(): `void`

开启空闲消息播放器

#### 返回值类型

`void`

---

### statusBarClearEvents()

> **statusBarClearEvents**(): `void`

清除状态条所有绑定事件

#### 返回值类型

`void`

---

### statusBarClose()

> **statusBarClose**(`content`?, `color`?, `delay`?): `void`

收起状态条

#### 参数

• **content?**: `string`

• **color?**: `string`

• **delay?**: `number`

#### 返回值类型

`void`

---

### statusBarOpen()

> **statusBarOpen**(`content`?, `color`?): `void`

弹出状态条并保持打开状态

#### 参数

• **content?**: `string`

• **color?**: `string`

#### 返回值类型

`void`

---

### statusBarPopup()

> **statusBarPopup**(`content`?, `delay`?, `color`?): `void`

弹出状态条, 一段时间后自动收起

#### 参数

• **content?**: `string`

• **delay?**: `number`

• **color?**: `string`

#### 返回值类型

`void`

---

### stopTipsIdle()

> **stopTipsIdle**(): `void`

停止空闲消息播放器

#### 返回值类型

`void`

---

### tipsMessage()

> **tipsMessage**(`message`, `duration`?, `priority`?): `void`

主动提示消息, 调用时会提前自动关闭当前空闲消息播放器, 调用结束之后会自动开启空闲消息播放器

#### 参数

• **message**: `string`

提示信息

• **duration?**: `number`

持续时间 默认值: 3000

• **priority?**: `number`

优先级 默认值: 3

#### 返回值类型

`void`

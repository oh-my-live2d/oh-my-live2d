# 实例对象中的事件

事件可以通过实例对象访问

## 用法:

以下是通过实例对象监听事件的示例:

<<< @/usages/oml2d.ts#Events

## 事件:

### onLoad()

> **onLoad**: (`fn`: (`status`: `"loading"` \| `"success"` \| `"fail"`) => `void` \| `Promise`\<`void`\>) => `void`

模型加载事件, 加载成功不代表舞台可见, 如果需要在舞台完全可见时触发, 请在 [onStageSlideIn](#onstageslidein) 事件中执行操作.

#### 用法:

<<< @/usages/events.ts#onLoad

#### 参数:

| 参数名 | 类型                                                                                | 描述                                                                                                                                                 |
| :----- | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fn`   | (`status`: `"loading"` \| `"success"` \| `"fail"`) => `void` \| `Promise`\<`void`\> | 加载结束的回调, 回调时会传入加载状态: 'loading' \|'success' \| 'fail'<br /><br /> loading: 正在加载模型<br /> success: 加载成功<br /> fail: 加载失败 |

#### 返回值类型:

`void`

---

### onStageSlideIn()

> **onStageSlideIn**: (`fn`: () => `void` \| `Promise`\<`void`\>) => `void`

舞台完全滑入事件

#### 用法:

<<< @/usages/events.ts#onStageSlideIn

#### 参数:

| 参数名 | 类型                                | 描述     |
| :----- | :---------------------------------- | :------- |
| `fn`   | () => `void` \| `Promise`\<`void`\> | 事件回调 |

#### 返回值类型:

`void`

---

### onStageSlideOut()

> **onStageSlideOut**: (`fn`: () => `void` \| `Promise`\<`void`\>) => `void`

舞台完全滑出事件

#### 用法:

<<< @/usages/events.ts#onStageSlideOut

#### 参数:

| 参数名 | 类型                                | 描述     |
| :----- | :---------------------------------- | :------- |
| `fn`   | () => `void` \| `Promise`\<`void`\> | 事件回调 |

#### 返回值类型:

`void`

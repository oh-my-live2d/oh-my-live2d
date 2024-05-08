# 实例对象中的事件

事件可以通过实例对象访问

## 用法:

以下是通过实例对象监听事件的示例:

<<< @/usages/oml2d.ts#Events

## 事件:

### onLoad()

> **onLoad**: (`fn`: (`status`: `"loading"` \| `"success"` \| `"fail"`) => `void` \| `Promise`\<`void`\>) => `void` \| `Promise`\<`void`\>

模型加载事件

#### 参数:

| 参数名 | 类型                                                                                | 描述           |
| :----- | :---------------------------------------------------------------------------------- | :------------- |
| `fn`   | (`status`: `"loading"` \| `"success"` \| `"fail"`) => `void` \| `Promise`\<`void`\> | 加载结束的回调 |

#### 返回值类型:

`void` \| `Promise`\<`void`\>

---

### onStageSlideIn()

> **onStageSlideIn**: (`fn`: () => `void` \| `Promise`\<`void`\>) => `void` \| `Promise`\<`void`\>

舞台完全滑入事件

#### 参数:

| 参数名 | 类型                                | 描述     |
| :----- | :---------------------------------- | :------- |
| `fn`   | () => `void` \| `Promise`\<`void`\> | 事件回调 |

#### 返回值类型:

`void` \| `Promise`\<`void`\>

---

### onStageSlideOut()

> **onStageSlideOut**: (`fn`: () => `void` \| `Promise`\<`void`\>) => `void` \| `Promise`\<`void`\>

舞台完全滑出事件

#### 参数:

| 参数名 | 类型                                | 描述     |
| :----- | :---------------------------------- | :------- |
| `fn`   | () => `void` \| `Promise`\<`void`\> | 事件回调 |

#### 返回值类型:

`void` \| `Promise`\<`void`\>

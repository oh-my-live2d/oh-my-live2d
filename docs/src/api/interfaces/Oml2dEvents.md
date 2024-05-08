# 组件事件

## 事件:

### onLoad()

> **onLoad**: (`fn`: (`status`: `"loading"` \| `"success"` \| `"fail"`) => `void` \| `Promise`\<`void`\>) => `void` \| `Promise`\<`void`\>

模型加载事件

#### 参数:

| 参数 | 类型                                                                                | 描述           |
| :--- | :---------------------------------------------------------------------------------- | :------------- |
| `fn` | (`status`: `"loading"` \| `"success"` \| `"fail"`) => `void` \| `Promise`\<`void`\> | 加载结束的回调 |

#### 返回值类型:

`void` \| `Promise`\<`void`\>

---

### onStageSlideIn()

> **onStageSlideIn**: (`fn`: () => `void` \| `Promise`\<`void`\>) => `void` \| `Promise`\<`void`\>

舞台完全滑入事件

#### 参数:

| 参数 | 类型                                | 描述     |
| :--- | :---------------------------------- | :------- |
| `fn` | () => `void` \| `Promise`\<`void`\> | 事件回调 |

#### 返回值类型:

`void` \| `Promise`\<`void`\>

---

### onStageSlideOut()

> **onStageSlideOut**: (`fn`: () => `void` \| `Promise`\<`void`\>) => `void` \| `Promise`\<`void`\>

舞台完全滑出事件

#### 参数:

| 参数 | 类型                                | 描述     |
| :--- | :---------------------------------- | :------- |
| `fn` | () => `void` \| `Promise`\<`void`\> | 事件回调 |

#### 返回值类型:

`void` \| `Promise`\<`void`\>

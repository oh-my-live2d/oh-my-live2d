# 状态条选项

自定义状态条样式以及不同状态的文本和颜色

## 用法:

<<< @/usages/options.ts#StatusBarOptions

## 选项:

### disable?

> `optional` **disable**: `boolean`

是否禁用状态条, 为true时将不会创建状态条

#### 默认值:

```ts
false;
```

---

### errorColor?

> `optional` **errorColor**: `string`

加载异常时展示的背景色

---

### loadFailMessage?

> `optional` **loadFailMessage**: `string`

模型加载失败时提示的文本信息

#### 默认值:

```ts
'加载失败';
```

---

### loadSuccessMessage?

> `optional` **loadSuccessMessage**: `string`

模型加载成功时提示的文本信息

#### 默认值:

```ts
'加载成功';
```

---

### loadingIcon?

> `optional` **loadingIcon**: `string`

自定义模型加载时的icon, 详见: [自定义图标](/guide/icon)

#### 默认值:

```ts
icon - loading;
```

---

### loadingMessage?

> `optional` **loadingMessage**: `string`

加载时的提示文本

#### 默认值:

```ts
'加载中';
```

---

### mobileStyle?

> `optional` **mobileStyle**: `CommonStyleType`

移动端下状态条样式

---

### reloadMessage?

> `optional` **reloadMessage**: `string`

加载失败hover事件时模型重新加载文本信息

#### 默认值:

```ts
'重新加载';
```

---

### restMessage?

> `optional` **restMessage**: `string`

模型休息状态时提示的文本信息

#### 默认值:

```ts
'看板娘休息中';
```

---

### restMessageDuration?

> `optional` **restMessageDuration**: `number`

模型休息时提示持续时长, 仅作用于移动端禁用时的提示 单位ms

#### 默认值:

```ts
8000;
```

---

### style?

> `optional` **style**: `CommonStyleType`

配置状态条样式

---

### switchingMessage?

> `optional` **switchingMessage**: `string`

模型切换时提示的文本信息

#### 默认值:

```ts
'正在切换';
```

---

### transitionTime?

> `optional` **transitionTime**: `number`

状态条弹入弹出时过渡动画时长, 单位ms

#### 默认值:

```ts
800;
```

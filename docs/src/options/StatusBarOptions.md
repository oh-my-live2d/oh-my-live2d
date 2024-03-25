# 状态条选项

配置状态条样式以及不同状态的文本和颜色等

```ts
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadoml2d({
  statusBar: {
    // 在这里进行配置
  }
});
```

## 选项

<!-- --- -->

### disable

- 类型: `boolean`

- 默认值: `false`

是否禁用状态条, 为true时将不会创建状态条

---

### errorColor

- 类型: `string`

加载异常时展示的背景色

---

### loadFailMessage

- 类型: `string`

- 默认值: `加载失败`

模型加载失败时提示的文本信息

---

### loadSuccessMessage

- 类型: `string`

- 默认值: `加载成功`

模型加载成功时提示的文本信息

---

### loadingIcon

- 类型: `string`

- 默认值: `icon-loading`

自定义模型加载时的icon, 详见: [自定义图标](/guide/icon)

---

### loadingMessage

- 类型: `string`

- 默认值: `加载中`

加载时的提示文本

---

### mobileStyle

- 类型: `object`

移动端下状态条样式

---

### reloadMessage

- 类型: `string`

- 默认值: `重新加载`

加载失败hover事件时模型重新加载文本信息

---

### restMessage

- 类型: `string`

- 默认值: `看板娘休息中`

模型休息状态时提示的文本信息

---

### restMessageDuration

- 类型: `number`

- 默认值: `8000`

模型休息时提示持续时长, 仅作用于移动端禁用时的提示 单位ms

---

### style

- 类型: `object`

配置状态条样式

---

### switchingMessage

- 类型: `string`

- 默认值: `正在切换`

模型切换时提示的文本信息

---

### transitionTime

- 类型: `number`

- 默认值: `800`

状态条弹入弹出时过渡动画时长, 单位ms

---

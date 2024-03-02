# 模型配置选项

可配置模型地址来源以及缩放比例、舞台大小等

---

### path

- 类型: `string`

模型的 json 文件 url 地址, 必填项

---

### position

- 类型: `[x: number, y:number]`

- 默认值: `[0,0]`

模型在舞台中的位置. x: 横坐标, y: 纵坐标

---

### scale

- 类型: `number`

- 默认值: `0.1`

模型的缩放比例

---

### stageStyle

- 类型: `object`

定义舞台样式

---

### stageStyle.backgroundColor

- 类型: `string`

舞台的背景颜色,取有效的颜色值, rbg 或 rbga, 默认透明未设置默认为空的

---

### stageStyle.height

- 类型: `number`

舞台的高度, 单位 px, 默认不设置, 将自适应使用模型本体的高度

---

### stageStyle.width

- 类型: `number`

舞台的宽度, 单位 px, 默认不设置, 将自适应使用模型本体的宽度

---

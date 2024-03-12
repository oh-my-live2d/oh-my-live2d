### motionPreloadStrategy

- 类型: `ALL | IDLE | NONE`

- 默认值: `IDLE`

动作预加载策略

---

### path

- 类型: `string`

模型的 json 文件 url 地址, 必填项

---

### position

- 类型: `[x: number, y:number]`

- 默认值: `[0,0]`

模型在舞台中的位置。x: 横坐标, y: 纵坐标

---

### scale

- 类型: `number`

- 默认值: `0.1`

模型的缩放比例

---

### showHitAreaFrames

- 类型: `boolean`

是否显示该模型的点击区域框, 该选项是为了方便您预览和调试模型的可点击区域, 当这个选项为true时,将显示该模型的所有可点击区域, 点击区域的大小与位置取决于模型本身

---

### stageStyle

- 类型: `object`

定义舞台样式, 支持传入CSS对象, 传入的样式将通过内联样式作用于舞台元素, 舞台的默认宽高将自适应模型的宽高, 舞台内Canvas元素的宽高始终与舞台保持一致

---

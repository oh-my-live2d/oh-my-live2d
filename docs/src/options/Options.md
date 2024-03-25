# 配置选项

基础配置选项

```ts
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadoml2d({
  // 在这里进行配置
});
```

## 选项

<!-- --- -->

### dockedPosition

- 类型: `left | right`

- 默认值: `left`

组件停靠位置, 当您希望组件靠右展示时这个属性会非常有用. 同时影响状态条、舞台、菜单.

默认值: left, 当值为left时舞台和状态条居左, 菜单居右(位置值相反),

---

### importType

- 类型: `complete | cubism2 | cubism5`

- 默认值: `complete`

导入类型, 这个选项的作用是从 libraryUrls 选项决定SDK加载地址, 默认使用全量导入: complete

---

### libraryUrls

- 类型: `object`

自定义 Cubism SDK 外部资源地址, oh-my-live2d 会通过 script 标签的 src 属性来加载核心SDK文件, 这个加载是完全自动的, 您无需关心这个加载过程, 默认情况下您也无需修改此选项, 但当您发现SDK加载出现异常时您可以在此选项自定义自己的地址, 同时您可以在[此处](https://github.com/oh-my-live2d/oh-my-live2d/tree/main/packages/oh-my-live2d/lib)找到以下对应的3个SDK地址, 必要时您可以备份这些脚本文件

---

### libraryUrls.complete

- 类型: `string`

自定义全量SDK地址

---

### libraryUrls.cubism2

- 类型: `string`

自定义 Cubism2 SDK 地址

---

### libraryUrls.cubism5

- 类型: `string`

自定义 Cubism5 SDK 地址

---

### menus

- 类型: `MenusOptions | ((currentModel: ModelOptions, modelIndex: number) => MenusOptions)`

菜单配置, 详见: [菜单选项](/options/MenusOptions)

---

### mobileDisplay

- 类型: `boolean`

- 默认值: `false`

移动端是否展示, 开启将会在移动端设备上以移动端样式展示各元素

---

### models

- 类型: `ModelOptions[]`

- 默认值: `[]`

模型选项, 类型是模型配置对象组成的数组, 默认值是空数组

详见: [模型选项](/options/ModelOptions)

---

### parentElement

- 类型: `HtmlElement`

- 默认值: `document.body`

为组件提供一个父元素，如果未指定则默认挂载到 body 中

---

### primaryColor

- 类型: `string`

- 默认值: `#38B0DE`

定义主题色, 影响所有模块

---

### sayHello

- 类型: `boolean`

- 默认值: `true`

是否在初始化阶段打印项目信息

---

### statusBar

- 类型: `StatusBarOptions`

状态条选项, 详见: [状态条选项](/options/StatusBarOptions)

---

### tips

- 类型: `TipsOptions | ((currentModel: ModelOptions, modelIndex: number) => TipsOptions)`

自定义提示框样式和内容, 前往[提示框选项](/options/TipsOptions)查看详细内容

---

### transitionTime

- 类型: `number`

- 默认值: `1000`

组件入场和离开的过渡动画时长,单位 ms

---

# 配置选项

---

### importType

- 类型: `complete | cubism2 | cubism5`

- 默认值: `complete`

导入类型, 默认使用全量导入: complete

---

### libraryUrls

- 类型: `object`

自定义 Cubism SDK 外部资源地址, 当您发现SDK加载出现异常时您可以在此选项自定义自己的地址, 您可以在[此处](https://github.com/oh-my-live2d/oh-my-live2d/tree/main/packages/oh-my-live2d/lib)找到以下对应的3个SDK地址, 必要时您可以备份这些脚本文件

> [!TIP]
> 自 v0.5.0 版本起, 将通过 script 标签的 src 属性按需去引入对应版本的 Cubism SDK , 这个过程是完全自动的, 默认情况下它将使用我们提供的默认地址进行加载, 您无需关注这个过程也无需手动的去引入这些资源, 我们尽量保证 SDK 地址的安全与稳定性. 若发现 SDK 加载出现异常, 请及时联系作者.

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

菜单配置

---

### mobileDisplay

- 类型: `boolean`

- 默认值: `false`

移动端是否展示, 开启将会在移动端设备上以移动端样式展示各元素

---

### models

- 类型: `Model[]`

- 默认值: `[]`

模型选项, 类型是模型配置对象组成的数组, 默认值是空数组

前往[模型选项](/options/ModelOptions)查看详细内容

---

### parentElement

- 类型: `HtmlElement`

- 默认值: `document.body`

为组件提供一个父元素，如果未指定则默认挂载到 body 中

---

### primaryColor

- 类型: `string`

主题色

---

### sayHello

- 类型: `boolean`

- 默认值: `true`

是否在初始化阶段打印项目信息

---

### statusBar

状态条选项, 详见[状态条选项](/options/StatusBarOptions)

---

### tips

- 类型: `Tips`

- 默认值: `object`

自定义提示框样式和内容, 前往[提示框选项](/options/TipsOptions)查看详细内容

---

### transitionTime

- 类型: `number`

- 默认值: `1000`

组件入场和离开的过渡动画时长,单位 ms

---

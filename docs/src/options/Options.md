# 配置选项

---

### fixed

- 类型: `boolean`

- 默认值: `true`

组件是否使用固定定位 <Badge type="danger" text="已弃用将在下个版本移除" />

> [!WARNING]
> 注意, 关闭这个属性后舞台的定位属性将从 fixed 改为 relative, 使舞台回到文档流, 另外该属性不影响状态条定位属性, 状态条与舞台之间相互独立,样式互不干扰.

---

### importType

- 类型: `complete | cubism2 | cubism5`

- 默认值: `complete`

导入类型, 默认使用全量导入: complete

---

### libraryUrls

- 类型: `object`

自定义 Cubism SDK 外部资源地址

> [!TIP]
> 从 v0.5.0 版本开始, 不再通过模块方式使用 vite 打包 SDK , 自 v0.5.0 版本起, 将通过 script 标签的 src 属性按需去引入对应版本的 Cubism SDK , 这个过程是完全自动的, 您无需关注这个过程也无需手动的去引入这些资源, 官方将长期维护这个服务器, 保证此 SDK 地址的安全与稳定性. 若发现 SDK 加载出现异常, 请及时联系作者.

---

### libraryUrls.cubism2

- 类型: `string`

- 默认值: `oh-my-live2d提供的默认地址`

自定义 Cubism2 SDK 地址

---

### libraryUrls.cubism5

- 类型: `string`

- 默认值: `oh-my-live2d提供的默认地址`

自定义 Cubism5 SDK 地址

---

### models

- 类型: `Model[]`

- 默认值: `[]`

定制模型配置, 类型是模型配置对象组成的数组, 默认值是空数组, 请至少配置一个有效的模型配置

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

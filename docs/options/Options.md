# 配置选项

---

### fixed

- 类型: `boolean`

- 默认值: `true`

组件是否使用固定定位
> [!WARNING]
> 注意, 关闭这个属性后舞台的定位属性将从 fixed 改为 relative, 使舞台回到文档流, 另外该属性不影响状态条定位属性, 状态条与舞台之间相互独立,样式互不干扰.

---

### importType

- 类型: `complete | cubism2 | cubism5`

- 默认值: `complete`

导入类型, 默认使用全量导入: 'complete'

---

### libraryUrls

- 类型: `object`

自定义 Cubism SDK外部资源地址
> [!TIP]
> 从 v0.5.0 版本开始, 不再以模块形式通过 vite 打包构建 SDK , 因为这会造成部分模型在生产环境中展示异常, 这在Vite5中已得到证实, 为了更稳定的加载模型, 自 v0.5.0 版本后, 将通过 script 标签的 scr 属性按需去引入对应版本的 Cubism SDK , 而这个过程是完全自动的, 您无需手动的去引入这些资源, 官方将长期维护这个服务器, 保证此SDK地址的安全与稳定性. 若发现SDK加载出现异常, 请及时联系作者

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

前往[模型选项](/options/Model)查看详细内容

---

### parentElement

- 类型: `HtmlElement`

- 默认值: `document.body`

为组件提供一个父元素，如果未指定则默认挂载到 body 中

---

### sayHello

- 类型: `boolean`

- 默认值: `true`

是否在初始化阶段打印项目信息

---

### tips

- 类型: `Tips`

- 默认值: `object`

自定义提示框样式和内容, 前往[提示框选项](/options/Tips)查看详细内容

---

### transitionTime

- 类型: `number`

- 默认值: `1000`

组件入场和离开的过渡动画时长,单位ms

---

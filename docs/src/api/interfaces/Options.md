# 公共选项

## 用法:

<<< @/usages/options.ts#options

## 属性:

### dockedPosition?

> `optional` **dockedPosition**: `"left"` \| `"right"`

组件停靠位置, 当您希望组件靠右展示时这个属性会非常有用. 同时影响状态条、舞台、菜单.

默认值: left, 当值为left时舞台和状态条居左, 菜单居右(位置值相反),

#### 默认值:

```ts
left;
```

---

### ~~importType?~~

> `optional` **importType**: `ImportType`

导入类型, 这个选项的作用是从 libraryUrls 选项决定SDK加载地址, 默认使用全量导入: complete

#### 默认值:

```ts
complete;
```

#### 已弃用:

sdk已内置,该选项将在下个版本移除此选项

---

### initialStatus?

> `optional` **initialStatus**: `"sleep"` \| `"active"`

用于控制模型默认是休息状态还是活跃状态, 默认是活跃状态, 切换模型时不受此值影响

#### 默认值:

```ts
'active';
```

---

### ~~libraryUrls?~~

> `optional` **libraryUrls**: `object`

#### 已弃用:

sdk已内置,该选项已弃用,将在下个版本移除

#### ~~complete?~~

> `optional` **complete**: `string`

自定义全量SDK地址

#### ~~cubism2?~~

> `optional` **cubism2**: `string`

自定义 Cubism2 SDK 地址

#### ~~cubism5?~~

> `optional` **cubism5**: `string`

自定义 Cubism5 SDK 地址

---

### menus?

> `optional` **menus**: [`MenusOptions`](MenusOptions.md) \| (`currentModel`, `modelIndex`) => [`MenusOptions`](MenusOptions.md)

菜单配置, 详见: [菜单选项](/options/MenusOptions)

---

### mobileDisplay?

> `optional` **mobileDisplay**: `boolean`

移动端是否展示, 开启将会在移动端设备上以移动端样式展示各元素

#### 默认值:

```ts
false;
```

---

### models?

> `optional` **models**: [`ModelOptions`](ModelOptions.md)[]

模型选项, 类型是模型配置对象组成的数组, 默认值是空数组

详见: [模型选项](/options/ModelOptions)

#### 默认值:

```ts
[];
```

---

### parentElement?

> `optional` **parentElement**: `HTMLElement`

为组件提供一个父元素，如果未指定则默认挂载到 body 中

#### 默认值:

```ts
document.body;
```

---

### primaryColor?

> `optional` **primaryColor**: `string`

定义主题色, 影响所有模块

#### 默认值:

```ts
#38B0DE
```

---

### sayHello?

> `optional` **sayHello**: `boolean`

是否在初始化阶段打印项目信息

#### 默认值:

```ts
true;
```

---

### stageStyle?

> `optional` **stageStyle**: `CommonStyleType`

全局舞台样式

---

### statusBar?

> `optional` **statusBar**: [`StatusBarOptions`](StatusBarOptions.md)

状态条选项, 详见: [状态条选项](/options/StatusBarOptions)

---

### tips?

> `optional` **tips**: [`TipsOptions`](TipsOptions.md) \| (`currentModel`, `modelIndex`) => [`TipsOptions`](TipsOptions.md)

自定义提示框样式和内容, 前往[提示框选项](/options/TipsOptions)查看详细内容

---

### transitionTime?

> `optional` **transitionTime**: `number`

组件入场和离开的过渡动画时长,单位 ms

#### 默认值:

```ts
1000;
```

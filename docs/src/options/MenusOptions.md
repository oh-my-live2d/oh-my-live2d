# 菜单选项

---

### disable

- 类型: `boolean`

- 默认值: `false`

是否禁用菜单, 为true时将不会创建菜单

---

### itemStyle

- 类型: `object`

配置菜单每个子项按钮的样式

---

### items

- 类型: `Item[] | ((defaultItems: Item[]) => Item[]) | false`

配置菜单项, 您可以通过这个选项配置菜单项, 该配置选项非常的灵活, 它可以是一个由 Item 类型组成的数组, 也可以是一个函数, 当值是一个数组时, 它将覆盖默认菜单项配置. 当值是一个函数时, 您可以从函数中拿到默认菜单项

#### Item 类型描述:

- id
  - 类型: string
  - 必须: 是
  - 描述: 唯一键
- title
  - 类型: string
  - 必须: 是
  - 描述: 菜单项标题, 鼠标悬浮时提示此标题
- icon
  - 类型: string
  - 必须: 是
  - 描述: 菜单项图标, 详见: [自定义图标](/guide/icon)
- onClick
  - 类型: ([oml2d](/guide/loadModel#oml2d-实例)) => void
  - 必须: 否
  - 描述: 定义菜单项点击事件, 函数中可以通过参数获取到[oml2d对象示例](/guide/loadModel#oml2d-实例), 方便您定制更多功能

如果您不想完全覆盖默认的菜单项, 则可以传入一个函数, 从函数中可以拿到默认菜单项的配置,并返回 Item[] 供您按需添加:

```ts
  loadOml2d({
     menus: {
       items: (defaultItems) => {
          return [
            defaultItems[0],
            defaultItems[1],
           {
             id: 'github'
             title: '我的github'
             icon: 'github-fill'
             onClick: () => window.open('https://github.com/hacxy');
           }
         ]
       }
     }
  })

```

---

### mobileItemStyle

移动端下菜单子项样式

---

### mobileStyle

移动端下整体样式

---

### style

- 类型: `object`

配置菜单整体样式

---

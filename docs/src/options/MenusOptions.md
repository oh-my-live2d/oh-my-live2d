# 菜单选项

菜单选项不仅支持传入一个对象, 还支持您传入一个返回选项对象的函数, 如果它是一个函数, 则会在模型每次加载成功时被调用, 调用时会传入当前模型选项以及当前模型的索引值, 这样您就可以根据这些信息来做判断, 为不同的模型提供不同的选项.

## 概览

- 类型: `MenusOptions | ((currentModel: ModelOptions, modelIndex: number) => MenusOptions)`

### 基础用法

```ts
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  menus: {
    // 在这里配置
  }
});
```

### 高级用法

支持使用函数, 每当模型加载成功后函数就会被调用, 回调时会传入当前模型配置以及索引方便您根据这些信息来做判断, 返回类型为菜单选项

- 判断当前模型索引

::: details 点我查看代码

```ts
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  menus: (_, currentIndex) => {
    if (currentIndex === 0) {
      return {
        style: {
          left: 0
        }
      };
    } else {
      return {
        items: (defaultItem) => {
          return [defaultItem[1]];
        }
      };
    }
  }
});
```

:::

- 您还可以根据当前模型的选项值来判断, 当您选择使用这个方法时, 推荐您为每个模型命名, 之后您就可以在函数中拿到当前模型的名称, 方便后续判断:

::: details 点我查看代码

```ts
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  models: [
    {
      name: 'shizuku', // [!code highlight]
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/shizuku/shizuku.model.json'
    },
    {
      name: 'senko', // [!code highlight]
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
    },
    {
      name: 'pio', // [!code highlight]
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json'
    }
  ],
  menus: (currentModel) => {
    switch (currentModel.name) {
      case 'shizuku':
        return {
          style: {
            left: 0
          }
        };
      default:
        return {
          items: (defaultItem) => {
            return [defaultItem[1]];
          }
        };
    }
  }
});
```

:::

## 选项

<!-- --- -->

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

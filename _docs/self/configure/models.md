---
order: 2
---

# 模型配置

```ts
{
  models: {
    // 在这里进行配置
  }
}
```

现在模型配置已支持配置多个，之后可以在面板的控件中对其切换：

```ts
{
  models: [
    {
      path: '/Pio/index.json'
    },
    {
      // ...
    }
    // more...
  ];
}
```

## path

- 类型：`string`
- 默认值：

  - 全量导入时：`/pa15_3701/normal/normal.model3.json`
  - 仅依赖 Cubism2 导入时：`/pio/index.json`
  - 仅依赖 Cubism4 导入时：`/pa15_3701/normal/normal.model3.json`

- 详情：

  模型具体路径，在加载模型时会与 `source` 选项进行拼接。

## x

- 类型：`number`
- 默认值：`0`
- 详情：

  模型在舞台中 X 轴方向的位置

## y

- 类型：`number`
- 默认值：`0`
- 详情：

  模型在舞台中 Y 轴方向的位置

## scale

- 类型：`number`
- 默认值：`1`
- 详情：

  模型的缩放比例。

## stageStyle

- 类型：`StageStyle`
- 默认值：

  ```ts
    {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      width: 'auto',
      height: 'auto'
    }
  ```

- 详情：

  用于配置舞台样式。

## stageStyle.backgroundColor

- 类型：`string`
- 默认值：`rgba(0, 0, 0, 0)`
- 详情：

  舞台的背景颜色，字符串为表示颜色的 rgb、rgba、16 进制等字符串

## stageStyle.width

- 类型：`number | "auto"`
- 默认值：`"auto"`
- 详情：

  舞台的宽度，为`"auto"`时，将自动设置为模型的边界宽度。

## stageStyle.height

- 类型：`number | "auto"`
- 默认值：`"auto"`
- 详情：

  舞台的高度，为`"auto"`时，将自动设置为模型的边界高度。

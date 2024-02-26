---
order: 1
---

# 基础配置

## source

- 类型：`string`
- 默认值：`https://oml-api.tj520.top/`
- 详情：

  Live2D Model 的来源，支持本地路径或远程 url，默认已提供远程模型资源

  ::: tip
  该选项所填地址为固定地址，即不包含 model.json 文件具体路径的地址，该地址在加载时将与 models.path 选项中所填写的具体路径拼接为完整路径，例如：

  ```ts
  {
    source: 'https://oml-api.tj520.top',
    models: {
      path: '/Pio/index.json'
    }
    // ...more
  }
  ```

  在这个配置中，模型的加载路径会自动拼接为：`https://oml-api.tj520.top/Pio/index.json`
  :::

## mobileShow

- 类型：`boolean`
- 默认值：false
- 详情：

  是否在移动端显示器大小展示模型，默认 false

## sayHello

- 类型：`boolean`
- 默认值：`true`
- 详情：

  是否在装载过程的初始化阶段打印`oh-my-live2d`基本信息，默认为打印。

## transitionTime

- 类型：`number`
- 默认值：`1000`
- 详情：

  模型装载完成后出现或隐藏的过渡动画时长，单位为 ms

## models

- 类型：`Model | Model[]`
- 详情：

  自定义一个或一组模型相关属性

- 参考：
  - [配置 > models](/configure/models.md)

## tips

- 类型：`Tips | false`
- 详情：

  自定义提示框相关属性，为 `false` 时关闭提示框。

- 参考：
  - [配置 > tips](/configure/tips.md)

## mountTarget

- 类型：`HTMLElement`
- 详情：

  自定义挂载元素，默认为 `document.body`。
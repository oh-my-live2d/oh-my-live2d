# 组件加载

> **loadOml2d**(`options`): [`Oml2dProperties`](../interfaces/Oml2dProperties.md) & [`Oml2dMethods`](../interfaces/Oml2dMethods.md) & [`Oml2dEvents`](../interfaces/Oml2dEvents.md)

当您需要加载模型时, 您可以在 oh-my-live2d 中导入loadOml2d 方法, 当这个方法被调用时将根据您传入的配置选项来加载组件, 该方法返回一个实例对象, 您可以从 oml2d 这个实例对象中调用其中所有方法.

## 参数:

| 参数      | 类型                                  | 描述     |
| :-------- | :------------------------------------ | :------- |
| `options` | [`Options`](../interfaces/Options.md) | 配置选项 |

## 返回值类型:

[`Oml2dProperties`](../interfaces/Oml2dProperties.md) & [`Oml2dMethods`](../interfaces/Oml2dMethods.md) & [`Oml2dEvents`](../interfaces/Oml2dEvents.md)

返回值是一个 oml2d 实例对象, 该实例对象中包含了对组件模块操作的所有方法和事件

---
order: 3
---

# 提示框配置

```ts
{
  tips: {
    // 在这里进行配置
  }
};
```

## style

- 默认值：

  ```ts
    {
      width: 230,
      height: 100,
      offsetX: 0,
      offsetY: 0
    }
  ```

- 详情：

  用于设置提示框样式。

## style.width

- 类型：`number`
- 默认值：`230`
- 详情：

  设置提示框宽度。

## style.height

- 类型：`number`
- 默认值：`100`
- 详情：

  设置提示框高度。

## style.offsetX

- 类型：`number`
- 默认值：`0`
- 详情：

  提示框在 X 轴方向的偏移量

## style.offsetY

- 类型：`number`
- 默认值：`0`
- 详情：

  提示框在 Y 轴方向的偏移量

## idleTips

- 类型：`IdleTips`
- 详情：

  模型在闲置状态下的提示配置

## idleTips.message

- 类型：`string | string[]`
- 默认值：
  ```ts
  [
    '今天学习了吗？',
    '整理一下学习思路吧~',
    '最近在玩什么游戏呢？',
    '最近在看什么书呢？',
    '头顶凉飕飕的？',
    '了解真相，才能获得真正的自由~',
    '2023年了，新的一年，新的开始~'
  ];
  ```
- 详情：

  提示内容，为数组时，将随机展示一条

## idleTips.persistTime

- 类型：`number`
- 默认值：`5000`
- 详情：

  提示持续时长，单位为 ms

## idleTips.interval

- 类型：`number`
- 默认值：`5000`
- 详情：

  提示间隔时长，单位为 ms

## idleTips.priority

- 类型：`number`
- 默认值：`2`
- 详情：

  提示优先级，优先级大的提示将覆盖小的并优先展示

## welcomeTips

- 类型：`WelcomeTips`
- 详情：

  模型在初次加载完之后的提示配置

## welcomeTips.message

- 类型：`object`
- 默认值：
  ```ts
    {
    daybreak: '早上好！一日之计在于晨，美好的一天就要开始了。',
    morning: '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
    noon: '中午了，工作了一个上午，现在是午餐时间！',
    afternoon: '午后很容易犯困呢，来杯咖啡吧~',
    dusk: '傍晚了！工作一天幸苦啦~',
    night: '晚上好，今天过得怎么样呢？',
    lateNight: '已经这么晚了呀，早点休息吧，晚安~',
    weeHours: '这么晚还不睡吗？当心熬夜秃头哦！'
    };
  ```
- 详情：

  - daybreak：早晨 5-7 点提示信息内容
  - morning：早上 8-11 点提示信息内容
  - noon：中午 12-13 点提示信息内容
  - afternoon：下午 14-17 点提示信息内容
  - dusk：傍晚 18-19 点提示信息内容
  - night：晚上 20-21 点提示信息内容
  - lateNight：深夜 22-23 点提示信息内容
  - weeHours：凌晨 0-4 点提示信息内容

  在对应时间段提示的内容。

## welcomeTips.persistTime

- 类型：`number`
- 默认值：`5000`
- 详情：

  提示持续时长，单位为 ms

## welcomeTips.priority

- 类型：`number`
- 默认值：`3`
- 详情：

  提示优先级，优先级大的提示将覆盖小的并优先展示。

## copyTips

- 类型：`CopyTips`
- 详情：

  复制事件的提示框配置

## copyTips.message

- 类型：`string | string[]`
- 默认值：
  ```ts
  ['复制的内容如果需要转载记得注明出处哦~'];
  ```
- 详情：

  提示内容，为数组时，将随机展示一条

## copyTips.persistTime

- 类型：`number`
- 默认值：`5000`
- 详情：

  提示持续时长，单位为 ms

## copyTips.priority

- 类型：`number`
- 默认值：`9`
- 详情：

  提示优先级，优先级大的提示将覆盖小的并优先展示。

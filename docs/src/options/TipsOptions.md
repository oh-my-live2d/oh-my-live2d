# 提示框选项

配置提示框样式和消息内容

---

### copyTips

复制网站文字内容时的提示

---

### copyTips.duration

- 类型: `number`

- 默认值: `3000`

提示框持续时间, 单位 ms

---

### copyTips.message

- 类型: `string[]`

- 默认值: `['你复制了什么内容呢?记得注明出处哦~']`

播放的消息内容, 需要是一个字符串数组, 播放时会从中随机取出一条进行提示, 空数组则不播放

---

### copyTips.priority

- 类型: `number`

- 默认值: `3`

优先级, 高优先级消息将会覆盖低优先级的消息

---

### idleTips

- 类型: `object`

闲置状态下的提示

---

### idleTips.duration

- 类型: `number`

- 默认值: `5000`

提示框持续时间, 单位 ms

---

### idleTips.interval

- 类型: `number`

- 默认值: `10000`

闲置状态循环播放消息的间隔时间, 单位 ms

---

### idleTips.message

- 类型: `string[] | (() => Promise<string>)`

- 默认值: `[]`

闲置时播放的消息内容, 可以是字符串数组也可以是一个返回类型为 string 的异步函数.
当为 message 为数组时会从中随机取出一条进行提示, 当 message 为异步函数时会在定时器同步执行这个函数并使用这个函数的返回值进行提示, 空数组则不播放, 默认为空数组.
但当 wordTheDay 开启时, 将接管 message 的值

---

### idleTips.priority

- 类型: `number`

- 默认值: `2`

优先级, 高优先级消息将会覆盖低优先级的消息

---

### idleTips.wordTheDay

- 类型: `boolean | ((wordTheDayData: WordTheDayData) => string)`

- 默认值: `false`

是否开启每日一言, 默认为关闭状态, 开启后将从 <https://v1.hitokoto.cn> 发送网络请求, 并将请求到的随机信息作为闲置提示内容, 除了 boolean 类型之外, 它还支持您传入一个格式化函数, 这在您需要自定义消息格式时非常有用, 格式化函数的返回值必须是一个 string 类型, 其接收一个 wordTheDayData, 该参数包含了这次网络请求成功后的所有响应数据, 方便您处理格式化.

以下是一个示例:

```ts
{
  tips: {
    idleTips: {
      wordTheDay(wordTheDayData) {
        return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`;
      }
    }
  }
}
```

::: tip

开启后将接管闲置状态下 message 选项设定的值

:::

---

### style

- 类型: `object`

自定义提示框样式

---

### style.height

- 类型: `number`

- 默认值: `100`

提示框高度, 单位 px

---

### style.offsetX

- 类型: `number`

- 默认值: `0`

调整提示框位于舞台中的 x 轴方向偏移量

---

### style.offsetY

- 类型: `number`

- 默认值: `0`

调整提示框位于舞台中的 y 轴方向偏移量

---

### style.width

- 类型: `number`

- 默认值: `230`

提示框宽度, 单位 px

---

### welcomeTips

- 类型: `object`

模型入场后的欢迎提示

---

### welcomeTips.duration

- 类型: `number`

- 默认值: `6000`

提示框持续时间, 单位 ms

---

### welcomeTips.message

- 类型: `object`

播放的消息内容, 每个时段播放对应消息内容

---

### welcomeTips.message.afternoon

- 类型: `string`

- 默认值: `"午后很容易犯困呢，来杯咖啡吧~"`

下午 14-17 点提示信息内容

---

### welcomeTips.message.daybreak

- 类型: `string`

- 默认值: `"早上好！一日之计在于晨，美好的一天就要开始了。"`

早晨 5-7 点提示信息内容

---

### welcomeTips.message.dusk

- 类型: `string`

- 默认值: `"傍晚了！工作一天幸苦啦~"`

傍晚 18-19 点提示信息内容

---

### welcomeTips.message.lateNight

- 类型: `string`

- 默认值: `”已经这么晚了呀，早点休息吧，晚安~“`

深夜 22-23 点提示信息内容

---

### welcomeTips.message.morning

- 类型: `string`

- 默认值: `"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"`

早上 8-11 点提示信息内容

---

### welcomeTips.message.night

- 类型: `string`

- 默认值: `"晚上好，今天过得怎么样呢？"`

晚上 20-21 点提示信息内容

---

### welcomeTips.message.noon

- 类型: `string`

- 默认值: `"中午了，工作了一个上午，现在是午餐时间！"`

中午 12-13 点提示信息内容

---

### welcomeTips.message.weeHours

- 类型: `string`

- 默认值: `“这么晚还不睡吗？当心熬夜秃头哦！”`

凌晨 0-4 点提示信息内容

---

### welcomeTips.priority

- 类型: `number`

- 默认值: `3`

提示优先级

---

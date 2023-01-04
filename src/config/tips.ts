import { Tips } from '../types/index';

const TIPS: Tips = {
  idleTips: {
    message: [
      '今天学习了吗？',
      '整理一下学习思路吧~',
      '最近在玩什么游戏呢？',
      '失去人性，失去很多；失去兽性，失去一切。  ——《三体》刘慈欣',
      '最近在看什么书呢？',
      'react18的新特性，你了解了吗？',
      'vite都出到4啦，还不赶紧去学一下？',
      'vue3正式版已经发布很久了，你会用了吗？',
      '头顶凉飕飕的？',
      '了解真相，才能获得真正的自由~'
    ],
    showTime: 5000,
    interval: 5000,
    priority: 2
  },
  welcomeTips: {
    message: {
      daybreak: '早上好！一日之计在于晨，美好的一天就要开始了。',
      morning: '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
      noon: '中午了，工作了一个上午，现在是午餐时间！',
      afternoon: '午后很容易犯困呢，来杯咖啡吧~',
      dusk: '傍晚了！工作一天幸苦啦~',
      night: '晚上好，今天过得怎么样呢？',
      lateNight: '已经这么晚了呀，早点休息吧，晚安~',
      weeHours: '这么晚还不睡吗？当心熬夜秃头哦！'
    },
    showTime: 5000,
    priority: 2
  }
};

export { TIPS };

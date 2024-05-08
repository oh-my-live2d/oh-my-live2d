// @ts-nocheck

// #region Properties
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  // ...options
});
console.log(oml2d.version); // 当前组件版本号
console.log(oml2d.modelIndex); // 当前模型索引值
console.log(oml2d.options); // 当前配置选项
// #endregion Properties

// #region Methods
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  // ...options
});

// 加载下一个模型
oml2d.loadNextModel().then(() => {
  console.log('切换成功');
});

// #endregion Methods

// #region Events
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  // ...options
});

// 监听模型加载完成事件
oml2d.onLoad((status) => {
  switch (status) {
    case 'success':
      console.log('加载成功');
      return;
    case 'fail':
      console.log('加载失败');
      return;
    case 'loading':
      console.log('正在加载中');
      return;
  }
});

// #endregion Events

// @ts-nocheck

// #region onLoad
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  // ...options
});
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
// #endregion onLoad

// #region onStageSlideIn
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  // ...options
});
oml2d.onStageSlideIn(() => {
  // ...code
});
// #endregion onStageSlideIn

// #region onStageSlideOut
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  // ...options
});
oml2d.onStageSlideOut(() => {
  // ...code
});
// #endregion onStageSlideOut

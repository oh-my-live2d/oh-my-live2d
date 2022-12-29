import { IConfig } from '../types/index';

// 配置默认值
const defaultConfig: IConfig = {
  canvasElId: 'oh-my-live2d',
  wrapperElId: 'oh-my-live2d-wrapper',
  modelSource: 'https://oml-api.tj520.top/model/get?model_id=1&textures_id=2',
  size: 280,
  sayHello: true,
  transitionTime: 1000,
  x: 0,
  y: 0,
  scale: 1
};

export { defaultConfig };

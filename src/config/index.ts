import { IConfig } from '../types/index';

const DELAY = 500;   // 加载完成后延时

// 配置默认值
const defaultConfig: IConfig = {
  modelSource: 'https://oml-api.tj520.top/model/get?model_id=1&textures_id=2',
  size: 280,
  sayHello: true,
  transitionTime: 1000,
  x: 0,
  y: 0,
  scale: 1,
  backgroundColor: 'rgba(0, 0, 0, 0)'
};

export { defaultConfig, DELAY };

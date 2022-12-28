import project from '../../package.json';
import { IOML2D } from '../types/index';
// const cubism2Model = 'http://localhost:8080/model/get?model_id=1&textures_id=2';
// const cubism2Model = 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json';

// 定义私有的全局对象
const _OML2D: IOML2D = {
  importType: 'complete',
  version: project.version,
  canvasEl: {
    id: 'oh-my-live2d'
  },
  wrapperEl: {
    id: 'oh-my-live2d-wrapper'
  },
  config: {
    modelSource: 'https://oml-api.tj520.top/model/get?model_id=1&textures_id=2',
    size: 280,
    sayHello: true,
    transitionTime: 1000,
    x: 0,
    y: 0,
    scale: 1
  }
};

export { _OML2D };

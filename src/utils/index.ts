import { _OML2D } from '../config';
import { IConfig } from '../types/index';

// const resize = (size: number) => {
//   console.log(_OML2D);
//   if (!_OML2D.live2dModel || !_OML2D.application) return;
//   console.log(size);
//   setWrapperSize(size);
//   _OML2D.live2dModel.scale.set(_OML2D.config.size / 2800);
//   _OML2D.application.resize();
// };

const sayHello = (): void => {
  if (!_OML2D.config.sayHello) return;

  const args = [
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${_OML2D.version} - ${_OML2D.importType} ✨ %c %c 🎉🎉🎉 \n`,
    'background: #fff; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'background: #fff; padding:5px 0;'
  ];
  console.log(...args);
};

const defineConfig = (config: IConfig) => {
  Object.assign(_OML2D.config, config);
};

export { sayHello, defineConfig };

import { OhMyLive2D } from '../modules/setup';
import { ImportType } from '../types/index';

const handleDefaultModelSource = (importType: ImportType) => {
  let modelSource;
  switch (importType) {
    case 'complete':
      modelSource = 'https://oml-api.tj520.top/Pio/animal-02/index.json';
      break;
    case 'cubism2':
      modelSource = 'https://oml-api.tj520.top/Pio/animal-02/index.json';
      break;
    case 'cubism4':
      modelSource = 'https://oml-api.tj520.top/m950a_4302/normal/normal.model3.json';
      break;
    default:
      modelSource = 'https://oml-api.tj520.top/Pio/animal-02/index.json';
      break;
  }
  return modelSource;
};

const sayHello = function (this: OhMyLive2D) {
  if (!this.config.sayHello) return;
  const args = [
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${this.importType} ✨ %c %c 🎉🎉🎉 \n`,
    'background: #fff; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'background: #fff; padding:5px 0;'
  ];
  console.log(...args);
};
export { handleDefaultModelSource, sayHello };

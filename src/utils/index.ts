import CSS from 'csstype';
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

const sayHello = (importType: ImportType) => {
  const args = [
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${importType} ✨ %c %c 🎉🎉🎉 \n`,
    'background: #fff; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #ff66a5; padding:5px 0;',
    'background: #fff; padding:5px 0;'
  ];
  console.log(...args);
};

// 设置指定元素样式
const setElStyle = (el: HTMLElement | undefined | null, style: CSS.Properties) => {
  if (!el) return;
  Object.assign(el.style, style);
};

const delayTime = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
export { handleDefaultModelSource, sayHello, setElStyle, delayTime };

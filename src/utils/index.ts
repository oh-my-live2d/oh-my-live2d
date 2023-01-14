import CSS from 'csstype';
import { modelSources } from '../config';
import { ImportType } from '../types/index';

const handleDefaultModelSource = (importType: ImportType) => {
  let modelSource;
  switch (importType) {
    case 'complete':
      modelSource = modelSources.completeModel;
      break;
    case 'cubism2':
      modelSource = modelSources.cubism2Model;
      break;
    case 'cubism4':
      modelSource = modelSources.cubism4Model;
      break;
    default:
      modelSource = modelSources.completeModel;
      break;
  }
  return modelSource;
};

const sayHello = (importType: ImportType) => {
  const args = [
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${importType} ✨ %c %c 🎉🎉🎉 \n`,
    'background: #add7fb; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'background: #add7fb; padding:5px 0;'
  ];
  console.log(...args);
};

// 设置指定元素样式
const setElStyle = (el: HTMLElement | undefined | null, style: CSS.Properties) => {
  if (!el) return;
  Object.assign(el.style, style);
};

// 延时
const sleep = (time: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
};

export {
  handleDefaultModelSource,
  sayHello,
  setElStyle,
  sleep,
};

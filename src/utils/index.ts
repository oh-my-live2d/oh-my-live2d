import CSS from 'csstype';
import { ImportType } from '../types/index';

const handleSplicingModelSource = (source: string, path: string) => {
  let finalSource = '';
  let finalPath = '';
  if (source.endsWith('/')) finalSource = source;
  else finalSource = source + '/';

  if (!(path[0] === '/')) finalPath = path;
  else finalPath = path.slice(1);

  return finalSource + finalPath;
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

export { sayHello, setElStyle, sleep, handleSplicingModelSource };

import { merge, cloneDeep } from 'lodash-es';
import type CSS from 'csstype';

import type { Controls, DefaultModel, DefaultOptions, ElConfig, ImportType, Options } from '@/types';

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
    `\n %c đđđ %c %c â¨ oh-my-live2d v${__VERSION__} - ${importType} â¨ %c %c đđđ \n`,
    'background: #add7fb; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'background: #add7fb; padding:5px 0;'
  ];
  console.log(...args);
};

// čŽžç˝ŽćĺŽĺç´ ć ˇĺź
const setElStyle = (el: HTMLElement | undefined, style: CSS.Properties) => {
  if (!el) return;
  Object.assign(el.style, style);
};

const mergeOptions = (defaultOptions: DefaultOptions, options: Options) => {
  const backupDefaultOptions: DefaultOptions = cloneDeep(defaultOptions);
  let backupDefaultModelConfig = cloneDeep(backupDefaultOptions.models);
  const modelConfigs: [DefaultModel, ...DefaultModel[]] = [defaultOptions.models as DefaultModel];
  merge(defaultOptions, options);
  if (Array.isArray(defaultOptions.models)) {
    defaultOptions.models.map((item, i) => {
      backupDefaultModelConfig = cloneDeep(backupDefaultOptions.models);
      modelConfigs[i] = merge(backupDefaultModelConfig, item);
    });
  }
  defaultOptions.models = modelConfigs;
  return defaultOptions;
};

// ĺťśćś
const sleep = (time: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
};

const createElementByConfig = (elConfig: ElConfig) => {
  const el = document.createElement(elConfig.tagName);
  el.id = elConfig.id;
  if (elConfig.className) el.className = elConfig.className;
  if (elConfig.childrens) {
    elConfig.childrens.forEach((item) => {
      el.appendChild(createElementByConfig(item));
    });
  }
  if (elConfig.innerHtml) el.innerHTML = elConfig.innerHtml;
  return el;
};

/**
 * çćć§äťś
 * @param el 
 * @param controlsConfig 
 */
const generateControlByConfig = (el: HTMLDivElement, controlsConfig: Controls[], clickControl) => {
  el.innerHTML = controlsConfig
    .map((item) => {
      return `
    <div title="${item.title}" class="oml-control-item" data-name="${item.id}">
      <svg class="oml-icon">
        <use xlink:href="#${item.name}"></use>
      </svg>
    </div>`;
    })
    .join('');

    el.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) return;
      let target: any = e.target;
  
      while (target.parentNode !== e.currentTarget) {
        target = target.parentNode;
      }

      clickControl(target.getAttribute('data-name'))
      // switch (target.getAttribute('data-name')) {
      //   case 'SwitchModel':
      //     this.switchModel();
      //     break;
      //   case 'Setting':
      //     this.displayLevitatedSphere('text', 'ć˝ĺˇĽä¸­', 3000);
      //     break;
      //   case 'About':
      //     this.displayLevitatedSphere('text', 'ć˝ĺˇĽä¸­', 3000);
      //     break;
      // }
    });
};


const getScreenSize = () => {
  let sizeType;
  const xs = window.matchMedia('screen and (max-width: 768px)');
  const xl = window.matchMedia('screen and (min-width: 768px)');

  if (xs.matches) sizeType = 'xs';
  if (xl.matches) sizeType = 'xl';

  return sizeType;
};
export { sayHello, setElStyle, sleep, handleSplicingModelSource, mergeOptions, createElementByConfig, generateControlByConfig, getScreenSize };

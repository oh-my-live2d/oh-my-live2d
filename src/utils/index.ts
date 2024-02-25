import { menusConfig } from '@/config';
import type { CSSProperties, ElConfig } from '@/types';
import { isNumber } from 'tianjie';

// const handleSplicingModelSource = (source: string, path: string) => {
//   let finalSource = '';
//   let finalPath = '';
//   if (source.endsWith('/')) finalSource = source;
//   else finalSource = source + '/';

//   if (!(path[0] === '/')) finalPath = path;
//   else finalPath = path.slice(1);

//   return finalSource + finalPath;
// };

/**
 * 打印项目信息
 * @param importType
 */
export const printProjectInfo = () => {
  const args = [
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${`https://oml2d.com/`} Happy Hacking !! ✨ %c %c 🎉🎉🎉 \n`,
    'background: #add7fb; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'background: #add7fb; padding:5px 0;'
  ];
  console.log(...args);
};

export const formatUnit = (value: Record<string, any>) => {
  if ('width' in value && isNumber(value.width)) {
    value.width = `${value.width}px`;
  }
  if ('height' in value && isNumber(value.height)) value.height = `${value.height}px`;
};

/**
 * 根据元素设置内联样式
 * @param style
 * @param el
 */
export const setStyleByElement = (style: CSSProperties, el: HTMLElement) => {
  Object.assign(el.style, style);
};

// const mergeOptions = (defaultOptions: DefaultOptions, options: Options) => {
//   const backupDefaultOptions: DefaultOptions = cloneDeep(defaultOptions);
//   let backupDefaultModelConfig = cloneDeep(backupDefaultOptions.models);
//   const modelConfigs: [DefaultModel, ...DefaultModel[]] = [defaultOptions.models as DefaultModel];
//   merge(defaultOptions, options);
//   if (Array.isArray(defaultOptions.models)) {
//     defaultOptions.models.map((item, i) => {
//       backupDefaultModelConfig = cloneDeep(backupDefaultOptions.models);
//       modelConfigs[i] = merge(backupDefaultModelConfig, item);
//     });
//   }
//   defaultOptions.models = modelConfigs;
//   return defaultOptions;
// };

// 延时
export const sleep = (time: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
};

// const createElementByConfig = (elConfig: ElConfig) => {
//   const el = document.createElement(elConfig.tagName);
//   el.id = elConfig.id;
//   if (elConfig.className) el.className = elConfig.className;
//   if (elConfig.childrens) {
//     elConfig.childrens.forEach((item) => {
//       el.appendChild(createElementByConfig(item));
//     });
//   }
//   if (elConfig.innerHtml) el.innerHTML = elConfig.innerHtml;
//   return el;
// };

/**
 * @param el
 * @param menusConfig
 */
export const generateMenusByConfig = (el: HTMLDivElement, clickMenuItem: (any) => void) => {
  const menuItemList = menusConfig.map((item) => {
    return createElement({
      id: item.id,
      tagName: 'div',
      dataName: item.id,
      className: 'oml2d-menus-item',
      innerHtml: `
      <svg class="oml2d-icon">
        <use xlink:href="#${item.name}"></use>
      </svg>
    `
    });
  });

  el.append(...menuItemList);
  // el.innerHTML = menusConfig
  //   .map((item) => {
  //     return `
  //   <div title="${item.title}" class="oml-control-item" data-name="${item.id}">
  //     <svg class="oml2d-icon">
  //       <use xlink:href="#${item.name}"></use>
  //     </svg>
  //   </div>`;
  //   })
  //   .join('');

  el.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) return;
    let target: any = e.target;
    while (target.parentNode !== e.currentTarget) {
      target = target.parentNode;
    }
    clickMenuItem(target.getAttribute('data-name'));

    // switch (target.getAttribute('data-name')) {
    //   case 'SwitchModel':
    //     this.switchModel();
    //     break;
    //   case 'Setting':
    //     this.displayLevitatedSphere('text', '施工中', 3000);
    //     break;
    //   case 'About':
    //     this.displayLevitatedSphere('text', '施工中', 3000);
    //     break;
    // }
  });
};

export const getScreenSize = () => {
  let sizeType;
  const xs = window.matchMedia('screen and (max-width: 768px)');
  const xl = window.matchMedia('screen and (min-width: 768px)');

  if (xs.matches) sizeType = 'xs';
  if (xl.matches) sizeType = 'xl';

  return sizeType;
};

// ----------------------------
export const createElement = (elConfig: ElConfig) => {
  const el = document.createElement(elConfig.tagName);
  el.id = elConfig.id;
  if (elConfig.className) el.className = elConfig.className;
  if (elConfig.dataName) el.setAttribute('data-name', elConfig.dataName);
  if (elConfig.childrens) {
    elConfig.childrens.forEach((item) => {
      el.appendChild(createElement(item));
    });
  }
  if (elConfig.innerHtml) el.innerHTML = elConfig.innerHtml;
  if (elConfig.innerText) el.innerText = elConfig.innerText;
  return el;
};

/**
 *
 * @param fn
 * @param interval
 * @returns
 */
export const setIntervalAsync = (fn: () => void, interval: number) => {
  let timer: number | undefined = undefined;
  return {
    start: async function () {
      const runner = async () => {
        if (!timer) return;
        await fn();
        clearTimeout(timer);
        timer = setTimeout(runner, interval);
      };
      if (timer) return;
      clearTimeout(timer);
      timer = setTimeout(runner, interval);
    },
    stop: function () {
      clearTimeout(timer);
      timer = undefined;
    }
  };
};

// export { createElementByConfig, generateControlByConfig, getScreenSize, handleSplicingModelSource, setElStyle, sleep };

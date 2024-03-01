import { SDK } from '@/config';
import type { CSSProperties, ElementConfig, PIXI_LIVE2D_DISPLAY_MODULE } from '@/types';
import { ImportType } from '@/types';
import { isNumber } from 'tianjie';

/**
 * 打印项目信息
 * @param importType
 */
export const printProjectInfo = () => {
  const args = [
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${`https://oml2d.com`} Happy Hacking !! ✨ %c %c 🎉🎉🎉 \n`,
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

// 延时
export const sleep = (time: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
};

export const getScreenSize = () => {
  let sizeType;
  const xs = window.matchMedia('screen and (max-width: 768px)');
  const xl = window.matchMedia('screen and (min-width: 768px)');
  if (xs.matches) sizeType = 'xs';
  if (xl.matches) sizeType = 'xl';
  return sizeType;
};

export const createElement = (elConfig: ElementConfig) => {
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

export const loadLibraryCubism = (url: string): Promise<void> => {
  return new Promise((resolve) => {
    const scriptElement = document.createElement('script');
    document.head.append(scriptElement);
    scriptElement.src = url;
    scriptElement.addEventListener('load', () => {
      resolve();
    });
  });
};

export const loadLibrary = async (importType: ImportType, urls): Promise<PIXI_LIVE2D_DISPLAY_MODULE> => {
  switch (importType) {
    case 'cubism2':
      await loadLibraryCubism(urls[importType]);
      return await import(`pixi-live2d-display/cubism2`);
    case 'cubism5':
      await loadLibraryCubism(urls[importType]);
      return await import(`pixi-live2d-display/cubism4`);
    default:
      await Promise.all([loadLibraryCubism(urls.cubism2), loadLibraryCubism(urls.cubism4)]);
      return await import('pixi-live2d-display');
  }
};

export const loadUmdLibrary = async (importType: ImportType, urls) => {
  switch (importType) {
    case 'complete':
      await Promise.all([loadLibraryCubism(urls.cubism2), loadLibraryCubism(urls.cubism4)]);
      break;
    default:
      await loadLibraryCubism(urls[importType]);
      break;
  }
  await loadLibraryCubism(SDK.PIXI);
  await loadLibraryCubism(SDK.PIXI_LIVE2D_DISPLAY);
};

// 检查版本信息
export const checkVersion = async () => {
  const result = await fetch('https://unpkg.com/oh-my-live2d/package.json');
  const packageInfo = await result.json();
  if (packageInfo.version !== __VERSION__) {
    console.warn(
      '[oml2d] 检查到 oh-my-live2d 存在最新版:',
      `v${packageInfo.version}`,
      '请前往: https://oml2d.com 以获得最新版详细信息, 并及时更新.'
    );
  }
};

// 获取每日一言
export const getWordTheDay = async () => {
  const fetchResult = await fetch('https://v1.hitokoto.cn/');
  const data = await fetchResult.json();
  return `${data.hitokoto}    -- ${data.from}`;
};

import { isNumber } from 'tianjie';

import { SDK } from '../config/index.js';
import type { CSSProperties, ElementConfig, ImportType, LibraryUrls, PIXI_LIVE2D_DISPLAY_MODULE } from '../types/index.js';

export * from './tips.js';

/**
 * 打印项目信息
 */
export const printProjectInfo = (): void =>
  console.log(
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${`https://oml2d.com`} Happy Hacking !! ✨ %c %c 🎉🎉🎉 \n`,
    'background: #add7fb; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'background: #add7fb; padding:5px 0;'
  );

export const handleStyleSize = (value: Record<string, unknown>): void => {
  if ('width' in value && isNumber(value.width)) {
    value.width = `${value.width}px`;
  }

  if ('height' in value && isNumber(value.height)) {
    value.height = `${value.height}px`;
  }
};

/**
 * 根据元素设置内联样式
 *
 * @param style
 * @param el
 */
export const setStyleForElement = (style: CSSProperties, el: HTMLElement): void => {
  Object.assign(el.style, style);
};

// 延时
export const sleep = (time: number): Promise<void> => new Promise<void>((resolve) => setTimeout(resolve, time));

export const createElement = (elConfig: ElementConfig): HTMLElement => {
  const el = document.createElement(elConfig.tagName);

  el.id = elConfig.id;
  if (elConfig.className) {
    el.className = elConfig.className;
  }
  if (elConfig.dataName) {
    el.setAttribute('data-name', elConfig.dataName);
  }
  if (elConfig.children) {
    elConfig.children.forEach((item) => {
      el.appendChild(createElement(item));
    });
  }

  if (elConfig.innerHtml) {
    el.innerHTML = elConfig.innerHtml;
  }
  if (elConfig.innerText) {
    el.innerText = elConfig.innerText;
  }

  return el;
};

export const loadScript = (url: string): Promise<void> =>
  new Promise((resolve) => {
    const scriptElement = document.createElement('script');

    document.head.append(scriptElement);
    scriptElement.src = url;
    scriptElement.addEventListener('load', () => {
      resolve();
    });
  });

export const loadLibrary = async (importType: ImportType, urls: LibraryUrls): Promise<PIXI_LIVE2D_DISPLAY_MODULE> => {
  switch (importType) {
    case 'cubism2':
      await loadScript(urls[importType]);

      return import('pixi-live2d-display/cubism2');
    case 'cubism5':
      await loadScript(urls[importType]);

      return import('pixi-live2d-display/cubism4');
    default:
      await Promise.all([loadScript(urls.cubism2), loadScript(urls.cubism5)]);

      return import('pixi-live2d-display');
  }
};

export const loadUmdLibrary = async (importType: ImportType, urls: LibraryUrls): Promise<void> => {
  switch (importType) {
    case 'complete':
      await Promise.all([loadScript(urls.cubism2), loadScript(urls.cubism5)]);
      break;
    default:
      await loadScript(urls[importType]);
      break;
  }
  await loadScript(SDK.PIXI);
  await loadScript(SDK.PIXI_LIVE2D_DISPLAY);
};

// 检查版本信息
export const checkVersion = async (): Promise<void> => {
  const result = await fetch('https://unpkg.com/oh-my-live2d/package.json');
  const { version } = <{ version: string }>await result.json();

  if (version !== __VERSION__) {
    console.warn('[oml2d] 检查到 oh-my-live2d 存在最新版:', `v${version}`, '请前往: https://oml2d.com 以获得最新版详细信息, 并及时更新.');
  }
};

// 获取每日一言
export const getWordTheDay = async (): Promise<string> => {
  const fetchResult = await fetch('https://v1.hitokoto.cn/');
  const data = <{ hitokoto: string; from: string }>await fetchResult.json();

  return `${data.hitokoto}    -- ${data.from}`;
};

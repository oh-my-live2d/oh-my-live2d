import { isNumber, mergeDeep } from 'tianjie';

import { ELEMENT_ID, SDK_ID } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import type { CommonStyleType, WordTheDayData } from '../types/common.js';
import type {
  CSSProperties,
  DefaultOptions,
  ElementConfig,
  ImportType,
  LibraryUrls,
  Options,
  PixiLive2dDisplayModule
} from '../types/index.js';

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

export const handleCommonStyle = (value: CommonStyleType): CSSProperties => {
  const style = { ...value };

  if ('width' in value && isNumber(value.width)) {
    style.width = `${value.width}px`;
  }

  if ('height' in value && isNumber(value.height)) {
    style.height = `${value.height}px`;
  }

  return style as CSSProperties;
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

export const loadScript = (sdkInfo: { url: string; id: string }): Promise<void> => {
  destroyElement(sdkInfo?.id);
  console.log(sdkInfo);

  return new Promise((resolve) => {
    const scriptElement = document.createElement('script');

    scriptElement.id = sdkInfo?.id;
    document.head.append(scriptElement);
    scriptElement.src = sdkInfo?.url;
    scriptElement.addEventListener('load', () => {
      resolve();
    });
  });
};

export const handleSdkInfo = (urls: LibraryUrls): { [key: string]: { url: string; id: string } } => {
  const finalInfo: { [key: string]: { url: string; id: string } } = {};

  Object.keys(urls).forEach((key) => {
    finalInfo[key] = { url: urls[key] as string, id: SDK_ID[key] as string };
  });

  return finalInfo;
};

export const loadLibrary = async (importType: ImportType, urls: LibraryUrls): Promise<PixiLive2dDisplayModule> => {
  const sdkInfo = handleSdkInfo(urls);

  switch (importType) {
    case 'cubism2':
      await loadScript(sdkInfo[importType]);

      return import('pixi-live2d-display/cubism2');
    case 'cubism5':
      await loadScript(sdkInfo[importType]);

      return import('pixi-live2d-display/cubism4');
    default:
      await Promise.all([loadScript(sdkInfo['cubism2']), loadScript(sdkInfo['cubism5'])]);

      return import('pixi-live2d-display');
  }
};

// export const  loadPixi = () => {

//       // await loadScript({url: });
// }
// export const loadUmdPixi = () => {

// }

export const loadUmdLibrary = async (importType: ImportType, urls: LibraryUrls): Promise<void> => {
  const sdkInfo = handleSdkInfo(urls);

  switch (importType) {
    case 'cubism2':
      await loadScript(sdkInfo['cubism2']);
      // await loadScript(sdkInfo['pixi']);
      await loadScript(sdkInfo['pixiLive2dDisplayCubism2']);
      break;

    case 'cubism5':
      await loadScript(sdkInfo['cubism5']);
      // await loadScript(sdkInfo['pixi']);
      await loadScript(sdkInfo['pixiLive2dDisplayCubism4']);
      break;

    default:
      await Promise.all([loadScript(sdkInfo['cubism2']), loadScript(sdkInfo['cubism5'])]);
      // await loadScript(sdkInfo['pixi']);
      await loadScript(sdkInfo['pixiLive2dDisplay']);
      break;
  }

  await loadScript(sdkInfo['pixiLive2dDisplayExtra']);
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
export const getWordTheDay = async (format?: (wordTheDayData: WordTheDayData) => string): Promise<string> => {
  const fetchResult = await fetch('https://v1.hitokoto.cn/');
  const data = <{ hitokoto: string; from: string }>await fetchResult.json();

  if (format) {
    return format(data as WordTheDayData);
  }

  return `${data.hitokoto}    -- ${data.from}`;
};

// 窗口大小的媒体查询
export const mediaQuery = window.matchMedia('screen and (max-width: 768px)');

// 获取窗口大小
export const getWindowSizeType = (): WindowSizeType => {
  if (mediaQuery.matches) {
    return WindowSizeType.mobile;
  } else {
    return WindowSizeType.pc;
  }
};

// 监听窗口变化
export const onChangeWindowSize = (fn: (windowSizeType: WindowSizeType) => void): void => {
  // fn(getWindowSizeType());
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      fn(WindowSizeType.mobile);
    } else {
      fn(WindowSizeType.pc);
    }
  });
};
export const destroyElement = (id: string) => {
  const el = document.getElementById(id);

  el?.remove();
};

export const elementsDestroyer = (): void => {
  destroyElement(ELEMENT_ID.globalStyle);
  destroyElement(ELEMENT_ID.stage);
  destroyElement(ELEMENT_ID.statusBar);
  // Object.values(ELEMENT_ID).forEach((id) => {
  //   destroyElement(id);
  // });
};

// 合并配置选项
export const mergeOptions = (targetOptions: DefaultOptions, options: Options): DefaultOptions => {
  const { parentElement } = options;
  const finalOptions = mergeDeep(targetOptions, options);

  finalOptions.parentElement = parentElement || targetOptions.parentElement;

  return finalOptions;
};

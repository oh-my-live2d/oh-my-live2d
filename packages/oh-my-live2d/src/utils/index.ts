import { compare } from 'compare-versions';
import { isNumber, mergeDeep } from 'tianjie';

import { WindowSizeType } from '../constants/index.js';
import type { CommonStyleType, WordTheDayData } from '../types/common.js';
import type { CSSProperties, DefaultOptions, ElementConfig, Options } from '../types/index.js';

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

/**
 * 加载脚本
 * @param sdkInfo
 * @returns
 */
export const loadScript = (sdkInfo: { url: string; id: string }): Promise<void> => {
  return new Promise((resolve) => {
    destroyElement(sdkInfo?.id);

    const scriptElement = document.createElement('script');

    scriptElement.id = sdkInfo?.id;
    document.head.append(scriptElement);
    scriptElement.src = sdkInfo?.url;
    scriptElement.addEventListener('load', () => {
      resolve();
    });
  });
};

// 检查版本
export const checkVersion = async (): Promise<void> => {
  const result = await fetch('https://unpkg.com/oh-my-live2d@latest/package.json');
  const { version } = <{ version: string }>await result.json();

  if (compare(version, __VERSION__, '>')) {
    console.warn('[oml2d] 检查到 oh-my-live2d 存在最新版:', `v${version}`, '请前往: https://oml2d.com 以获得最新版详细信息, 并及时更新.');
  }
};

// 获取每日一言
export const getWordTheDay = async (format?: (wordTheDayData: WordTheDayData) => string): Promise<string> => {
  const fetchResult = await fetch('https://v1.hitokoto.cn');
  const data = <WordTheDayData>await fetchResult.json();

  if (format) {
    return format(data as unknown as WordTheDayData);
  }

  return `${data.hitokoto}`;
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

export const destroyElement = (id: string): void => {
  const el = document.getElementById(id);

  el?.remove();
};

// 合并配置选项
export const mergeOptions = (defaultOptions: DefaultOptions, options: Options): DefaultOptions => {
  const finalOptions = mergeDeep(defaultOptions, options);

  finalOptions.parentElement = options.parentElement || document.body;

  return finalOptions as DefaultOptions;
};

export const handleDockedPosition = (position: 'left' | 'right', value: number = 0, reverse: boolean = false): CSSProperties => {
  switch (position) {
    case 'left':
      if (!reverse) {
        return { left: `${value}px`, right: 'auto' };
      } else {
        return { left: 'auto', right: `${value}px` };
      }
    case 'right':
      if (!reverse) {
        return { left: 'auto', right: `${value}px` };
      } else {
        return { left: `${value}px`, right: 'auto' };
      }
  }
};

// 随机获取数组下标
export const getRandomIndex = (length: number, currentIndex: number): number => {
  let randomIndex = currentIndex;

  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * length);
  }

  return randomIndex;
};

import { mergeDeep } from 'tianjie';

import { CONFIG, globalStyle } from '../config/index.js';
import type { CSSProperties, Options } from '../types/index.js';
import { createElement, setStyleForElement } from '../utils/index.js';

const enum Status {
  display = 1,
  hidden = 0
}

export class Stage {
  element: HTMLElement;
  canvasElement: HTMLCanvasElement;
  wrapperElement: HTMLElement;
  private style: CSSProperties = {};
  private canvasStyle: CSSProperties = {};
  private status: Status = Status.hidden;
  private slideChangeEnd?: (status: Status) => void;
  constructor(
    private targetElement: HTMLElement,
    private options: Options
  ) {
    this.element = createElement({ id: CONFIG.stageId, tagName: 'div' });
    this.canvasElement = createElement({ id: CONFIG.canvasId, tagName: 'canvas' }) as HTMLCanvasElement;
    this.wrapperElement = createElement({ id: 'oml2dWrapper', tagName: 'div' });
    this.create();
    this.initStyle();
  }

  create(): void {
    const oml2dFragment = document.createDocumentFragment();

    // this.wrapperElement.append(oml2dFragment);
    this.element.append(this.canvasElement);
    oml2dFragment.append(this.element);

    // this.wrapperElement.append(oml2dFragment);
    this.targetElement.append(oml2dFragment);

    if (this.targetElement !== document.body) {
      document.body.append(this.targetElement);
    }

    // 刷新前卸载元素
    window.onbeforeunload = (): void => {
      this.targetElement.removeChild(this.element);
    };
  }

  initStyle(): void {
    this.setStyle({
      width: '0px',
      height: '0px',
      // position: 'relative'
      position: this.options.fixed ? 'fixed' : 'relative',
      left: 0,
      bottom: 0,
      zIndex: '9997',
      transform: 'translateY(130%)'
    });
    // this.wrapperElement.style.position = this.options.fixed ? 'fixed' : 'relative';
    // this.wrapperElement.style.overflow = 'hidden';
    // this.wrapperElement.style.left = '0';
    // this.wrapperElement.style.bottom = '0';
    // this.wrapperElement.style.zIndex = '9999';

    const styleSheet = createElement({ tagName: 'style', id: 'oml2dStyle', innerHtml: globalStyle }); // 创建全局样式表

    document.head.append(styleSheet);
  }

  setStyle(style: CSSProperties): void {
    this.style = mergeDeep(this.style, style);
    setStyleForElement(this.style, this.element);
    this.setCanvasStyle({ width: '100%', height: '100%', zIndex: '9999', position: 'relative' });
  }

  setCanvasStyle(style: CSSProperties): void {
    this.canvasStyle = mergeDeep(this.canvasStyle, style);
    setStyleForElement(this.canvasStyle, this.canvasElement);
  }

  /**
   * 滑入
   */
  slideIn(transitionTime: number): Promise<void> {
    this.setStyle({
      animationName: 'oml2d-stage-slide-in',
      animationDuration: `${transitionTime}ms`,
      animationFillMode: 'forwards'
    });
    this.status = Status.display;

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.slideChangeEnd?.(this.status);
        resolve();
      }, transitionTime);
    });
  }

  /**
   * 滑出
   */
  slideOut(transitionTime: number): Promise<void> {
    this.setStyle({
      animationName: 'oml2d-stage-slide-out',
      animationDuration: `${transitionTime}ms`,
      animationFillMode: 'forwards'
    });
    this.status = Status.hidden;

    return new Promise<void>((resolve) =>
      setTimeout(() => {
        this.slideChangeEnd?.(this.status);
        resolve();
      }, transitionTime)
    );
  }

  /**
   * 场景的滑入滑出动画执行结束事件
   * @param fn
   */
  onSlideChangeEnd(fn: (status: Status) => void): void {
    this.slideChangeEnd = fn;
  }
}

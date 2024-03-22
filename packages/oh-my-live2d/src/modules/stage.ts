import { mergeDeep } from 'tianjie';

import { ELEMENT_ID } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import { CommonStyleType } from '../types/common.js';
import type { CSSProperties, DefaultOptions } from '../types/index.js';
import { createElement, getWindowSizeType, handleCommonStyle, setStyleForElement } from '../utils/index.js';

export class Stage {
  element?: HTMLElement;
  canvasElement?: HTMLCanvasElement;

  private style: CSSProperties = {};
  private canvasStyle: CSSProperties = {};
  private slideChangeEnd?: (status: boolean) => void;
  private currentModelIndex = 0;
  constructor(private options: DefaultOptions) {}

  create(): void {
    this.element = createElement({ id: ELEMENT_ID.stage, tagName: 'div' });
    this.canvasElement = createElement({ id: ELEMENT_ID.canvas, tagName: 'canvas' }) as HTMLCanvasElement;
  }

  set modelIndex(index: number) {
    this.currentModelIndex = index;
  }

  get modelIndex(): number {
    return this.currentModelIndex;
  }

  mount(): void {
    if (this.element && this.canvasElement) {
      this.element.append(this.canvasElement);
      this.options.parentElement.append(this.element);
    }
  }

  initializeStyle(): void {
    this.setStyle({
      width: '0px',
      height: '0px',
      position: 'fixed',
      left: 0,
      bottom: 0,
      zIndex: '9997',
      transform: 'translateY(130%)'
    });
    this.reloadStyle();
  }

  reloadStyle(modelSize: CommonStyleType = {}): void {
    switch (getWindowSizeType()) {
      case WindowSizeType.mobile:
        modelSize = mergeDeep(modelSize, this.options.models?.[this.modelIndex]?.mobileStageStyle || {});
        this.setStyle(handleCommonStyle(modelSize));
        break;
      case WindowSizeType.pc:
        modelSize = mergeDeep(modelSize, this.options.models?.[this.modelIndex]?.stageStyle || {});
        this.setStyle(handleCommonStyle(modelSize));
        break;
    }
  }

  unMount(): void {
    this.element?.remove();
  }

  reMount(): void {
    this.unMount();
    this.mount();
  }

  setStyle(style: CSSProperties, callback?: () => void): void {
    if (this.element) {
      this.style = mergeDeep(this.style, style);
      setStyleForElement(this.style, this.element);
      this.setCanvasStyle({ width: '100%', height: '100%', zIndex: '9998', position: 'relative' });
      callback?.();
    }
  }

  setCanvasStyle(style: CSSProperties): void {
    if (this.canvasElement) {
      this.canvasStyle = mergeDeep(this.canvasStyle, style);
      setStyleForElement(this.canvasStyle, this.canvasElement);
    }
  }

  get transitionTime(): number {
    return this.options.transitionTime;
  }

  /**
   * 滑入
   */
  slideIn(): Promise<void> {
    this.setStyle({
      animationName: 'oml2d-stage-slide-in',
      animationDuration: `${this.transitionTime}ms`,
      animationFillMode: 'forwards'
    });

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.slideChangeEnd?.(true);
        resolve();
      }, this.transitionTime);
    });
  }

  /**
   * 滑出
   */
  slideOut(): Promise<void> {
    this.setStyle({
      animationName: 'oml2d-stage-slide-out',
      animationDuration: `${this.transitionTime}ms`,
      animationFillMode: 'forwards'
    });

    return new Promise<void>((resolve) =>
      setTimeout(() => {
        this.slideChangeEnd?.(false);
        resolve();
      }, this.transitionTime)
    );
  }

  /**
   * 场景的滑入滑出动画执行结束事件
   * @param fn
   */
  onChangeSlideEnd(fn: (status: boolean) => void): void {
    this.slideChangeEnd = fn;
  }
}

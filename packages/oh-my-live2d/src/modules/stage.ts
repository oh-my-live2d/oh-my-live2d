import { mergeDeep } from 'tianjie';

import type { Events } from './events.js';
import { ELEMENT_ID, STAGE_DEFAULT_STYLE } from '../config/index.js';
import { WindowSizeType } from '../constants/index.js';
import { CommonStyleType } from '../types/common.js';
import type { CSSProperties, DefaultOptions } from '../types/index.js';
import { createElement, getWindowSizeType, handleCommonStyle, handleDockedPosition, setStyleForElement } from '../utils/index.js';
import { setStatus } from '../utils/store.js';

export class Stage {
  element?: HTMLElement;
  canvasElement?: HTMLCanvasElement;
  status = false;
  private style: CSSProperties = {};
  private canvasStyle: CSSProperties = {};
  private currentModelIndex = 0;
  constructor(
    private options: DefaultOptions,
    private events: Events
  ) {}

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

  reloadStyle(style: CommonStyleType = {}): void {
    style = mergeDeep(style, this.options.stageStyle);
    style = mergeDeep(style, handleDockedPosition(this.options.dockedPosition));
    switch (getWindowSizeType()) {
      case WindowSizeType.mobile:
        style = mergeDeep(style, this.options.models?.[this.modelIndex]?.mobileStageStyle || {});
        break;
      case WindowSizeType.pc:
        style = mergeDeep(style, this.options.models?.[this.modelIndex]?.stageStyle || {});
        break;
    }

    this.setStyle(handleCommonStyle(mergeDeep(STAGE_DEFAULT_STYLE, style)));
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
      this.style = {};
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
        this.status = true;
        this.events.emit('stageSlideIn');
        setStatus('active');
        resolve();
      }, this.transitionTime);
    });
  }

  /**
   * 滑出
   */
  slideOut(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.status) {
        resolve();
      } else {
        this.setStyle({
          animationName: 'oml2d-stage-slide-out',
          animationDuration: `${this.transitionTime}ms`,
          animationFillMode: 'forwards'
        });

        setTimeout(() => {
          this.status = false;
          this.events.emit('stageSlideOut');
          setStatus('sleep');
          resolve();
        }, this.transitionTime);
      }
    });
  }
}

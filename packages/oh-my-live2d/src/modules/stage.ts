import { mergeDeep } from 'tianjie';

import { ELEMENT_ID } from '../config/index.js';
import type { CSSProperties, DefaultOptions } from '../types/index.js';
import { createElement, setStyleForElement } from '../utils/index.js';

const enum Status {
  display = 1,
  hidden = 0
}

export class Stage {
  element: HTMLElement;
  canvasElement: HTMLCanvasElement;
  // wrapperElement: HTMLElement;
  status: Status = Status.hidden;
  options: DefaultOptions;
  private style: CSSProperties = {};
  private canvasStyle: CSSProperties = {};
  private slideChangeEnd?: (status: Status) => void;
  // private stageFragment?: DocumentFragment;
  constructor(options: DefaultOptions) {
    this.options = options;
    this.element = createElement({ id: ELEMENT_ID.stage, tagName: 'div' });
    this.canvasElement = createElement({ id: ELEMENT_ID.canvas, tagName: 'canvas' }) as HTMLCanvasElement;
    this.element.append(this.canvasElement);
    this.initialize();
  }

  // 销毁
  destroy(): void {
    this.element.remove();
  }

  // create(): void {
  //   const stageFragment = document.createDocumentFragment();

  //   this.element.append(this.canvasElement);
  //   stageFragment.append(this.element);

  //   this.options.parentElement.append(stageFragment);

  //   if (this.options.parentElement !== document.body) {
  //     document.body.append(this.options.parentElement);
  //   }

  //   // // 刷新前卸载元素
  //   // window.onbeforeunload = (): void => {
  //   //   this.targetElement.removeChild(this.element);
  //   // };
  // }

  initialize(): void {
    // if (this.options.parentElement !== document.body) {
    //   document.body.append(this.options.parentElement);
    // }

    this.setStyle({
      width: '0px',
      height: '0px',
      position: 'fixed',
      left: 0,
      bottom: 0,
      zIndex: '9997',
      transform: 'translateY(130%)'
    });
    this.updateParentElement();
  }

  updateParentElement(): void {
    this.element.remove();
    this.options.parentElement.append(this.element);
  }
  // initStyle(): void {
  //   this.setStyle({
  //     width: '0px',
  //     height: '0px',
  //     position: 'fixed',
  //     left: 0,
  //     bottom: 0,
  //     zIndex: '9997',
  //     transform: 'translateY(130%)'
  //   });
  // }

  setStyle(style: CSSProperties, callback?: () => void): void {
    this.style = mergeDeep(this.style, style);
    setStyleForElement(this.style, this.element);
    this.setCanvasStyle({ width: '100%', height: '100%', zIndex: '9999', position: 'relative' });
    callback?.();
  }

  setCanvasStyle(style: CSSProperties): void {
    this.canvasStyle = mergeDeep(this.canvasStyle, style);
    setStyleForElement(this.canvasStyle, this.canvasElement);
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
    this.status = Status.display;

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.slideChangeEnd?.(this.status);
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
    this.status = Status.hidden;

    return new Promise<void>((resolve) =>
      setTimeout(() => {
        this.slideChangeEnd?.(this.status);
        resolve();
      }, this.transitionTime)
    );
  }

  /**
   * 场景的滑入滑出动画执行结束事件
   * @param fn
   */
  onChangeSlideEnd(fn: (status: Status) => void): void {
    this.slideChangeEnd = fn;
  }

  // applyOptions(): void {

  // }

  // applyMobileOptions() {}
}

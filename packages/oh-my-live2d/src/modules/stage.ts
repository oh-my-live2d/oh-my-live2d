import { Style } from './style.js';
import { CANVAS_ID, STAGE_ID } from '../constants/index.js';
import emitter from '../emitter/index.js';
import { store } from '../store/index.js';
import { stageSlideIn, stageSlideOut } from '../styles/keyframes.js';
import { createElement } from '../utils/element.js';

export class Stage {
  element: HTMLElement;
  canvas: HTMLCanvasElement;
  style: Style;

  constructor() {
    this.element = this.createStageElement();
    this.canvas = this.createStageCanvas();

    this.style = new Style(this.element, {
      width: '0px',
      height: '0px',
      position: 'fixed',
      right: 'auto',
      bottom: 0,
      zIndex: '9997',
      transform: 'translateY(130%)'
    });

    // setTimeout(() => {
    //   this.style.update({
    //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
    //     width: 100,
    //     height: 100,
    //     animationName: stageSlideIn,
    //     animationDuration: `1000ms`,
    //     animationFillMode: 'forwards'
    //   });
    // }, 1000);
  }
  get options() {
    return store.get().options;
  }

  createStageElement() {
    const el = createElement({
      id: STAGE_ID,
      tagName: 'div'
    });

    document.body.appendChild(el);

    return el;
  }

  createStageCanvas() {
    const canvas = createElement({
      tagName: 'canvas',
      id: CANVAS_ID,
      style: {
        width: '100%',
        height: '100%',
        zIndex: '9998',
        position: 'relative'
      }
    });

    this.element.appendChild(canvas);

    return canvas as HTMLCanvasElement;
  }

  slideIn(): Promise<void> {
    this.style.update({
      animationName: stageSlideIn,
      animationDuration: `${this.options.transitionTime}ms`,
      animationFillMode: 'forwards'
    });

    return new Promise((resolve) => {
      emitter.emit('stageSlideInStart');
      setTimeout(() => {
        emitter.emit('stageSlideOutEnd');
        resolve();
      }, this.options.transitionTime);
    });
  }

  slideOut(): Promise<void> {
    this.style.update({
      animationName: stageSlideOut,
      animationDuration: `${this.options.transitionTime}ms`,
      animationFillMode: 'forwards',
      transform: 'translateY(130%)'
    });

    return new Promise((resolve) => {
      emitter.emit('stageSlideOutStart');
      setTimeout(() => {
        emitter.emit('stageSlideOutEnd');
        resolve();
      }, this.options.transitionTime);
    });
  }
}

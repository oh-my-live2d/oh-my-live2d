import { StatusBar } from './status-bar.js';
import { Style } from './style.js';
import { Tips } from './tips.js';
import { CANVAS_ID, STAGE_ID } from '../constants/index.js';
import emitter from '../emitter/index.js';
import { store } from '../store/index.js';
import { stageSlideIn, stageSlideOut } from '../styles/keyframes.js';
import { createElement } from '../utils/element.js';

export class Stage {
  element: HTMLElement;
  canvasElement: HTMLCanvasElement;
  style: Style;
  canvasStyle: Style;
  constructor() {
    this.element = this.createStageElement();
    this.canvasElement = this.createStageCanvas();
    this.style = new Style(this.element);
    this.canvasStyle = new Style(this.canvasElement);

    this.initialize();
  }

  get options() {
    return store.get().options;
  }

  initialize() {
    this.registerListeners();
    this.mountController();
  }

  mountController() {
    const statusBar = new StatusBar();

    const tips = new Tips();

    this.element.append(statusBar.element, tips.element);
  }

  createStageElement() {
    const el = createElement({
      id: STAGE_ID,
      tagName: 'div',
      style: {
        width: '0px',
        height: '0px',
        position: 'fixed',
        right: 'auto',
        bottom: 0,
        zIndex: '9997'
      }
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
        position: 'relative',
        transform: 'translateY(130%)'
      }
    });

    this.element.appendChild(canvas);

    return canvas as HTMLCanvasElement;
  }

  slideIn(): Promise<void> {
    return new Promise((resolve) => {
      emitter.emit('stageSlideInStart');

      this.canvasStyle.update({
        animationName: stageSlideIn,
        animationDuration: `${this.options.transitionTime}ms`,
        animationFillMode: 'forwards'
      });

      setTimeout(() => {
        emitter.emit('stageSlideOutEnd');
        resolve();
      }, this.options.transitionTime);
    });
  }

  slideOut(): Promise<void> {
    return new Promise((resolve) => {
      emitter.emit('stageSlideOutStart');

      this.canvasStyle.update({
        animationName: stageSlideOut,
        animationDuration: `${this.options.transitionTime}ms`,
        animationFillMode: 'forwards',
        transform: 'translateY(130%)'
      });

      setTimeout(() => {
        emitter.emit('stageSlideOutEnd');
        resolve();
      }, this.options.transitionTime);
    });
  }

  registerListeners() {
    store.on('model/setModelSize', (state) => {
      this.style.update({
        width: state.modelWidth,
        height: state.modelHeight
      });
    });
  }
}

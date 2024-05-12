import { Style } from './style.js';
import { stageSlideIn } from '../styles/keyframes.js';
import { createElement } from '../utils/element.js';

export class Stage {
  element: HTMLElement;
  style: Style;
  constructor() {
    this.element = this.create();
    this.style = new Style(this.element, {
      width: '0px',
      height: '0px',
      position: 'fixed',
      right: 'auto',
      bottom: 0,
      zIndex: '9997',
      transform: 'translateY(130%)'
    });

    setTimeout(() => {
      this.style.update({
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: 100,
        height: 100,
        animationName: stageSlideIn,
        animationDuration: `1000ms`,
        animationFillMode: 'forwards'
      });
    }, 1000);
  }

  create() {
    const el = createElement({
      id: 'oml2d-stage',
      tagName: 'div'
    });

    document.body.appendChild(el);

    return el;
  }
}

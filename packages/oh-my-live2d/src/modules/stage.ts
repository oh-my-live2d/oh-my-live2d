import { stageStyle } from '../styles/stage.js';
import { createElement } from '../utils/element.js';
import { setClassName } from '../utils/style.js';

export class Stage {
  element: HTMLElement;
  constructor() {
    this.element = this.create();
  }

  create() {
    const el = createElement({
      id: 'oml2d-stage',
      tagName: 'div',
      className: stageStyle({
        width: 200,
        height: 200,
        backgroundColor: '#000'
      })
    });

    document.body.appendChild(el);

    setTimeout(() => {
      setClassName(
        el,
        stageStyle({
          width: 100
        })
      );
    }, 1000);

    return el;
  }
}

import { config } from '@/config';
import { globalStyle } from '@/config/style';
import { CSSProperties } from '@/types';
import { createElement, setStyleByElement } from '@/utils';
import { mergeDeep } from 'tianjie';

enum Status {
  Display = 1,
  Hidden = 0
}

export class Stage {
  element: HTMLElement;
  canvasElement: HTMLCanvasElement;

  private style: CSSProperties = {};
  private canvasStyle: CSSProperties = {};
  private targetStyle: CSSProperties = {};
  private status: Status = Status.Hidden;
  private slideChangeEnd?: (status: Status) => void;
  constructor(private targetElement: HTMLElement) {
    this.element = createElement({ id: config.stageId, tagName: 'div' });
    this.canvasElement = createElement({ id: config.canvasId, tagName: 'canvas' }) as HTMLCanvasElement;
    this.create();
    this.initStyle();
  }

  create() {
    const oml2dFragment = document.createDocumentFragment();
    this.element.append(this.canvasElement);

    oml2dFragment.append(this.element);
    this.targetElement.append(oml2dFragment);

    // 刷新前卸载元素
    window.onbeforeunload = () => {
      this.targetElement.removeChild(this.element);
      // document.body.removeChild(this.elementList.levitatedBtnEl);
    };
  }

  initStyle() {
    this.setStyle({ width: '0px', height: '0px', position: 'fixed', left: 0, bottom: 0, zIndex: '9997', transform: 'translateY(130%)' });
    this.setTargeStyle({ position: 'relative' });

    const styleSheet = createElement({ tagName: 'style', id: 'oml2dStyle', innerHtml: globalStyle }); // 创建全局样式表
    document.head.append(styleSheet);
  }

  setStyle(style: CSSProperties) {
    this.style = mergeDeep(this.style, style);
    setStyleByElement(this.style, this.element);
    this.setCanvasStyle({ width: '100%', height: '100%', zIndex: '9999', position: 'relative' });
  }

  setCanvasStyle(style: CSSProperties) {
    this.canvasStyle = mergeDeep(this.canvasStyle, style);
    setStyleByElement(this.canvasStyle, this.canvasElement);
  }

  setTargeStyle(style: CSSProperties) {
    if (this.targetElement !== document.body) {
      this.targetStyle = mergeDeep(this.targetStyle, style);
      setStyleByElement(this.targetStyle, this.targetElement);
    }
  }
  /**
   * 滑入
   */
  slideIn(transitionTime: number) {
    this.setStyle({
      animationName: 'oml2d-stage-slide-in',
      animationDuration: `${transitionTime}ms`,
      animationFillMode: 'forwards'
    });
    this.status = Status.Display;
    return new Promise<void>((resolve) => {
      setTimeout(async () => {
        this.slideChangeEnd?.(this.status);
        resolve();
      }, transitionTime);
    });
  }

  /**
   * 滑出
   */
  slideOut(transitionTime: number) {
    this.setStyle({
      animationName: 'oml2d-stage-slide-out',
      animationDuration: `${transitionTime}ms`,
      animationFillMode: 'forwards'
    });
    this.status = Status.Hidden;
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
  onSlideChangeEnd(fn: (status: Status) => void) {
    // fn(this.status);
    this.slideChangeEnd = fn;
  }
}

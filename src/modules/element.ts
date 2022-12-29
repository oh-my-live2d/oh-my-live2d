import { OhMyLive2D } from './setup';

// 加入包装器元素
const appendWrapperEl = function (this: OhMyLive2D) {
  const wrapperEl = document.createElement('div');
  wrapperEl.id = this.config.wrapperElId!;
  document.body.appendChild(wrapperEl);
  return wrapperEl;
};

// 创建包装器元素内容
const createWrapperElContent = function (this: OhMyLive2D) {
  const canvasNode = `<canvas id=${this.config.canvasElId}></canvas>`;
  // const iconNode = (className: string) => {
  //   return `
  //     <svg class="icon" aria-hidden="true">
  //       <use xlink:href="#${className}"></use>
  //     </svg>
  //   `;
  // };
  if (this.wrapperEl) {
    this.wrapperEl.innerHTML = `
      ${canvasNode}
    `;
  }

  const canvasEl = document.getElementById(this.config.canvasElId!) as HTMLCanvasElement;
  return { canvasEl };
};

export { appendWrapperEl, createWrapperElContent };

import { OhMyLive2D } from './setup';

// 加入包装器元素
const appendWrapperEl = function (this: OhMyLive2D) {
  const wrapperEl = document.createElement('div');
  wrapperEl.id = 'oml-wrapper';
  document.body.appendChild(wrapperEl);
  return wrapperEl;
};

// 创建包装器元素内容
const createWrapperElContent = function (this: OhMyLive2D) {
  // const iconNode = (className: string) => {
  //   return `
  //     <svg class="icon" aria-hidden="true">
  //       <use xlink:href="#${className}"></use>
  //     </svg>
  //   `;
  // };
  this.wrapperEl.innerHTML = `
    <canvas id="oml-canvas"></canvas>
  `;

  const canvasEl = document.getElementById('oml-canvas') as HTMLCanvasElement;
  return { canvasEl };
};

export { appendWrapperEl, createWrapperElContent };

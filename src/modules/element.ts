// 加入包装器元素
const appendWrapperEl = function () {
  const wrapperEl = document.createElement('div');
  wrapperEl.id = 'oml-wrapper';
  const fragment = new DocumentFragment();
  fragment.appendChild(wrapperEl);

  // const iconNode = (className: string) => {
  //   return `
  //     <svg class="icon" aria-hidden="true">
  //       <use xlink:href="#${className}"></use>
  //     </svg>
  //   `;
  // };

  wrapperEl.innerHTML = `
    <canvas id="oml-canvas" style="background-color: rgba(0, 0, 0, 0);"></canvas>
  `;

  const canvasEl = fragment.getElementById('oml-canvas') as HTMLCanvasElement;

  document.body.appendChild(fragment);

  return { wrapperEl, canvasEl };
};

export { appendWrapperEl };

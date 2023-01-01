// 加入包装器元素
const appendWrapperEl = function () {
  const wrapperEl = document.createElement('div');
  const suspendBtnEl = document.createElement('div');
  suspendBtnEl.id = 'oml-suspend-btn';
  wrapperEl.id = 'oml-wrapper';

  const fragment = new DocumentFragment();
  fragment.appendChild(wrapperEl);
  fragment.appendChild(suspendBtnEl);

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

  suspendBtnEl.innerHTML = `
    <div style="margin-bottom:3px;">加载中</div>
    <svg class="icon oml-loading" aria-hidden="true" style="stroke: #fff;">
      <use xlink:href="#icon-loading"></use>
    </svg>
  `;

  const canvasEl = fragment.getElementById('oml-canvas') as HTMLCanvasElement;
  document.body.appendChild(fragment);

  return { wrapperEl, canvasEl, suspendBtnEl };
};

export { appendWrapperEl };

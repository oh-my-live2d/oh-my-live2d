let wrapperEl: HTMLDivElement; // 包装器元素
let canvasEl: HTMLCanvasElement; // 画布元素

// 加入包装器元素
const appendWrapperEl = (wrapperElId: string) => {
  wrapperEl = document.createElement('div');
  wrapperEl.id = wrapperElId;
  document.body.appendChild(wrapperEl);
  return wrapperEl;
};

// 创建包装器元素内容
const createWrapperElContent = (canvasElId: string) => {
  const canvasNode = `<canvas id=${canvasElId}></canvas>`;
  // const iconNode = (className: string) => {
  //   return `
  //     <svg class="icon" aria-hidden="true">
  //       <use xlink:href="#${className}"></use>
  //     </svg>
  //   `;
  // };

  wrapperEl.innerHTML = `
    ${canvasNode}
  `;

  canvasEl = document.getElementById(canvasElId) as HTMLCanvasElement;
  return { canvasEl };
};

export { appendWrapperEl, createWrapperElContent };

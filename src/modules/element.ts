import { getTipsConfig } from '../utils/index';
import { OhMyLive2D } from './setup';

// 加入包装器元素
const appendWrapperEl = function () {
  const wrapperEl = document.createElement('div');
  const suspendBtnEl = document.createElement('div');
  suspendBtnEl.id = 'oml-suspend-btn';
  wrapperEl.id = 'oml-wrapper';
  const fragment = new DocumentFragment();
  fragment.appendChild(wrapperEl);
  fragment.appendChild(suspendBtnEl);

  wrapperEl.innerHTML = `
    <div id="oml-tooltip" class="oml-shake-tooltip-animation"></div>
    <canvas id="oml-canvas" style="background-color: rgba(0, 0, 0, 0);"></canvas>
  `;

  suspendBtnEl.innerHTML = `
    <div style="margin-bottom:3px;">加载中</div>
    <svg class="icon oml-loading" aria-hidden="true" style="stroke: #fff;">
      <use xlink:href="#icon-loading"></use>
    </svg>
  `;

  const canvasEl = fragment.getElementById('oml-canvas') as HTMLCanvasElement;
  const tooltipEl = fragment.getElementById('oml-tooltip') as HTMLDivElement;

  document.body.appendChild(fragment);
  return { wrapperEl, canvasEl, suspendBtnEl, tooltipEl };
};

const registerEvent = function (this: OhMyLive2D) {
  // 刷新前卸载元素
  window.onbeforeunload = () => {
    this.wrapperEl && document.body.removeChild(this.wrapperEl);
  };

  window.document.addEventListener('copy', () => {
    const { message, showTime, priority } = getTipsConfig('copy');
    this.showTipsFrameMessage(message, showTime, priority);
  });
  // this.wrapperEl?.addEventListener('click', () => {
  //   this.showTipsFrameMessage('hello', 8000, 4);
  // });
};
export { appendWrapperEl, registerEvent };

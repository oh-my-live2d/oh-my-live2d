import { getTipsConfig } from '../utils/index';
import { LoadOhMyLive2D } from './setup';

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

const handleMediaSearchEvent = (loadOhMyLive2DInstance: LoadOhMyLive2D) => {
  const xs = window.matchMedia('screen and (max-width: 768px)');
  const md = window.matchMedia('screen and (min-width: 768px) and (max-width: 1200px)');
  const xl = window.matchMedia('screen and (min-width: 1200px)');

  if (xs.matches) loadOhMyLive2DInstance.screenSize = 'xs';
  if (md.matches) loadOhMyLive2DInstance.screenSize = 'md';
  if (xl.matches) loadOhMyLive2DInstance.screenSize = 'xl';

  xs.addEventListener('change', (e) => {
    if (e.matches) loadOhMyLive2DInstance.screenSize = 'xs';
    loadOhMyLive2DInstance.updateStage();
  });

  md.addEventListener('change', (e) => {
    if (e.matches) loadOhMyLive2DInstance.screenSize = 'md';
    loadOhMyLive2DInstance.updateStage();
  });

  xl.addEventListener('change', (e) => {
    if (e.matches) loadOhMyLive2DInstance.screenSize = 'xl';
    loadOhMyLive2DInstance.updateStage();
  });
};

const registerEvent = function (this: LoadOhMyLive2D) {
  // 处理媒体查询
  handleMediaSearchEvent(this);

  // 刷新前卸载元素
  window.onbeforeunload = () => {
    this.wrapperEl && document.body.removeChild(this.wrapperEl);
  };

  window.document.addEventListener('copy', () => {
    const { message, persistTime, priority } = getTipsConfig('copy');
    this.showTipsFrameMessage(message, persistTime, priority);
  });

  // this.wrapperEl?.addEventListener('click', () => {
  //   this.showTipsFrameMessage('hello', 8000, 4);
  // });
};
export { appendWrapperEl, registerEvent };

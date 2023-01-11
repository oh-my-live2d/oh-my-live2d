import { getTipsConfig } from '../utils/index';
import { LoadOhMyLive2D } from './setup';

const createSuspendBtnEl = function () {
  const suspendBtnEl = document.createElement('div');
  suspendBtnEl.id = 'oml-suspend-btn';

  suspendBtnEl.innerHTML = `
    <div style="margin-bottom:3px;">加载中</div>
    <svg class="icon oml-loading" aria-hidden="true" style="stroke: #fff;">
      <use xlink:href="#icon-loading"></use>
    </svg>
  `;

  window.document.body.appendChild(suspendBtnEl);

  return suspendBtnEl;
};

// 加入包装器元素
const appendWrapperEl = function () {
  const wrapperEl = document.createElement('div');

  wrapperEl.id = 'oml-wrapper';
  const fragment = new DocumentFragment();
  fragment.appendChild(wrapperEl);

  wrapperEl.innerHTML = `
    <div id="oml-tooltip" class="oml-shake-tooltip-animation"></div>
    <canvas id="oml-canvas" style="background-color: rgba(0, 0, 0, 0);"></canvas>
  `;

  const canvasEl = fragment.getElementById('oml-canvas') as HTMLCanvasElement;
  const tooltipEl = fragment.getElementById('oml-tooltip') as HTMLDivElement;

  document.body.appendChild(fragment);
  return { wrapperEl, canvasEl, tooltipEl };
};

const handleMediaSearchEvent = (l2dInstance: LoadOhMyLive2D) => {
  const xs = window.matchMedia('screen and (max-width: 768px)');
  const md = window.matchMedia('screen and (min-width: 768px) and (max-width: 1200px)');
  const xl = window.matchMedia('screen and (min-width: 1200px)');

  if (xs.matches) l2dInstance.screenSize = 'xs';
  if (md.matches) l2dInstance.screenSize = 'md';
  if (xl.matches) l2dInstance.screenSize = 'xl';

  xs.addEventListener('change', (e) => {
    if (e.matches) {
      l2dInstance.screenSize = 'xs';
      l2dInstance.adaptiveConfig = l2dInstance.config.stage!['xs']!;
      l2dInstance.updateOml();
    }
  });

  md.addEventListener('change', (e) => {
    if (e.matches) {
      l2dInstance.screenSize = 'md';
      l2dInstance.adaptiveConfig = l2dInstance.config.stage!['md']!;
      l2dInstance.updateOml();
    }
  });

  xl.addEventListener('change', (e) => {
    if (e.matches) {
      l2dInstance.screenSize = 'xl';
      l2dInstance.adaptiveConfig = l2dInstance.config.stage!['xl']!;
      l2dInstance.updateOml();
    }
  });
  l2dInstance.adaptiveConfig = l2dInstance.config.stage![l2dInstance.screenSize]!;
};

const registerEvent = function (this: LoadOhMyLive2D) {
  // 处理媒体查询
  handleMediaSearchEvent(this);

  // 刷新前卸载元素
  window.onbeforeunload = () => {
    this.wrapperEl && document.body.removeChild(this.wrapperEl);
  };

  window.addEventListener('copy', () => {
    const { message, persistTime, priority } = getTipsConfig('copy');
    this.showTipsFrameMessage(message, persistTime, priority);
  });

  // this.wrapperEl?.addEventListener('click', () => {
  //   this.showTipsFrameMessage('hello', 8000, 4);
  // });
};
export { appendWrapperEl, registerEvent, createSuspendBtnEl };

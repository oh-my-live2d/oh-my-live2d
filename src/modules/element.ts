import { sleep } from '../utils/index';
import { LoadOhMyLive2D } from './setup';

const createSuspendBtnEl = function () {
  const levitatedSphereEl = document.createElement('div');
  levitatedSphereEl.id = 'oml-levitated-sphere';

  window.document.body.appendChild(levitatedSphereEl);

  return levitatedSphereEl;
};

const setLevitatedSphereContent = function (this: LoadOhMyLive2D, contentType: 'loading' | 'text', text?: string) {
  switch (contentType) {
    case 'loading':
      this.levitatedSphereEl.innerHTML = `
      <div style="margin-bottom:3px;">加载中</div>
      <svg class="oml-icon oml-loading" aria-hidden="true"">
        <use xlink:href="#icon-loading"></use>
      </svg>
    `;
      break;
    case 'text':
      this.levitatedSphereEl.innerHTML = `<div>${text}</div>`;
      break;
  }
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

const getScreenSize = () => {
  let sizeType;
  const xs = window.matchMedia('screen and (max-width: 768px)');
  const xl = window.matchMedia('screen and (min-width: 768px)');

  if (xs.matches) sizeType = 'xs';
  if (xl.matches) sizeType = 'xl';

  return sizeType;
};

const mediaSearchChange = function (this: LoadOhMyLive2D) {
  const xs = window.matchMedia('screen and (max-width: 768px)');
  const xl = window.matchMedia('screen and (min-width: 768px');

  xs.addEventListener('change', async (e) => {
    if (e.matches) {
      await this.showTipsFrameMessage('屏幕装不下啦~', 1000, 9);
      this.disableTips();
      await this.hiddenLive2d();
      await this.displayLevitatedSphere();
      this.setLevitatedSphereContent('text', '休息中');
    }
  });

  xl.addEventListener('change', async (e) => {
    if (e.matches) {
      this.setLevitatedSphereContent('text', '闪亮登场');
      await sleep(500);
      this.enableTips();
      this.hiddenLevitatedSphere();
      await this.displayLive2d();
      await this.onTips('welcomeTips');
    }
  });
};

const registerEvent = function (this: LoadOhMyLive2D) {
  // 处理媒体查询
  this.mediaSearchChange();

  // 刷新前卸载元素
  window.onbeforeunload = () => {
    this.wrapperEl && document.body.removeChild(this.wrapperEl);
  };

  window.addEventListener('copy', () => {
    this.onTips('copyTips');
  });

  // this.wrapperEl?.addEventListener('click', () => {
  //   this.showTipsFrameMessage('hello', 8000, 4);
  // });
};
export { appendWrapperEl, registerEvent, createSuspendBtnEl, getScreenSize, setLevitatedSphereContent, mediaSearchChange };

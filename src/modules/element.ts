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
      <svg class="oml-icon oml-loading" aria-hidden="true">
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
  const fragment = new DocumentFragment();
  const wrapperEl = document.createElement('div');
  wrapperEl.id = 'oml-wrapper';
  fragment.appendChild(wrapperEl);

  const menuItemInfo = [
    {
      id: 'SwitchModel',
      name: 'icon-a-userswitch-fill',
      title: '切换模型'
    },
    {
      id: 'Setting',
      name: 'icon-setting-fill',
      title: '设置'
    },
    {
      id: 'About',
      name: 'icon-info-circle-fill',
      title: '关于'
    }
  ];

  const menuContent = menuItemInfo
    .map((item) => {
      return `
      <div title="${item.title}" class="oml-menu-item" data-name="${item.id}">
        <svg class="oml-icon">
          <use xlink:href="#${item.name}"></use>
        </svg>
      </div>`;
    })
    .join('');

  wrapperEl.innerHTML = `
    <div id="oml-tooltip" class="oml-shake-tooltip-animation"></div>
    <canvas id="oml-canvas" style="background-color: rgba(0, 0, 0, 0);"></canvas>
    <div id="oml-side-menu">${menuContent}</div>
  `;

  const canvasEl = fragment.getElementById('oml-canvas') as HTMLCanvasElement;
  const tooltipEl = fragment.getElementById('oml-tooltip') as HTMLDivElement;
  const sideMenuEl = fragment.getElementById('oml-side-menu') as HTMLDivElement;
  document.body.appendChild(fragment);

  return { wrapperEl, canvasEl, tooltipEl, sideMenuEl };
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
      await this.hiddenLive2d();
      await this.displayLevitatedSphere();
      this.setLevitatedSphereContent('text', '休息中');
      this.disableTips();
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

  // 事件委托
  this.wrapperContentEls?.sideMenuEl?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) return;
    let target: any = e.target;
    while (target.parentNode !== e.currentTarget) {
      target = target.parentNode;
    }

    switch (target.getAttribute('data-name')) {
      case 'SwitchModel':
        this.showTipsFrameMessage('施工中', 3000, 10);
        break;
      case 'Setting':
        this.showTipsFrameMessage('施工中', 3000, 10);
        break;
      case 'About':
        this.showTipsFrameMessage('施工中', 3000, 10);
        break;
    }
  });
  // this.wrapperEl?.addEventListener('click', () => {
  //   this.showTipsFrameMessage('hello', 8000, 4);
  // });
};
export { appendWrapperEl, registerEvent, createSuspendBtnEl, getScreenSize, setLevitatedSphereContent, mediaSearchChange };

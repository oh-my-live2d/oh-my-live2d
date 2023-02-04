import { setElStyle } from './style';
import type { LoadOhMyLive2D } from './setup';
import { sleep } from '@/utils/';

type ContentType = 'loading' | 'text';

let hiddenTimer;

const setLevitatedSphereContent = function (this: LoadOhMyLive2D, contentType: ContentType, text?: string) {
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

// 隐藏悬浮按钮
const hiddenLevitatedSphere = async function (this: LoadOhMyLive2D) {
  if (this.omlStatus === 'hidden') return;
  setElStyle(this.levitatedSphereEl, {
    animationName: 'oml-levitated-sphere-hidden',
    animationDuration: `${this.options.transitionTime}ms`,
    animationFillMode: 'forwards'
  });
  await sleep(this.options.transitionTime);
};

// 显示悬浮按钮
const displayLevitatedSphere = async function (this: LoadOhMyLive2D, contentType: ContentType, text = '', showTime?: number) {
  clearTimeout(hiddenTimer);
  if (contentType === 'loading') {
    this.setLevitatedSphereContent('loading');
    this.model.once('ready', async () => {
      this.setLevitatedSphereContent('text', '加载成功');
      await sleep(1000);
      if (this.omlStatus === 'hidden') this.setLevitatedSphereContent('text', '休息中');
      this.hiddenLevitatedSphere();
    });
  } else {
    this.setLevitatedSphereContent(contentType, text);
  }

  setElStyle(this.levitatedSphereEl, {
    animationName: 'oml-levitated-sphere-display',
    animationDuration: `${this.options.transitionTime}ms`,
    animationFillMode: 'forwards'
  });

  if (showTime) {
    hiddenTimer = setTimeout(() => {
      this.hiddenLevitatedSphere();
    }, showTime);
  }
};

export { setLevitatedSphereContent, hiddenLevitatedSphere, displayLevitatedSphere };

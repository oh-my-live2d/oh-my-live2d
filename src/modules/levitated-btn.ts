// import type { OhMyLive2D } from '@/modules';
// import { sleep } from '../utils';

// type ContentType = 'loading' | 'text' | 'error';

// let levitatedBtnTimer;

// const changeLevitatedBtnContent = function (this: OhMyLive2D, contentType: ContentType, text?: string) {
//   let innerHTMLContent: string;
//   switch (contentType) {
//     case 'loading':
//       innerHTMLContent = `
//       <div style="margin-bottom:3px;">加载中</div>
//       <svg class="oml-icon oml-loading" aria-hidden="true">
//         <use xlink:href="#icon-loading"></use>
//       </svg>
//     `;
//       break;
//     case 'text':
//       innerHTMLContent = `<div>${text}</div>`;
//       break;

//     case 'error':
//       innerHTMLContent = `<div>加载失败</div>`;
//       break;
//   }

//   this.elementList.levitatedBtnEl.innerHTML = innerHTMLContent;
// };

// // 显示悬浮按钮
// const displayLevitatedBtn = async function (this: OhMyLive2D, contentType: ContentType, text = '', showTime?: number) {
//   clearTimeout(levitatedBtnTimer);
//   this.changeLevitatedBtnContent(contentType, text);
//   this.changeLevitatedBtnStyle( {
//     animationName: 'oml-levitated-btn-display',
//     animationDuration: `${this.options.transitionTime}ms`,
//     animationFillMode: 'forwards'
//   });

//   if (showTime) {
//     levitatedBtnTimer = setTimeout(() => {
//       this.hiddenLevitatedBtn();
//     }, showTime);
//   }
// };

// /**
//  * 隐藏悬浮按钮
//  * @param this
//  */
// const hiddenLevitatedBtn = async function (this: OhMyLive2D) {
//   this.changeLevitatedBtnStyle({
//     animationName: 'oml-levitated-btn-hidden',
//     animationDuration: `${this.options.transitionTime}ms`,
//     animationFillMode: 'forwards'
//   });
//   await sleep(this.options.transitionTime);
// };

// export { changeLevitatedBtnContent, displayLevitatedBtn, hiddenLevitatedBtn };
export {};

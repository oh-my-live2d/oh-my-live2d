import { getTipsConfig } from '../utils/index';
import { setElStyle } from './style';
import type { OhMyLive2D } from './setup';

let tipsTimer: any = 0;

const showTipsFrameMessage = function (this: OhMyLive2D, message: string, showTime: number, priority: number) {
  if (this.tipsPriority > priority) return;
  this.tipsPriority = priority;
  clearTimeout(tipsTimer);
  tipsTimer = setTimeout(() => {
    setElStyle(this.wrapperContentEls.tooltipEl, {
      animationName: 'oml-hidden-tooltip,oml-shake-tooltip'
    });
    this.tipsPriority = 0;
  }, showTime);

  this.wrapperContentEls.tooltipEl!.innerHTML = message;
  setElStyle(this.wrapperContentEls.tooltipEl, {
    animationName: 'oml-display-tooltip,oml-shake-tooltip',
    animationDuration: '1000ms,1000ms',
    animationFillMode: 'forwards, none',
    animationIterationCount: '1, infinite'
  });
};

const playIdleTips = async function (this: OhMyLive2D, intervalTime: number) {
  const { showTime, priority } = getTipsConfig('idle');
  setInterval(() => {
    const { message } = getTipsConfig('idle');
    this.showTipsFrameMessage(message, showTime, priority);
  }, showTime + intervalTime);
};

const playWelcomeTips = function (this: OhMyLive2D) {
  const { showTime, message, priority } = getTipsConfig('welcome');
  this.showTipsFrameMessage(message, showTime, priority);
};

export { showTipsFrameMessage, playIdleTips, playWelcomeTips };

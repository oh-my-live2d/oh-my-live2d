import { getTipsConfig } from '../utils/index';
import { setElStyle } from './style';
import type { LoadOhMyLive2D } from './setup';

let tipsTimer: any = 0;
let tipsPriority = 0;

const showTipsFrameMessage = function (this: LoadOhMyLive2D, message: string, showTime: number, priority: number) {
  if (tipsPriority > priority) return;
  return new Promise<void>((resolve) => {
    tipsPriority = priority;
    clearTimeout(tipsTimer);
    tipsTimer = setTimeout(() => {
      setElStyle(this.wrapperContentEls.tooltipEl, {
        animationName: 'oml-hidden-tooltip,oml-shake-tooltip'
      });
      tipsPriority = 0;
    }, showTime);
    this.wrapperContentEls.tooltipEl!.innerHTML = message;
    setElStyle(this.wrapperContentEls.tooltipEl, {
      animationName: 'oml-display-tooltip,oml-shake-tooltip',
      animationDuration: '1000ms,1000ms',
      animationFillMode: 'forwards, none',
      animationIterationCount: '1, infinite'
    });
    setTimeout(resolve, showTime);
  });
};

const playIdleTips = async function (this: LoadOhMyLive2D) {
  const { persistTime, priority, message, intervalTime } = getTipsConfig('idle');

  if (!message) return;
  setInterval(() => {
    const { message } = getTipsConfig('idle');
    this.showTipsFrameMessage(message, persistTime, priority);
  }, persistTime + intervalTime);
};

const playWelcomeTips = async function (this: LoadOhMyLive2D) {
  const { persistTime, message, priority } = getTipsConfig('welcome');
  await this.showTipsFrameMessage(message, persistTime, priority);
};

export { showTipsFrameMessage, playIdleTips, playWelcomeTips };

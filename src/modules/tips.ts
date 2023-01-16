import { setElStyle } from './style';
import type { LoadOhMyLive2D } from './setup';
import type { TipsType } from '../types';
let tipsTimer: any = 0;
let tipsPriority = 0;

const showTipsFrameMessage = function (this: LoadOhMyLive2D, message: string | undefined, showTime: number, priority: number) {
  if (tipsPriority > priority || !this.isTips || !message) return;
  return new Promise<void>((resolve) => {
    tipsPriority = priority;
    clearTimeout(tipsTimer);
    tipsTimer = setTimeout(() => {
      setElStyle(this.wrapperContentEls!.tooltipEl, {
        animationName: 'oml-hidden-tooltip,oml-shake-tooltip'
      });
      tipsPriority = 0;
    }, showTime);
    this.wrapperContentEls!.tooltipEl!.innerHTML = message;
    setElStyle(this.wrapperContentEls!.tooltipEl, {
      animationName: 'oml-display-tooltip,oml-shake-tooltip',
      animationDuration: '1000ms,1000ms',
      animationFillMode: 'forwards, none',
      animationIterationCount: '1, infinite'
    });
    setTimeout(resolve, showTime + 1000);
  });
};

const enableTips = function (this: LoadOhMyLive2D) {
  this.isTips = true;
  this.stopIdleTips = this.playIdleTips();
};

const disableTips = function (this: LoadOhMyLive2D) {
  this.isTips = false;
  this.stopIdleTips && this.stopIdleTips();
};

// 循环播放 闲置时提示
const playIdleTips = function (this: LoadOhMyLive2D) {
  const tipsConfig = this.getTipsConfig('idleTips');
  if (!tipsConfig || !tipsConfig.message) return;
  const { priority, persistTime, interval } = tipsConfig;
  const timer = setInterval(() => {
    if (this.options.tips) {
      const message = getTipsMessage(this.options.tips.idleTips!.message!);
      this.showTipsFrameMessage(message, persistTime, priority);
    }
  }, persistTime + interval!);

  return () => {
    clearInterval(timer);
  };
};

const onTips = async function (this: LoadOhMyLive2D, tipsType: TipsType) {
  if (!this.isTips) return;

  const tipsConfig = this.getTipsConfig(tipsType);
  if (!tipsConfig) return;
  const { message, persistTime, priority } = tipsConfig;
  return await this.showTipsFrameMessage(message, persistTime, priority);
};

const getTipsConfig = function (this: LoadOhMyLive2D, tipsType: TipsType) {
  if (!this.options.tips) return;
  const message = tipsType === 'welcomeTips' ? this.getWelcomeMessage() : getTipsMessage(this.options.tips[tipsType].message!);
  const persistTime = this.options.tips[tipsType]!.persistTime;
  const priority = this.options.tips[tipsType].priority!;
  const interval = tipsType === 'idleTips' ? this.options.tips[tipsType]!.interval : undefined;
  return { message, priority, persistTime, interval };
};

const getTipsMessage = function (message: string | string[]) {
  if (typeof message === 'string') return message;
  else if (message.length) return message[Math.floor(Math.random() * message.length)];
  else return;
};

// 处理欢迎提示信息
const getWelcomeMessage = function (this: LoadOhMyLive2D) {
  if (!this.options.tips) return;
  const { welcomeTips } = this.options.tips;
  let message = '';
  const nowHours = new Date().getHours().toString();
  // 早晨
  const daybreakRange = /^[5-7]$/;
  // 早上
  const morningRange = /^(?:[8-9]|1[0-1])$/;
  // 中午
  const noonRange = /^(1[2-3])$/;
  // 下午
  const afternoonRange = /^1[4-7]$/;
  // 傍晚
  const duskRange = /^1[8-9]$/;
  // 晚上
  const nightRange = /^2[0-1]$/;
  // 深夜
  const lateNightRange = /^2[2-3]$/;

  if (daybreakRange.test(nowHours)) message = welcomeTips.message.daybreak;
  else if (morningRange.test(nowHours)) message = welcomeTips.message.morning;
  else if (noonRange.test(nowHours)) message = welcomeTips.message.noon;
  else if (afternoonRange.test(nowHours)) message = welcomeTips.message.afternoon;
  else if (duskRange.test(nowHours)) message = welcomeTips.message.dusk;
  else if (nightRange.test(nowHours)) message = welcomeTips.message!.night!;
  else if (lateNightRange.test(nowHours)) message = welcomeTips.message.lateNight;
  else message = welcomeTips.message.weeHours;
  return message;
};

export { showTipsFrameMessage, playIdleTips, onTips, getWelcomeMessage, getTipsConfig, enableTips, disableTips };

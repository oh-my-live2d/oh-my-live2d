import { setElStyle } from '@/utils';
import type { OhMyLive2D } from '@/modules';
import type { DeepRequired, IdleTips, Tips, TipsType, WelcomeTips } from '@/types';

let tipsTimer: any = 0;
let tipsPriority = 0;
let stopTimer;

interface BasicTips {
  message: string;
  priority: number;
  persistTime: number;
  interval?: number;
}

const showTipsFrameMessage = function (el: HTMLDivElement, tips: BasicTips) {
  if (tipsPriority > tips.priority || !tips.message) return;
  return new Promise<void>((resolve) => {
    tipsPriority = tips.priority;
    clearTimeout(tipsTimer);
    tipsTimer = setTimeout(() => {
      setElStyle(el, {
        animationName: 'oml-hidden-tooltip,oml-shake-tooltip'
      });
      tipsPriority = 0;
    }, tips.persistTime);
    el.innerHTML = tips.message;
    setElStyle(el, {
      animationName: 'oml-display-tooltip,oml-shake-tooltip',
      animationDuration: '1000ms,1000ms',
      animationFillMode: 'forwards, none',
      animationIterationCount: '1, infinite'
    });
    setTimeout(resolve, tips.persistTime + 1000);
  });
};

const startPlayIdleTips = function (this: OhMyLive2D) {
  if (!this.options.tips) return;
  stopTimer = playIdleTips(this.options.tips.idleTips, this);
};

const stopPlayIdleTips = function (this: OhMyLive2D) {
  stopTimer && stopTimer();
};

// 循环播放 闲置时提示
const playIdleTips = function (idleTips: DeepRequired<IdleTips>, self) {
  const timer = setInterval(() => {
    self.onTips('idleTips');
  }, idleTips.persistTime + idleTips.interval);

  stopTimer = () => clearInterval(timer);
  return stopTimer;
};

const onTips = async function (this: OhMyLive2D, tipsType: TipsType) {
  if (!this.options.tips) return;
  const tips = getTips(tipsType, this.options.tips);
  return await showTipsFrameMessage(this.elementList.tipsEl, tips);
};

const getTips = function (tipsType: TipsType, tips: DeepRequired<Tips>) {
  let message;
  let interval;
  switch (tipsType) {
    case 'welcomeTips':
      message = getWelcomeMessage(tips.welcomeTips);
      break;
    default:
      message = getTipsMessage(tips[tipsType].message);
      break;
  }

  const persistTime = tips[tipsType].persistTime;
  const priority = tips[tipsType].priority;
  if (tipsType === 'idleTips') interval = tips[tipsType].interval;
  return { message, persistTime, priority, interval };
};

/**
 * 随机抽取一条tips message
 * @param message
 * @returns
 */
const getTipsMessage = function (message: string | string[]) {
  if (typeof message === 'string') return message;
  else if (message.length) return message[Math.floor(Math.random() * message.length)];
  else return;
};

/**
 * 根据时间获取欢迎message
 * @param welcompeTipsConfig
 * @returns
 */
const getWelcomeMessage = function (welcompeTipsConfig: DeepRequired<WelcomeTips>) {
  const { message } = welcompeTipsConfig;
  let welMessage = '';
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

  if (daybreakRange.test(nowHours)) welMessage = message.daybreak;
  else if (morningRange.test(nowHours)) welMessage = message.morning;
  else if (noonRange.test(nowHours)) welMessage = message.noon;
  else if (afternoonRange.test(nowHours)) welMessage = message.afternoon;
  else if (duskRange.test(nowHours)) welMessage = message.dusk;
  else if (nightRange.test(nowHours)) welMessage = message!.night!;
  else if (lateNightRange.test(nowHours)) welMessage = message.lateNight;
  else welMessage = message.weeHours;
  return welMessage;
};

export { startPlayIdleTips, stopPlayIdleTips, onTips };

import type { WelcomeTipesType } from '../types/index.js';

export const getWelcomeMessage = function (tipsConfig: WelcomeTipesType) {
  const { message } = tipsConfig;
  let welMessage: string = '';
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

  if (daybreakRange.test(nowHours)) {
    welMessage = message.daybreak;
  } else if (morningRange.test(nowHours)) {
    welMessage = message?.morning;
  } else if (noonRange.test(nowHours)) {
    welMessage = message?.noon;
  } else if (afternoonRange.test(nowHours)) {
    welMessage = message?.afternoon;
  } else if (duskRange.test(nowHours)) {
    welMessage = message?.dusk;
  } else if (nightRange.test(nowHours)) {
    welMessage = message?.night;
  } else if (lateNightRange.test(nowHours)) {
    welMessage = message?.lateNight;
  } else {
    welMessage = message?.weeHours;
  }

  return welMessage;
};

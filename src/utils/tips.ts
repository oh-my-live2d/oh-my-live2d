import { welcomeTipsMessage } from '@/config/tips-message';
import { WelcomeTips } from '@/types/tips';

export const getWelcomeMessage = function (tipsConfig: WelcomeTips) {
  const { message } = tipsConfig;
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

  if (daybreakRange.test(nowHours)) welMessage = message?.daybreak || welcomeTipsMessage.daybreak;
  else if (morningRange.test(nowHours)) welMessage = message?.morning || welcomeTipsMessage.morning;
  else if (noonRange.test(nowHours)) welMessage = message?.noon || welcomeTipsMessage.noon;
  else if (afternoonRange.test(nowHours)) welMessage = message?.afternoon || welcomeTipsMessage.afternoon;
  else if (duskRange.test(nowHours)) welMessage = message?.dusk || welcomeTipsMessage.dusk;
  else if (nightRange.test(nowHours)) welMessage = message?.night || welcomeTipsMessage.night;
  else if (lateNightRange.test(nowHours)) welMessage = message?.lateNight || welcomeTipsMessage.lateNight;
  else welMessage = message?.weeHours || welcomeTipsMessage.weeHours;
  return welMessage;
};

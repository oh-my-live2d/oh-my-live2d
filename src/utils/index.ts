import CSS from 'csstype';
import { modelSources } from '../config';
import { tips } from '../config/tips';
import { ImportType, TipsType } from '../types/index';

const handleDefaultModelSource = (importType: ImportType) => {
  let modelSource;
  switch (importType) {
    case 'complete':
      modelSource = modelSources.completeModel;
      break;
    case 'cubism2':
      modelSource = modelSources.cubism2Model;
      break;
    case 'cubism4':
      modelSource = modelSources.cubism4Model;
      break;
    default:
      modelSource = modelSources.completeModel;
      break;
  }
  return modelSource;
};

const sayHello = (importType: ImportType) => {
  const args = [
    `\n %c 🎉🎉🎉 %c %c ✨ oh-my-live2d v${__VERSION__} - ${importType} ✨ %c %c 🎉🎉🎉 \n`,
    'background: #add7fb; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'color: #fff; background: #030307; padding:5px 0;',
    'background: #58b0fc; padding:5px 0;',
    'background: #add7fb; padding:5px 0;'
  ];
  console.log(...args);
};

// 设置指定元素样式
const setElStyle = (el: HTMLElement | undefined | null, style: CSS.Properties) => {
  if (!el) return;
  Object.assign(el.style, style);
};

// 延时
const sleep = (time: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
};

// 处理欢迎提示信息
const handleWelcomeMessage = () => {
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
  const duskRange = /^1[8-9]&/;
  // 晚上
  const nightRange = /^2[0-1]$/;
  // 深夜
  const lateNightRange = /^2[2-3]$/;

  if (daybreakRange.test(nowHours)) message = tips.welcomeTips.message.daybreak;
  else if (morningRange.test(nowHours)) message = tips.welcomeTips.message.morning;
  else if (noonRange.test(nowHours)) message = tips.welcomeTips.message.noon;
  else if (afternoonRange.test(nowHours)) message = tips.welcomeTips.message.afternoon;
  else if (duskRange.test(nowHours)) message = tips.welcomeTips.message.dusk;
  else if (nightRange.test(nowHours)) message = tips.welcomeTips.message.night;
  else if (lateNightRange.test(nowHours)) message = tips.welcomeTips.message.lateNight;
  else message = tips.welcomeTips.message.weeHours;
  return message;
};

const getTipsMessage = (message: string | string[]) => {
  if (typeof message === 'string') return message;
  else if (message.length) return message[Math.floor(Math.random() * message.length)];
  else return;
};

const getTipsConfig = (tipsType: TipsType) => {
  let message;
  let persistTime;
  let priority;
  let intervalTime;

  switch (tipsType) {
    case 'welcome':
      message = handleWelcomeMessage();
      persistTime = tips.welcomeTips.persistTime;
      priority = tips.welcomeTips.priority;
      break;
    case 'idle':
      message = getTipsMessage(tips.idleTips.message!);
      persistTime = tips.idleTips.persistTime!;
      priority = tips.idleTips.priority!;
      intervalTime = tips.idleTips.interval;
      break;
    case 'copy':
      message = getTipsMessage(tips.copyTips.message);
      persistTime = tips.copyTips.persistTime;
      priority = tips.copyTips.priority;
      break;
    default:
      break;
  }

  return { message, priority, persistTime, intervalTime };
};
export { handleDefaultModelSource, sayHello, setElStyle, sleep, handleWelcomeMessage, getTipsConfig };

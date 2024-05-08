import { OhMyLive2D } from './oml2d.js';
import { CommonStyleType } from '../types/common.js';
import type { Options } from '../types/index.js';
import { IOml2d, IOml2dEvents } from '../types/oml2d.js';
import { handleCommonStyle } from '../utils/index.js';

export const loadOml2d = (options: Options): IOml2d & IOml2dEvents => {
  const oml2d = new OhMyLive2D(options);

  return {
    version: oml2d.version,
    modelIndex: oml2d.modelIndex,
    options: oml2d.options,
    tipsMessage: (message: string, duration?: number, priority?: number) => {
      oml2d?.tips.notification(message, duration, priority);
    },

    loadNextModel: () => oml2d.loadNextModel(),
    reloadModel: () => oml2d.reloadModel(),
    stageSlideIn: () => oml2d.stage.slideIn(),
    stageSlideOut: () => oml2d.stage.slideOut(),
    setStageStyle: (style: CommonStyleType) => {
      oml2d?.stage.setStyle(handleCommonStyle(style));
      oml2d?.pixiApp?.resize();
    },
    setModelPosition: (position) => {
      const { x, y } = position;

      oml2d?.models.setPosition(x, y);
    },
    setModelScale: (scale) => {
      oml2d.models.setScale(scale);
    },
    showModelHitAreaFrames: () => {
      oml2d.models.addHitAreaFrames();
    },
    hideModelHitAreaFrames: () => {
      oml2d.models.removeHitAreaFrames();
    },
    loadNextModelClothes: () => oml2d.loadNextModelClothes(),
    statusBarClose: () => {
      oml2d.statusBar.close();
    },
    statusBarOpen: () => {
      oml2d.statusBar.open();
    },
    startTipsIdle: () => {
      oml2d.tips.idlePlayer?.start();
    },
    stopTipsIdle: () => {
      oml2d.tips.idlePlayer?.stop();
    },
    clearTips: () => {
      oml2d.tips.clear();
    },
    statusBarClearEvents: () => {
      oml2d?.statusBar.clearClickEvent();
      oml2d?.statusBar.clearHoverEvent();
    },
    statusBarPopup: (content?: string, delay?: number, color?: string) => {
      oml2d.statusBar.popup(content, delay, color);
    },
    setStatusBarClickEvent: (fn) => {
      oml2d.statusBar.setClickEvent(fn);
    },
    setStatusBarHoverEvent: (events) => {
      oml2d.statusBar.setHoverEvent(events);
    },
    onLoad: (fn) => oml2d.events.add('load', fn),
    onStageSlideIn: (fn) => oml2d.events.add('stageSlideIn', fn),
    onStageSlideOut: (fn) => oml2d.events.add('stageSlideOut', fn)
  };
};

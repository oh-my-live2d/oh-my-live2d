import { OhMyLive2D } from './oml2d.js';
import type { Options } from '../types/index.js';
import type { Oml2dEvents, Oml2dMethods, Oml2dProperties } from '../types/oml2d/index.js';

/**
 * 当您需要加载模型时, 您可以在 oh-my-live2d 中导入loadOml2d 方法, 当这个方法被调用时将根据您传入的配置选项来加载组件, 该方法返回一个实例对象, 您可以从 oml2d 这个实例对象中调用其中所有方法.
 * @param options - 配置选项
 * @returns 返回值是一个 oml2d 实例对象, 该实例对象中包含了对组件模块操作的所有方法和事件
 */
export const loadOml2d = (options: Options): Oml2dProperties & Oml2dMethods & Oml2dEvents => {
  const oml2d = new OhMyLive2D(options);

  return oml2d;
};

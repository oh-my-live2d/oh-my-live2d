import { OhMyLive2D } from './oml2d.js';
import type { Options } from '../types/index.js';
import type { Oml2dEvents, Oml2dMethods, Oml2dProperties } from '../types/oml2d/index.js';

/**
 * 当您需要加载模型时, 您可以在 oh-my-live2d 中导入loadOml2d 方法, 当这个方法被调用时将根据您传入的配置选项来加载组件, 该方法返回一个实例对象, 您可以从 oml2d 这个实例对象中调用其中所有方法.
 * @usage
 * 调用时需要传入一个 [配置选项](../interfaces/Options), 该方法的调用是同步的, 可以被调用多次, 每次调用都会返回一个新的实例对象
 * ### ESM导入:
 * <<< @/usages/loadOml2d.ts
 * ### CDN导入:
 * <<< @/usages/loadOml2d.html{7,10-14}
 * @param options - 配置选项
 * @returns
 * 返回值是一个 oml2d 实例对象, 该实例对象中包含了对组件模块操作的所有方法和事件
 * - [Oml2dProperties](/api/interfaces/Oml2dProperties) - 实例对象下的属性
 * - [Oml2dMethods](/api/interfaces/Oml2dMethods) - 实例对象下的方法
 * - [Oml2dEvents](/api/interfaces/Oml2dEvents) - 实例对象下的事件
 */
export const loadOml2d = (options: Options): Oml2dProperties & Oml2dMethods & Oml2dEvents => {
  const oml2d = new OhMyLive2D(options);

  return oml2d;
};

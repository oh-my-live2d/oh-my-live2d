import type { InternalModel, Live2DModel } from 'pixi-live2d-display';
import type { HitAreaFrames } from 'pixi-live2d-display/extra';
import { getRandomArrayItem, isNumber } from 'tianjie';

import type { Events } from './events.js';
import { MotionPreloadStrategy, WindowSizeType } from '../constants/index.js';
import type { DefaultOptions, ModelOptions, PixiLive2dDisplayModule } from '../types/index.js';
import { getWindowSizeType } from '../utils/index.js';

export class Models {
  model?: Live2DModel<InternalModel>; // 当前模型实例
  private currentModelIndex = 0;
  private hitAreaFrames: HitAreaFrames;
  // private eventMap = new Map<ModelEvent, EventFn[]>();
  constructor(
    private options: DefaultOptions,
    private PixiLive2dDisplay: PixiLive2dDisplayModule,
    private events: Events
  ) {
    this.hitAreaFrames = new PixiLive2dDisplay.HitAreaFrames();
  }

  get modelIndex(): number {
    return this.currentModelIndex;
  }
  set modelIndex(index: number) {
    this.currentModelIndex = index;
  }

  get currentModelOptions(): ModelOptions {
    return this.options.models[this.modelIndex];
  }

  create(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.events.emit('load', 'loading');

      this.model = this.PixiLive2dDisplay.Live2DModel.fromSync(this.currentModelOptions.path, {
        motionPreload: (this.currentModelOptions.motionPreloadStrategy as MotionPreloadStrategy) || MotionPreloadStrategy.IDLE,
        onError: () => {
          this.events.emit('load', 'fail');
          reject();
        }
      });

      // 加载完成
      this.model.on('load', () => {
        this.events.emit('load', 'success');
        resolve();
      });

      // 模型点击区域被点击
      this.model.on('hit', (names: string[]) => {
        this.events.emit('hit', names);
        this.playRandomMotion(names);
      });
    });
  }

  // 设置模型
  settingModel(): void {
    switch (getWindowSizeType()) {
      case WindowSizeType.mobile:
        this.setPosition(...(this.currentModelOptions.mobilePosition || []));
        this.setScale(this.currentModelOptions.mobileScale);
        break;
      case WindowSizeType.pc:
        this.setPosition(...(this.currentModelOptions.position || []));
        this.setScale(this.currentModelOptions.scale);
        break;
    }

    // 是否显示模型可点击区域
    if (this.currentModelOptions.showHitAreaFrames) {
      this.addHitAreaFrames();
    }

    // 音量
    if (isNumber(this.currentModelOptions.volume)) {
      this.PixiLive2dDisplay.SoundManager.volume = this.currentModelOptions.volume;
    }
  }

  /**
   * 添加点击区域
   */
  addHitAreaFrames(): void {
    if (this.hitAreaFrames) {
      this.model?.addChild(this.hitAreaFrames);
    }
  }

  /**
   * 移除点击区域
   */
  removeHitAreaFrames(): void {
    this.model?.removeChildren(0);
  }

  // 模型尺寸
  get modelSize(): { width: number; height: number } {
    return {
      width: this.model?.width || 0,
      height: this.model?.height || 0
    };
  }

  /**
   * 设置缩放比例
   * @param x
   * @param y
   */
  setScale(value: number = 0.1): void {
    this.model?.scale.set(value, value);
  }

  /**
   * 设置位置
   * @param x
   * @param y
   */
  setPosition(x = 0, y = 0): void {
    this.model!.x = x;
    this.model!.y = y;
  }

  /**
   * 播放动作
   */
  playMotion(motionGroupName: string, index?: number): void {
    void this.model?.motion(motionGroupName, index);
  }

  /**
   * 播放随机动作
   */
  playRandomMotion(areaName: string[]): void {
    const motionKeys = Object.keys(this.model?.internalModel.motionManager.motionGroups || {});

    let motion = motionKeys.find((key) => {
      return areaName[0].includes(key.toLowerCase()) || key.toLowerCase().includes(areaName[0]);
    });

    if (!motion) {
      motion = getRandomArrayItem(motionKeys);
    }

    this.playMotion(motion || '');
  }

  // ---------------  event
  // emit(name: EventType, ...arg: unknown[]): void {
  //   console.log('----------');
  //   const eventQueue = this.eventMap.get(name);

  //   // console.log(eventQueue);
  //   eventQueue?.forEach((fn) => void fn(...arg));
  //   // this.eventMap.set(name, []);
  // }

  // private addEvents(name: EventType, fn?: EventFn): void {
  //   console.log(fn);
  //   if (!fn) {
  //     return;
  //   }
  //   const events = this.eventMap.get(name) || [];

  //   events.push(fn);
  //   this.eventMap.set(name, events);
  // }

  // onHit(fn?: (areaName: string[]) => void): void {
  //   this.addEvents('hit', fn);
  // }

  // onLoad(fn: (status: 'loading' | 'success' | 'fail') => void): void {
  //   this.addEvents('load', fn);
  // }
}

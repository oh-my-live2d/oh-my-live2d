import type { InternalModel } from 'pixi-live2d-display';
import { Live2DModel, SoundManager } from 'pixi-live2d-display';
import { HitAreaFrames } from 'pixi-live2d-display/extra';
import { getRandomArrayItem, isNumber } from 'tianjie';

import type { Events } from './events.js';
import { MotionPreloadStrategy, WindowSizeType } from '../constants/index.js';
import type { DefaultOptions, ModelOptions } from '../types/index.js';
import { getWindowSizeType } from '../utils/index.js';

export class Models {
  model?: Live2DModel<InternalModel>; // 当前模型实例
  private currentModelIndex: number = 0;
  private currentClothesIndex: number = 0;
  private hitAreaFrames: HitAreaFrames;

  constructor(
    private options: DefaultOptions,
    private events: Events
  ) {
    this.hitAreaFrames = new HitAreaFrames();
  }

  get modelIndex(): number {
    return this.currentModelIndex;
  }

  set modelIndex(index: number) {
    this.currentModelIndex = index;
  }

  get modelClothesIndex(): number {
    return this.currentClothesIndex;
  }
  set modelClothesIndex(index: number) {
    this.currentClothesIndex = index;
  }

  get currentModelOptions(): ModelOptions {
    return this.options.models[this.modelIndex];
  }

  create(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.events.emit('load', 'loading');

      let modelPath = this.currentModelOptions.path;

      if (Array.isArray(modelPath)) {
        modelPath = this.currentModelOptions.path[this.modelClothesIndex];
      }

      this.model = Live2DModel.fromSync(modelPath, {
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
      SoundManager.volume = this.currentModelOptions.volume;
    }

    // 设置锚点
    this.setAnchor(...(this.currentModelOptions.anchor || []));

    // 旋转角度
    this.setRotation(this.currentModelOptions.rotation);
  }

  /**
   * 添加点击区域
   */
  addHitAreaFrames(): void {
    this.model?.addChild(this.hitAreaFrames);
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
   * 设置模型旋转角度
   */
  setRotation(value: number = 0): void {
    this.model!.rotation = (Math.PI * value) / 180;
  }

  /**
   * 设置模型在舞台中的锚点位置
   */
  setAnchor(x: number = 0, y: number = 0): void {
    this.model!.anchor.set(x, y);
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
}

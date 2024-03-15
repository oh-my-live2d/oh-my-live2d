import type { InternalModel, Live2DModel } from 'pixi-live2d-display';
import type { Application as ApplicationType } from 'pixi.js';

import type { PixiModule } from '../types/index.js';

export class Application {
  app?: ApplicationType;
  constructor(private PIXI: PixiModule) {}

  mount(canvasElement: HTMLCanvasElement, stageElement: HTMLElement, model?: Live2DModel<InternalModel>): void {
    if (!this.app) {
      this.app = new this.PIXI.Application({
        view: canvasElement,
        resolution: 2,
        autoStart: true,
        autoDensity: true,
        backgroundAlpha: 0,
        resizeTo: stageElement
      });
    }

    if (model) {
      this.clearAppStage();
      this.app.stage.addChild(model);
    } else {
      console.error('挂载模型失败');
    }
  }

  unMount(): void {
    this.clearAppStage();
  }

  // 清除舞台中所有模型
  clearAppStage(): void {
    const childLen = this.app?.stage.children.length || 0;

    if (childLen > 0) {
      this.app!.stage.removeChildren(0);
    }
  }

  resize(): void {
    this.app?.resize();
  }
}

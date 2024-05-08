import type { InternalModel, Live2DModel } from 'pixi-live2d-display';
import * as PIXI from 'pixi.js';

import { Stage } from './stage.js';

export class PixiApp {
  app: PIXI.Application;
  constructor(private stage: Stage) {
    window.PIXI = PIXI;
    window.PIXI.utils.skipHello();

    this.app = new PIXI.Application({
      view: this.stage.canvasElement,
      resolution: 2,
      autoStart: true,
      autoDensity: true,
      backgroundAlpha: 0,
      resizeTo: this.stage.element
    });
  }

  mount(model?: Live2DModel<InternalModel>): void {
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
      this.app.stage.removeChildren(0);
    }
  }

  resize(): void {
    this.app?.resize();
  }
}

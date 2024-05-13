import { Model } from './model.js';
import { Pixi } from './pixi.js';
import { Stage } from './stage.js';
import emitter from '../emitter/index.js';

export class OhMyLive2D {
  private stage: Stage;
  private pixi: Pixi;
  private model: Model;
  // private tips: Tips;
  constructor() {
    this.stage = new Stage();
    this.pixi = new Pixi(this.stage);
    this.model = new Model(this.pixi);
    console.log('OhMyLive2D initialized');

    this.initialize();
    this.registerListeners();
  }

  private initialize() {
    this.model.load();
  }

  private registerListeners() {
    emitter.on('modelLoad', (state) => {
      if (state === 'success') {
        this.stage.slideIn();
      }
    });
  }
}

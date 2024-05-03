import { StoreModelInfo } from '../types/common.js';
import { ModelOptions } from '../types/model.js';

export class Store {
  setModelInfo(value: StoreModelInfo): void {
    const finalValue = JSON.stringify(value);

    localStorage.setItem('OML2D_MODEL_INFO', finalValue);
  }

  setModelIndex(index: number): void {
    localStorage.setItem('OML2D_MODEL_INDEX', index.toString());
  }

  settModelClothesIndex(index: number): void {
    localStorage.setItem('OML2D_MODEL_CLOTHES_INDEX', index.toString());
  }

  getModelClothesIndex(): number {
    return Number(localStorage.getItem('OML2D_MODEL_CLOTHES_INDEX'));
  }

  getModelIndex(): number {
    return Number(localStorage.getItem('OML2D_MODEL_INDEX'));
  }

  updateModelInfo(modelOptions: ModelOptions[]): void {
    const paths = modelOptions?.map((item: ModelOptions): string | string[] => item.path);

    this.setModelInfo(paths);
  }

  updateModelCurrentIndex(index: number): void {
    this.setModelIndex(index);
  }

  updateModelCurrentClothesIndex(index: number): void {
    this.settModelClothesIndex(index);
  }
}

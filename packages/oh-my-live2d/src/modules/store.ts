import { StoreModelInfo } from '../types/common.js';
import { ModelOptions } from '../types/model.js';

export class Store {
  setModelInfo(value: StoreModelInfo): void {
    const finalValue = JSON.stringify(value);

    localStorage.setItem('OML2D_MODEL_INFO', finalValue);
  }

  getModuleInfo(modelOptions: ModelOptions[]): StoreModelInfo {
    const key = this.getModelDataKey(modelOptions);

    const value = JSON.parse(localStorage.getItem('OML2D_MODEL_INFO') as string) as StoreModelInfo;

    if (value?.key === key) {
      return value;
    }
  }

  getModelDataKey(modelOptions: ModelOptions[]): string {
    const keys = modelOptions?.map((item: ModelOptions): string => {
      return item.path;
    });

    return keys.join();
  }

  updateModelInfo(modelOptions: ModelOptions[], currentIndex: number): void {
    const key = this.getModelDataKey(modelOptions);

    this.setModelInfo({ key, currentIndex });
  }

  getModelCurrentIndex(modelOptions: ModelOptions[]): number {
    return this.getModuleInfo(modelOptions)?.currentIndex || 0;
  }
}

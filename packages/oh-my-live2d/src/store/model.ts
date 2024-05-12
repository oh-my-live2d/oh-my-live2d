import { StoreonModule } from 'storeon';
import { isArray } from 'tianjie';

import { Events, IState } from './constants.js';
import { MODEL_CLOTHES_INDEX, MODEL_INDEX, MODEL_KEY } from '../constants/index.js';
import { getLocalStorage, getModelKey, setLocalStorage } from '../utils/index.js';

export const model: StoreonModule<IState, Events> = (store) => {
  store.on('@init', () => {
    return {
      modelIndex: (getLocalStorage(MODEL_INDEX) as number) || 0,
      clothesIndex: (getLocalStorage(MODEL_CLOTHES_INDEX) as number) || 0,
      modelPath: '',
      models: []
    };
  });

  // 模型列表初始化
  store.on('model/initialize', (state, models) => {
    const key = getModelKey(models);

    let modelIndex = state.modelIndex;
    let clothesIndex = state.clothesIndex;

    if (key !== getLocalStorage(MODEL_KEY)) {
      modelIndex = 0;
      clothesIndex = 0;
      setLocalStorage(MODEL_INDEX, 0);
      setLocalStorage(MODEL_CLOTHES_INDEX, 0);
    }
    setLocalStorage(MODEL_KEY, key);
    store.dispatch('model/setCurrentModel', models[modelIndex]);

    return { models, modelIndex, clothesIndex };
  });

  // 设置模型尺寸
  store.on('model/setModelSize', (_, { width, height }) => ({ modelHeight: height, modelWidth: width }));

  // 设置当前模型衣服索引
  store.on('model/setClothesIndex', (state, clothesIndex) => {
    setLocalStorage(MODEL_CLOTHES_INDEX, clothesIndex);
    store.dispatch('model/setModelPath', state.currentModel.path[state.clothesIndex]);

    return { clothesIndex };
  });

  store.on('model/setModelPath', (_, modelPath) => ({ modelPath }));

  // 增加当前模型衣服索引
  store.on('model/incClothesIndex', (state) => {
    if (isArray(state.currentModel.path)) {
      let clothesIndex = state.clothesIndex + 1;

      if (clothesIndex >= state.currentModel.path.length) {
        clothesIndex = 0;
      }
      store.dispatch('model/setClothesIndex', clothesIndex);
    }
  });

  // 减少当前模型衣服索引
  store.on('model/decClothesIndex', (state) => {
    if (isArray(state.currentModel.path)) {
      let clothesIndex = state.clothesIndex - 1;

      if (clothesIndex < 0) {
        clothesIndex = state.currentModel.path.length - 1;

        if (clothesIndex < 0) {
          clothesIndex = state.currentModel.path.length - 1;
        }
      }

      store.dispatch('model/setClothesIndex', clothesIndex);
    }
  });

  // 设置当前模型
  store.on('model/setCurrentModel', (state, currentModel) => {
    let path = '';

    if (isArray(currentModel.path)) {
      path = currentModel.path[state.clothesIndex];
    } else {
      path = currentModel.path;
    }

    store.dispatch('model/setModelPath', path);

    return { currentModel };
  });

  // 设置当前模型索引
  store.on('model/setIndex', (state, index) => {
    if (index < 0 || index >= state.models.length) {
      index = 0;
    }
    setLocalStorage(MODEL_INDEX, index);
    store.dispatch('model/setCurrentModel', state.models[index]);

    return { modelIndex: index, clothesIndex: 0 };
  });

  // 增加当前模型索引
  store.on('model/incIndex', (state) => {
    let index = state.modelIndex + 1;

    if (index >= state.models.length) {
      index = 0;
    }
    store.dispatch('model/setIndex', index);
  });

  // 减少当前模型索引
  store.on('model/decIndex', (state) => {
    let index = state.modelIndex - 1;

    if (index < 0) {
      index = state.models.length - 1;
    }
    store.dispatch('model/setIndex', index);
  });
};

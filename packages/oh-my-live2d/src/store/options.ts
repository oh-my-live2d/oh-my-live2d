import { StoreonModule } from 'storeon';

import { Events, IState } from './constants.js';
import { DEFAULT_OPTIONS } from '../config/index.js';
import { mergeOptions } from '../utils/index.js';

export const options: StoreonModule<IState, Events> = (store) => {
  store.on('options/initialize', (_, options) => {
    const finalOptions = mergeOptions(DEFAULT_OPTIONS, options);

    store.dispatch('model/initialize', options.models);

    return { options: finalOptions };
  });
};

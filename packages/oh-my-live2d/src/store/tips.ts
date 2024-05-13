import { StoreonModule } from 'storeon';

import { Events, IState } from './constants.js';

export const tips: StoreonModule<IState, Events> = (store) => {
  store.on('tips/initialize', (_, tips) => ({ tips }));
};

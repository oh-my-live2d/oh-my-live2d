import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

import { model } from './model.js';
import { options } from './options.js';

export const store = createStoreon([model, options, import.meta.env.MODE === 'development' && storeonDevtools]);

import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

import { model } from './model.js';
import { options } from './options.js';
import { tips } from './tips.js';

export const store = createStoreon([model, tips, options, import.meta.env.MODE === 'development' && storeonDevtools]);

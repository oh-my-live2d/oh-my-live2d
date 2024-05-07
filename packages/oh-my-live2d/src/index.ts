import './library/iconfont.js';
import './library/cubism2.js';
import './library/cubism5.js';

import { bootstrap } from './modules/index.js';

export * from './types/options.js';
export { LoadOhMyLive2D } from './modules/load-oml2d.js';

export const loadOml2d = bootstrap();

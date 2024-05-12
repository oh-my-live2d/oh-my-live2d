import { css } from 'goober';

import { CSSProperties } from '../types/style/index.js';
import { handleStyleProperties } from '../utils/style.js';

export const stageStyle = (props: CSSProperties = {}) => {
  const styleObj = handleStyleProperties(props);

  return css({
    width: '0px',
    height: '0px',
    position: 'fixed',
    right: 'auto',
    bottom: 0,
    zIndex: '9997',
    transform: 'translateY(130%)',
    ...styleObj
  });
};

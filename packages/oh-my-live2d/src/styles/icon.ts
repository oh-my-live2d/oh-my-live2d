import { css } from 'goober';

import { loadingRotate } from './keyframes';

export const icon = css`
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
`;

export const loading = css`
  animation-name: ${loadingRotate};
  animation-duration: 600ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

import { keyframes } from 'goober';

export const stageSlideIn = keyframes`
   from {
      transform: translateY(130%);
    }
    to {
      transform: translateY(0%);
    }
`;

export const stageSlideOut = keyframes`
   from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(130%);
    }
`;

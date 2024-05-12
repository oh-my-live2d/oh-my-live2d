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

export const tipsDisplay = keyframes`
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
`;

export const tipsHide = keyframes`
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
`;
export const tipsShake = keyframes`
    0% {
      transform: translate(-50%, 5%) scale(0.99);
    }
    50% {
   
      transform: translate(-50%, 0%) scale(1);
    }
    100% {
      transform: translate(-50%, 5%) scale(0.99);
    }
`;

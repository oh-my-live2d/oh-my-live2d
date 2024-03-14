import { ELEMENT_ID } from '../config/config.js';
import { CSSProperties } from '../types/index.js';

export const generateGlobalStyle = (primaryColor: string): string => {
  return `
  @keyframes oml2d-shake-tips{
    0% {
      transform: translate(-50%, 5%) scale(0.99);
    }
    50% {
   
      transform: translate(-50%, 0%) scale(1);
    }
    100% {
      transform: translate(-50%, 5%) scale(0.99);
    }
  }
  
  @keyframes oml2d-stage-slide-in {
    from {
      transform: translateY(130%);
    }
    to {
      transform: translateY(0%);
    }
  }
  
  @keyframes oml2d-stage-slide-out {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(130%);
    }
  }
  
  @keyframes oml2d-display-tips {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
  
  @keyframes oml2d-hidden-tips {
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
  @keyframes oml2d-loading-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .oml2d-icon {
    width: 1em; 
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  
  .oml2d-loading{
    animation-name: oml2d-loading-rotate;
    animation-duration: 600ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .oml2d-menus-item {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    transition: all 300ms;
    color: ${primaryColor};
    cursor: pointer;
    background-color: #fff;
  }
  
  .oml2d-menus-item:hover {
    background-color: ${primaryColor};
    color: #fff;
    box-shadow: 0 0 5px #000;
  }
  
  #${ELEMENT_ID.menus} .oml2d-menus-item:not(:last-child) {
    margin-bottom: 10px;
  }
  
  
  
  @keyframes oml2d-status-bar-slide-out {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-120%);
    }
  }
  
  
  @keyframes oml2d-status-bar-slide-in {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  `;
};

export const TIPS_DEFAULT_STYLE: CSSProperties = {
  position: 'absolute',
  fontSize: '18px',
  borderRadius: '10px',
  filter: 'drop-shadow(0 0 5px #999)',
  border: '2px solid #fff',
  color: '#fff',
  padding: '5px 5px',
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  justifyContent: 'center',
  animationDuration: `1000ms,1000ms`,
  animationFillMode: 'forwards, none',
  animationIterationCount: '1, infinite',
  width: '60%',
  left: '50%',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  minHeight: '100px'
};

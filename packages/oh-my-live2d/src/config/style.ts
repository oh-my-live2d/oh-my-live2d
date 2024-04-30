import { ELEMENT_ID } from '../config/config.js';
import { CommonStyleType } from '../types/common.js';

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
  
  @keyframes oml2d-status-bar-left-slide-out {
    0% {
      transform: translateX(-8%);
    }
    100% {
      transform: translateX(-120%);
    }
  }
  
  
  @keyframes oml2d-status-bar-left-slide-in {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(-8%);
    }
  }

  @keyframes oml2d-status-bar-right-slide-out {
    0% {
      transform: translateX(8%);
    }
    100% {
      transform: translateX(120%);
    }
  }
  
  
  @keyframes oml2d-status-bar-right-slide-in {
    0% {
      transform: translateX(120%);
    }
    100% {
      transform: translateX(8%);
    }
  }
  `;
};

export const STAGE_DEFAULT_GLOBAL_STYLE: CommonStyleType = {};

export const STAGE_DEFAULT_STYLE: CommonStyleType = {
  width: '0px',
  height: '0px',
  position: 'fixed',
  right: 'auto',
  bottom: 0,
  zIndex: '9997',
  transform: 'translateY(130%)'
};

export const TIPS_DEFAULT_STYLE: CommonStyleType = {
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

export const STATUS_BAR_DEFAULT_STYLE: CommonStyleType = {
  minWidth: '20px',
  minHeight: '40px',
  position: 'fixed',
  transform: 'translateX(-110%)',
  bottom: '80px',
  padding: '7px 5px',
  zIndex: '9998',
  borderStyle: 'solid',
  borderColor: '#fff',
  fontWeight: 'bold',
  borderRadius: '5px',
  borderWidth: '2px',
  boxShadow: '0 0 5px #999',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexWrap: 'wrap',
  fontSize: '14px',
  writingMode: 'vertical-lr',
  cursor: 'pointer'
};

export const MENUS_DEFAULT_STYLE: CommonStyleType = {
  transition: 'all 500ms',
  visibility: 'hidden',
  opacity: 0,
  position: 'absolute',
  bottom: '10%',
  zIndex: '9999',
  fontSize: '26px'
};

export const PRIMARY_COLOR = '#38B0DE';
export const STATUS_BAR_ERROR_COLOR = '#F08080';

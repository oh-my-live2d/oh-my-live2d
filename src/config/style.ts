const globalStyle = `
.oml2d-icon {
  width: 1em; 
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.oml2d-loading{
  animation-name: oml-loading-rotate;
  animation-duration: 600ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}




#oml-tips {
  position: absolute;
  top: 0px;
  font-size: 18px;
  border-radius: 10px;
  filter: drop-shadow(0 0 5px #999);
  transform: translate(0%, -40%);
  background-color: #58b0fc;
  border: 2px solid #fff;
  color: #fff;
  padding: 3px 5px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}


#oml-controls {
  transition: all 500ms;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  right: 0;
  bottom: 10%;
  z-index: 9999;
  font-size: 26px;
}

#oml-stage:hover > #oml-controls {
  visibility: visible;
  opacity: 1;
}

#oml-controls .oml-control-item {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  transition: all 300ms;
  color: #58b0fc;
  cursor: pointer;
  background-color: #fff;
}

#oml-controls .oml-control-item:hover {
  background-color: #58b0fc;
  color: #fff;
  box-shadow: 0 0 5px #000;
}

#oml-controls .oml-control-item:not(:last-child) {
  margin-bottom: 10px;
}

@keyframes oml-shake-tooltip{
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

@keyframes oml-loading-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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

@keyframes oml-display-tooltip {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes oml-hidden-tooltip {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

`;

export { globalStyle };

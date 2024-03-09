import { loadOml2d } from 'oh-my-live2d';

import typescriptLogo from './typescript.svg';

import './style.css';

void loadOml2d({
  // parentElement: el,
  // fixed: false,

  models: [
    {
      path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
      scale: 0.12,
      position: [-50, 50],
      // motionPreloadStrategy: 'NONE',
      stageStyle: {
        width: 320
      }
    },
    {
      path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
      scale: 0.3,
      motionPreloadStrategy: 'ALL'
    }
  ],
  tips: {
    idleTips: {
      wordTheDay(wordTheDayData) {
        return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`;
      }
    }
  }
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

import { loadOml2d } from '../../../dist';
import { setupCounter } from '../lib/main';
import './style.css';
import typescriptLogo from './typescript.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

loadOml2d({
  // parentElement: el,
  // fixed: false,

  models: [
    // {
    //   path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
    //   scale: 0.12,
    //   position: [-50, 50],
    //   stageStyle: {
    //     width: 320
    //   }
    // }
    // {
    //   path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/Fox%20Hime%20Zero/mori_miko/mori_miko.model3.json',
    //   position: [50, 100],
    //   stageStyle: {
    //     width: 300,
    //     height: 450
    //   }
    // },
    {
      path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
      scale: 0.3
    }
  ],
  tips: {
    idleTips: {
      // message: []
      wordTheDay: true
    }
  }
});

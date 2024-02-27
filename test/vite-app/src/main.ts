import { loadOml2d } from 'oh-my-live2d';
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

// loadOhMyLive2D({
//   models: [
//     {
//       path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
//       // path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
//       scale: 0.12,
//       position: [-10, 50]
//     },
//     {
//       path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
//       scale: 0.3
//     }
//   ],
//   tips: {
//     idleTips: {
//       // message: []
//     }
//   }
// });

const el = document.createElement('div');
loadOml2d({
  // parentElement: el,
  // fixed: false,
  models: [
    // {
    //   path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
    //   // path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
    //   scale: 0.12,
    //   position: [-10, 50]
    // },
    // {
    //   path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
    //   scale: 0.3
    // }
  ],
  tips: {
    idleTips: {
      // message: []
    }
  }
});

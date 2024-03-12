import { loadOml2d } from 'oh-my-live2d';

import typescriptLogo from './typescript.svg';

import './style.css';

void loadOml2d({
  // parentElement: el,

  primaryColor: '#38B0DE',
  models: [
    {
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
      stageStyle: {}
    },
    {
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
      scale: 0.4,
      position: [0, 50],
      stageStyle: {
        height: 300
      }
    }
  ],
  tips: {
    // style: {
    //   width: 300,
    //   height: '100px'
    // },
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

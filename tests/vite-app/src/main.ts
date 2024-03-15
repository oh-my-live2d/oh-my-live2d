import { loadOml2d } from 'oh-my-live2d';

import typescriptLogo from './typescript.svg';

import './style.css';
// const el = document.createElement('div');
// document.body.append(el);

const foo = async () => {
  const oml2d = await loadOml2d({
    // parentElement: el,
    importType: 'cubism5',
    mobileDisplay: true,
    primaryColor: 'pink',
    models: [
      // {
      //   path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/shizuku/shizuku.model.json',
      //   scale: 0.2,
      //   motionPreloadStrategy: 'ALL',
      //   volume: 0
      // },
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
        stageStyle: {},
        mobileScale: 0.08
      },
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
        scale: 0.4,
        position: [0, 0],
        mobileScale: 0.35,
        stageStyle: {
          // height: 300
        }
      }
    ],
    tips: {
      messageLine: 3,
      mobileStyle: {
        // padding: '0px 5px'
      },
      style: {},
      idleTips: {
        wordTheDay(wordTheDayData) {
          return `${wordTheDayData.hitokoto}`;
        }
      }
    }
  });

  // oml2d.loadNextModel();
  // const oml2d2 = await loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });

  // setTimeout(() => {
  //   oml2d.loadNextModel();
  //   console.log('ssssssssssssss');
  // }, 1000);
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // console.log(test1, 'test1');

  // console.log(test2, 'test2');

  // setTimeout(() => {
  //   test2.loadNextModel();
  // }, 1000);
};

foo();

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

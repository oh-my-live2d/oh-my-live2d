import { loadOml2d } from 'oh-my-live2d';

import typescriptLogo from './typescript.svg';
import './style.css';
import '//at.alicdn.com/t/c/font_2679099_hchompi0roq.js';

const foo = async () => {
  await loadOml2d({
    // parentElement: el,
    // importType: 'complete',
    mobileDisplay: true,
    primaryColor: 'pink',
    models: [
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/shizuku/shizuku.model.json',
        scale: 0.2,
        motionPreloadStrategy: 'ALL',
        position: [0, 100],
        volume: 0,
        stageStyle: {
          height: 500
        }
      },
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
    },
    statusBar: {
      disable: false,
      style: {}
    },
    menus: {
      // items: [
      //   {
      //     id: 'github',
      //     icon: 'github-fill',
      //     title: '我的github',
      //     onClick() {
      //       window.open('https://github.com/hacxy');
      //     }
      //   }
      // ]
    }
  });

  // console.log(oml2d);
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

  // await loadOml2d({
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

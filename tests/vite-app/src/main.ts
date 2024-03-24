import { loadOml2d } from 'oh-my-live2d';

import typescriptLogo from './typescript.svg';
import './style.css';
import '//at.alicdn.com/t/c/font_2679099_hchompi0roq.js';

const foo = async () => {
  const oml2d = await loadOml2d({
    // parentElement: el,
    // importType: 'complete',
    mobileDisplay: false,
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
    tips: (_model, index) => {
      // console.log(index);
      if (index === 0) {
        return {
          copyTips: {
            message: ['sssssssssssssssss']
          },
          idleTips: {
            wordTheDay: true
          }
        };
      }
      return {
        copyTips: {
          message: ['aaaaaaaaaaaaaaaaaaa']
        }
      };
    },
    statusBar: {
      loadingMessage: '正在加载',
      restMessage: '睡着了',
      disable: false,
      style: {}
    },
    menus: (_currentModel, index) => {
      // console.log(currentModel);
      // console.log(index);
      if (index === 0) {
        console.log('ssssssssssssssssssssssssssss');
        return {
          disable: false,
          style: {},
          items: (defaultItems) => {
            return defaultItems;
          }
        };
      } else {
        return {
          style: {
            left: 0
          },
          items: (defaultItem) => {
            return [defaultItem[1]];
          }
        };
      }
    }
    // menus: {
    //   items: (defaultItems) => {
    //     return defaultItems;
    //     // console.log(oml2d.modelIndex);
    //     // if (oml2d.modelIndex === 0) {
    //     //   return [
    //     //     defaultItems[1],
    //     //     {
    //     //       id: 'github',
    //     //       icon: 'github-fill',
    //     //       title: '我的github',
    //     //       onClick() {
    //     //         window.open('https://github.com/hacxy');
    //     //       }
    //     //     }
    //     //   ];
    //     // } else {
    //     //   return defaultItems;
    //     // }
    //   }
    //   // disable: true
    //   // items: [
    //   //   {
    //   //     id: 'github',
    //   //     icon: 'github-fill',
    //   //     title: '我的github',
    //   //     onClick() {
    //   //       window.open('https://github.com/hacxy');
    //   //     }
    //   //   }
    //   // ]
    // }
  });
  oml2d.onLoad((status) => {
    switch (status) {
      case 'success':
        return;
    }
  });
  setInterval(() => {
    // oml2d.tipsMessage('Oh My Live2D!', 1000, 9);
  }, 100);
  oml2d.onStageSlideIn(() => {
    // oml2d.tipsMessage('Oh My Live2D!', 1000, 9);
    // oml2d.loadNextModel();
  });
  // oml2d.loadNextModel();
  // oml2d.clearTips();
  // oml2d.reloadModel();
  // oml2d.setStatusBarClickEvent();
  // oml2d.stageSlideIn();
  // oml2d.tipsMessage();
  // oml2d.statusBarPopup();
  // setTimeout(() => {}, 10000);
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

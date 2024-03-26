import { createApp } from 'vue';

import App from './App.vue';
import './style.css';
import { loadOml2d } from 'oh-my-live2d';
// loadOml2d({
//   // parentElement: oml2d.value,
//   primaryColor: 'pink',
//   sayHello: false,
//   models: [
//     {
//       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
//       position: [-10, 20]
//     },
//     {
//       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
//       scale: 0.4,
//       position: [0, 50],
//       stageStyle: {
//         height: 300
//       }
//     }
//   ],

//   tips: {
//     idleTips: {
//       wordTheDay: (wordTheDayData) => {
//         return wordTheDayData.hitokoto;
//       }
//     }
//   }
// });
createApp(App).mount('#app');

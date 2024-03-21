import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import { oml2d } from 'vite-plugin-oh-my-live2d';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    // oml2d({
    //   primaryColor: 'pink',
    //   models: [
    //     {
    //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
    //       position: [-10, 20]
    //     }
    //   ]
    // })
    // oml2d({
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
    // })
  ]
});

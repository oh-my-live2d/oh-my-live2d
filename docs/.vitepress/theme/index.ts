// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import { loadOhMyLive2D } from '../../../dist';
export default {
  ...DefaultTheme,
  // enhanceApp(ctx) {
  //   DefaultTheme.enhanceApp(ctx);
  //   // ...
  // },
  setup() {
    console.log('--------------------------');
    loadOhMyLive2D({
      models: [
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
          // path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
          scale: 0.12,
          position: [-10, 50]
        }
      ]
    });
  }
};

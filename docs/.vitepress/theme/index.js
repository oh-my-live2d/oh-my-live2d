// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOhMyLive2D } = await import('oh-my-live2d');
      loadOhMyLive2D({
        models: [
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
            scale: 0.12,
            position: [-10, 50]
          }
        ]
      });
    }
  }
};

import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,

  async enhanceApp() {
    if (!(import.meta as any).env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');

      loadOml2d({
        models: [
          {
            path: 'https://model.oml2d.com/pio/model.json',
            scale: 0.5,
            position: [0, 95],
            stageStyle: {
              height: 410
            }
          },
          {
            path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
            scale: 0.2,
            position: [0, 100],
            stageStyle: {
              height: 400
            }
          },
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
            scale: 0.12,
            position: [-50, 50],
            stageStyle: {
              width: 320
            }
          }
        ],
        tips: {
          style: {
            offsetY: 40
          }
        }
      });
    }
  }
};

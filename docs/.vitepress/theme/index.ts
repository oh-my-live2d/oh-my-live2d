import DefaultTheme from 'vitepress/theme';
export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!(import.meta as any).env.SSR) {
      const { loadOml2d } = await import('../../../dist');
      loadOml2d({
        models: [
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
            scale: 0.12,
            position: [-10, 50]
          },
          {
            path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
            scale: 0.2,
            position: [50, 100],
            stageStyle: {
              width: 350,
              height: 380
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

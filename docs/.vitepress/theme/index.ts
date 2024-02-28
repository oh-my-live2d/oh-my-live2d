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
            position: [-50, 50],
            stageStyle: {
              width: 320
            }
          },
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/Fox%20Hime%20Zero/mori_miko/mori_miko.model3.json',
            position: [50, 100],
            stageStyle: {
              width: 300,
              height: 450
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

// .vitepress/theme/index.ts
import BlogTheme from '@sugarat/theme';
import './style.scss';
import { Theme } from 'vitepress';

export default {
  ...BlogTheme,
  async enhanceApp(ctx) {
    BlogTheme?.enhanceApp?.(ctx);

    // @ts-ignore-error
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        primaryColor: 'pink',
        models: [
          {
            path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
            position: [-10, 20]
          },
          {
            path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
            scale: 0.4,
            position: [0, 50],
            stageStyle: {
              height: 300
            }
          }
        ],

        tips: {
          idleTips: {
            wordTheDay: (wordTheDayData) => {
              return wordTheDayData.hitokoto;
            }
          }
        }
      });
    }
  }
} satisfies Theme;

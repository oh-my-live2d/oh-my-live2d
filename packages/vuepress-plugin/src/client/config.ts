import type { Options } from 'oh-my-live2d';
import { onMounted } from 'vue';
import { defineClientConfig } from 'vuepress/client';

declare const __OML2D_OPTIONS__: Options;

export default defineClientConfig({
  setup: () => {
    onMounted(() => {
      void import('oh-my-live2d').then(({ loadOml2d }) => loadOml2d(__OML2D_OPTIONS__));
    });
  }
});

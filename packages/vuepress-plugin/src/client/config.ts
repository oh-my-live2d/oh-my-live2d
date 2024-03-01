import type { Options } from 'oh-my-live2d';
import { onMounted } from 'vue';
import { defineClientConfig } from 'vuepress/client';

declare const __OML_OPTIONS__: Options;

export default defineClientConfig({
  setup: () => {
    onMounted(() => {
      import('oh-my-live2d').then(({ loadOml2d }) => {
        loadOml2d(__OML_OPTIONS__);
      });
    });
  }
});

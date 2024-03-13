import type { Options } from 'oh-my-live2d';
import { onMounted } from 'vue';

declare const __OML2D_OPTIONS__: Options;

export default {
  setup: (): void => {
    onMounted(() => {
      void import('oh-my-live2d').then(({ loadOml2d }) => loadOml2d(__OML2D_OPTIONS__));
    });
  }
};

import { loadOhMyLive2D, Options } from 'oh-my-live2d/dist/oml-cubism2';

loadOhMyLive2D({
  models: [
    {
      x: 90,
      scale: 0.8,
      stageStyle: {
        backgroundColor: 'red',
        width: 500,
      }
    },
    {},
    {},
    {
      path: '/pio/index.json',
      stageStyle: {
        backgroundColor: '#000'
      }
    }
  ],
});

import { loadOml2d } from '../dist/index.js';

loadOml2d({
  models: [
    {
      path: 'https://model.oml2d.com/cat-black/model.json',
      scale: 0.15,
      position: [0, 20],
      stageStyle: {
        height: 350
      }
    }
  ]
});

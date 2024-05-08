import { loadOml2d } from '../dist/index.js';

const oml2d = loadOml2d({
  initialStatus: 'active',
  models: [
    {
      path: 'https://model.oml2d.com/HK416-1-normal/model.json',
      position: [0, 60],
      scale: 0.08,
      stageStyle: {
        height: 450
      }
    }
  ]
});

oml2d.onLoad((status) => {
  console.log(status);
});

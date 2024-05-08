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
    },
    {
      path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
      position: [-10, 20]
    },
    {
      path: 'https://model.oml2d.com/Pio/model.json',
      scale: 0.4,
      position: [0, 50],
      stageStyle: {
        height: 300
      }
    }
  ]
});

oml2d.onLoad((status) => {
  console.log(status);
});

// oml2d.onStageSlideIn(() => {
//   oml2d.loadNextModel();
// });

// oml2d.onStageSlideOut(() => {
//   console.log('ssssssssss');
// });

const axios = require('axios');
axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/index.umd.js').then(() => {
  axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism2.umd.js').then((res) => {
    axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism4.umd.js').then(() => {
      console.log('CDN缓存刷新成功');
    });
  });
});

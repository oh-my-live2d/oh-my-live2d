const axios = require('axios');
axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist').then(() => {
  console.log('cdn缓存刷新成功');
});

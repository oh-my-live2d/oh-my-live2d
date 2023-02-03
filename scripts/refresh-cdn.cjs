const axios = require('axios');
axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js').then(() => console.log('index.min.js 已更新'));
axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism2.min.js').then(() => console.log('oml-cubism2.min.js 已更新'));
axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism4.min.js').then(() => console.log('oml-cubism4.min.js 已更新'));

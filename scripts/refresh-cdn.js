import axios from 'axios';

const printResult = (res) => {
  console.log(res.config.url + ' 已被刷新');
};

axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js').then(printResult);

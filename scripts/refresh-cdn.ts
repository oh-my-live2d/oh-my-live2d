import axios from 'axios';
import { AxiosResponse } from 'axios';

const printResult = (res: AxiosResponse) => {
  console.log(res.config.url + ' 已被刷新');
};

axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/index.min.js').then(printResult);
axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism2.min.js').then(printResult);
axios.get('https://purge.jsdelivr.net/npm/oh-my-live2d/dist/oml-cubism4.min.js').then(printResult);

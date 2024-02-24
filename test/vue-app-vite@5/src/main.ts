import { loadOhMyLive2D } from 'oh-my-live2d';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

loadOhMyLive2D({
  source: 'https://cdn.jsdelivr.net',
  models: {
    path: '/gh/Eikanya/Live2d-model/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF%20girls%20Frontline/live2dold/gun/mk23_8/normal/model.json'
  }
});

createApp(App).mount('#app');

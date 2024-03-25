<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { loadOml2d } from 'oh-my-live2d';
const oml2d = ref();

onMounted(() => {
  loadOml2d({
    parentElement: oml2d.value,
    primaryColor: 'pink',
    sayHello: false,
    models: [
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
        position: [-10, 20]
      },
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
        scale: 0.4,
        position: [0, 50],
        stageStyle: {
          height: 300
        }
      }
    ],

    tips: {
      idleTips: {
        wordTheDay: (wordTheDayData) => {
          return wordTheDayData.hitokoto;
        }
      }
    }
  });
});
</script>

<template>
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <a href="https://vuejs.org/" target="_blank">
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </a>
  <HelloWorld msg="Vite + Vue" />
  <div ref="oml2d"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

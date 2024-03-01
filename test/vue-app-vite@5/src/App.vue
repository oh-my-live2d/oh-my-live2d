<script setup lang="ts">
import { loadOml2d } from 'oh-my-live2d';
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const appRef = ref();

onMounted(() => {
  loadOml2d({
    parentElement: appRef.value,
    models: [
      {
        path: 'https://model.oml2d.com/pio/model.json',
        scale: 0.5
      }
    ]
  });
});
</script>

<template>
  <div ref="appRef">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
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

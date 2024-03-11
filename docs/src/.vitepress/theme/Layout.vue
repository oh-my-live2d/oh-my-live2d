<script setup lang="ts">
import { onMounted } from 'vue';
// 这里拿到主题提供的Layout, 并在 `template` 中挂载
import BlogTheme from '@sugarat/theme';
const Layout = BlogTheme.Layout;

onMounted(async () => {
  // 在这里动态导入 `oh-my-live2d`, 并调用 `loadOml2d` 方法
  const { loadOml2d } = await import('oh-my-live2d');

  // 在这里使用
  loadOml2d({
    // ... configure
    models: [
      {
        path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
      }
    ]
  });
});
</script>

<template>
  <Layout />
</template>

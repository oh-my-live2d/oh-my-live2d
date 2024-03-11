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
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
      },
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
        scale: 0.4,
        position: [0, 50],
        stageStyle: {
          height: 300
        }
      }
    ]
  });
});
</script>

<template>
  <Layout />
</template>

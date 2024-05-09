<script setup lang="ts">
import { loadOml2d } from 'oh-my-live2d'
import { onMounted, ref } from 'vue'
const oml2dRef = ref<HTMLElement>()

onMounted(() => {
  const oml2d = loadOml2d({
    parentElement: oml2dRef.value,
    models: [
      {
        path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
        position: [-10, 20]
      },
      {
        path: 'https://model.oml2d.com/Pio/model.json',
        scale: 0.4,
        position: [0, 50],
        stageStyle: {
          height: 300
        }
      }
    ]
  })

  console.log(oml2d.version)
})
</script>

<script lang="ts">
export default { name: 'oh-my-live2d' }
</script>

<template>
  <div class="oh-my-live2d" ref="oml2dRef"></div>
</template>

<style scoped></style>

<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
onBeforeMount(() => {
  import("oh-my-live2d").then((module) => {
    module.loadOml2d(omlOptions);
  });
});
</script>

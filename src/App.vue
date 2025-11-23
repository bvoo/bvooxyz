<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, watch } from 'vue';
import Home from './views/Home.vue';
import ProjectDetail from './views/ProjectDetail.vue';

const route = useRoute();
const isProjectRoute = computed(() => route.name === 'project');

watch(isProjectRoute, (isProject) => {
  if (isProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, { immediate: true });
</script>

<template>
  <div class="app-wrapper">
    <div class="home-layer" :class="{ blurred: isProjectRoute }">
      <Home />
    </div>
    <ProjectDetail v-if="isProjectRoute" />
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
}

.home-layer {
  transition: filter 0.3s ease;
}

.home-layer.blurred {
  filter: blur(8px);
  pointer-events: none;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0s;
}

::view-transition-group(*) {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

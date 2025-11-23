<script setup lang="ts">
</script>

<template>
  <div class="background">
    <div class="grid-overlay"></div>
    <div class="glow-overlay"></div>
  </div>
</template>

<style scoped>
.background {
  position: absolute;
  inset: 0; /* top:0; left:0; right:0; bottom:0 */
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: var(--bg-color);
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
  opacity: 0.5;
}

.glow-overlay {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 40%);
  animation: pulse 10s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.1); opacity: 0.8; }
}
</style>

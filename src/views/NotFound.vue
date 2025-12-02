<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}
</script>

<template>
  <main class="notfound" aria-labelledby="notfound-title">
    <div class="notfound-inner">
      <p class="notfound-eyebrow">404 · Not found</p>
      <h1 id="notfound-title">This route doesn't exist (yet).</h1>
      <p class="notfound-body">
        The page you're looking for isn't here. Check the URL, or head back to the projects on the home page.
      </p>
      <button class="cta-button" type="button" @click="goHome">
        Back to home
        <span class="cta-icon">→</span>
      </button>
    </div>
  </main>
</template>

<style scoped>
.notfound {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
}

.notfound-inner {
  max-width: 560px;
  width: 100%;
  border: 1px solid var(--border-color);
  background:
    radial-gradient(circle at top left, var(--accent-glow), transparent 55%),
    var(--card-bg);
  padding: 32px 28px 40px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.02),
    0 40px 80px rgba(0, 0, 0, 0.9);
}

.notfound-eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

h1 {
  font-size: 2rem;
  line-height: 1.1;
  margin-bottom: 16px;
}

.notfound-body {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 28px;
}
</style>

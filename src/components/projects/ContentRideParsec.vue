<template>
  <div class="content">
    <h2>About RideParsec</h2>
    <p>
      An e-commerce website built on a headless Shopify storefront.
      Designed to provide a unique shopping experience with custom interactions and fast performance.
    </p>
    
    <h2>Key Features</h2>
    <ul>
      <li><ArrowRight class="list-icon" /> Headless Shopify integration</li>
      <li><ArrowRight class="list-icon" /> Custom product configurators</li>
      <li><ArrowRight class="list-icon" /> Optimized for conversion</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>

<style scoped>
.content {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
}

.content h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin: 32px 0 16px;
}

.content p {
  margin-bottom: 16px;
}

.content ul {
  list-style: none;
  padding: 0;
}

.content li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
}

.list-icon {
  width: 1.2em;
  height: 1.2em;
  color: white;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 2px;
}
</style>

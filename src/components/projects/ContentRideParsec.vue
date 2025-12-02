<template>
  <ProjectTemplate :project="project">
    <template #image>
      <div class="image-placeholder">
        <video 
          src="/images/projects/rideparsec/rideparsec.mp4" 
          autoplay 
          loop 
          muted 
          playsinline 
          class="project-image"
        />
      </div>
    </template>
    <template #content>
      <h2>About RideParsec</h2>
      <p>
        I built a custom, high-performance e-commerce storefront for RideParsec to replace their standard Shopify theme.
        By decoupling the frontend from the backend (Headless Shopify), the site achieves significantly faster load times
        and offers total creative freedom over the user experience.
      </p>
      <p>
        The site features smooth page transitions, custom product configurators for complex bike parts, and a 
        streamlined checkout process that integrates seamlessly with Shopify's payment processing.
      </p>
      
      <h2>Technical Highlights</h2>
      <ul>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Headless Architecture:</strong> Vue.js frontend communicating with the Shopify Storefront API via GraphQL.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Custom Configurators:</strong> Interactive UI for building custom bike configurations with real-time stock validation.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Performance:</strong> Extremely fast global page loads and optimized asset delivery using Vite and Cloudflare Pages.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Custom Analytics:</strong> Integrated Plausible-based analytics platform to track conversions, user flows, and campaign performance.
          </span>
        </li>
      </ul>
    </template>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import ProjectTemplate from '../ProjectTemplate.vue';
import type { Project } from '../../data/projects';

defineProps<{
  project: Project;
}>();
</script>

<style scoped>
.image-placeholder {
  width: 100%;
  min-height: 300px;
  background: #111;
  border: 1px solid var(--border-color);
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
}

h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin: 32px 0 16px;
}

p {
  margin-bottom: 16px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
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

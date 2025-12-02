<template>
  <ProjectTemplate :project="project">
    <template #image>
      <div class="image-placeholder">
        <img 
          src="/images/projects/mtgprice/blacklotus.png" 
          alt="Black Lotus price chart"
          class="project-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </template>
    <template #content>
      <h2>About MTG Price Tracker</h2>
      <p>
        A clean, modern price tracking dashboard for Magic: The Gathering cards. 
        This project serves as a better frontend for price data, focusing on readability and data visualization.
        It helps collectors and players track the value of their collections over time.
      </p>
      
      <h2>Technical Highlights</h2>
      <ul>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Data Visualization:</strong> Interactive charts showing price history and trends using lightweight charting libraries.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>React & Tailwind:</strong> A highly responsive UI that looks great on mobile and desktop.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Multi-source Data:</strong> Aggregates price history from four different data sources for more reliable trends.
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

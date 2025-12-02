<template>
  <ProjectTemplate :project="project">
    <template #image></template>
    <template #content>
      <h2>About Traction</h2>
      <p>
        Traction is a competitive intelligence tool for e-commerce businesses. It automates the process of tracking 
        competitor pricing, inventory levels, and product changes.
      </p>
      <p>
        Users can add competitor URLs, and the system periodically crawls these sites to detect changes, 
        alerting users to price drops or new product launches in their niche.
      </p>
      
      <h2>Technical Highlights</h2>
      <ul>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Convex:</strong> Real-time backend-as-a-service for instant data sync to the dashboard.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Firecrawl:</strong> Robust web scraping infrastructure to handle dynamic e-commerce sites.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Automated Workflows:</strong> Scheduled jobs for periodic data refresh and change detection.
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

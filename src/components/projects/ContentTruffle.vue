<template>
  <ProjectTemplate :project="project">
    <template #content>
      <h2>About Truffle.vip</h2>
      <p>
        Truffle is a comprehensive monetization platform for content creators. While working there, I led the development of systems that scaled to support 
        over 100,000 concurrent users connected via WebSockets, enabling creators to earn revenue through custom browser extensions and integrated tools 
        on Twitch and YouTube.
      </p>
      
      <h2>Technical Highlights</h2>
      <ul>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Rust Backend:</strong> High-performance backend services handling hundreds of thousands of concurrent requests.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Postgres:</strong> Complex schema design for user entitlements, payments, and analytics.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Platform APIs:</strong> Deep integration with Internal APIs, Twitch Helix API, and YouTube Data API.
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

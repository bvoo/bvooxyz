<template>
  <ProjectTemplate :project="project">
    <template #image>
      <div class="image-placeholder">
        <img 
          src="/images/projects/krypton/krypton.png" 
          alt="krypton.sh search interface"
          class="project-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </template>
    <template #content>
      <h2>About krypton.sh</h2>
      <p>
        Krypton is a comprehensive database for arcade ROMs, designed to be the fastest way to find arcade game ROMs and metadata.
        It solves the problem of navigating complex MAME versioning and parent/clone relationships.
      </p>
      <p>
        The application prioritizes speed above all else, returning search results instantly as you type, 
        across a dataset of tens of thousands of ROMs.
      </p>
      
      <h2>Technical Highlights</h2>
      <ul>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Meilisearch:</strong> Implemented for fuzzy, millisecond-speed search queries, hosted on Railway.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Optimized UX:</strong> Extremely fast and accurate search results, optimized for query relevancy.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" />
          <span>
            <strong>Performance:</strong> Hyper fast download speeds, thanks to global caching through both AWS Cloudfront and Cloudflare.
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

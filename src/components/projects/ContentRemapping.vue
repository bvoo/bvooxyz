<template>
  <ProjectTemplate :project="project">
    <template #image>
      <div class="image-placeholder">
        <img 
          src="/images/projects/remapping/remapping.png" 
          alt="re.mapping Interface"
          class="project-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </template>
    <template #content>
      <h2>About remapp.ing</h2>
      <p>
        <i>remapp.ing</i> is a modern, driverless configuration tool designed for Haybox-based arcade controllers. 
        Unlike traditional configuration software that requires downloading and installing native applications, 
        <i>remapp.ing</i> leverages the browser's WebSerial API to communicate directly with hardware.
      </p>
      <p>
        The goal was to create a "plug and play" experience that works instantly on any computer with a modern browser.
        Users can remap buttons, adjust various settings, and interact over a serial console without leaving the web page.
      </p>
      
      <h2>Technical Highlights</h2>
      <ul>
        <li>
          <ArrowRight class="list-icon" /> 
          <span>
            <strong>WebSerial API:</strong> Direct browser-to-hardware communication without drivers.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" /> 
          <span>
            <strong>Vue 3 & TypeScript:</strong> Built for type-safe, reactive state management of complex device configurations.
          </span>
        </li>
        <li>
          <ArrowRight class="list-icon" /> 
          <span>
            <strong>Binary Protocol:</strong> Implements the custom Haybox binary protocol for efficient data transfer.
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

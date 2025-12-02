<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { getProjectBySlug } from '../data/projects';

const route = useRoute();

const slug = computed(() => route.params.slug as string);
const project = computed(() => getProjectBySlug(slug.value));

// Dynamically import all content components
const modules = import.meta.glob('../components/projects/Content*.vue');
const componentMap: Record<string, any> = {};

// Pre-build the map by normalizing filenames
for (const path in modules) {
  const fileName = path.split('/').pop() || '';
  // Remove 'Content' prefix and .vue extension (e.g., ContentRideParsec.vue -> RideParsec)
  const name = fileName.replace(/^Content|\.vue$/g, '');
  // Normalize to lowercase for matching (e.g., RideParsec -> rideparsec)
  const key = name.toLowerCase();
  componentMap[key] = defineAsyncComponent(modules[path] as any);
}

const ProjectContent = computed(() => {
  if (!slug.value) return null;
  // Normalize current slug to match map keys (e.g., mtg-price-tracker -> mtgpricetracker)
  const normalizedSlug = slug.value.replace(/-/g, '').toLowerCase();
  return componentMap[normalizedSlug] || null;
});
</script>

<template>
  <component 
    :is="ProjectContent" 
    v-if="ProjectContent && project" 
    :project="project"
  />
</template>

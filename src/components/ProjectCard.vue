<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap';

const props = defineProps<{
  title: string;
  slug: string;
  description: string;
  link?: string;
  tags: string[];
}>();

function getTransitionName(suffix: string) {
  return `${props.slug}-${suffix}`;
}

const plusIconRef = ref<HTMLElement | null>(null);

function onMouseEnter() {
  gsap.to(plusIconRef.value, {
    scale: 1.05,
    duration: 0.4,
    ease: 'back.out(1.7)'
  });
}

function onMouseLeave() {
  gsap.to(plusIconRef.value, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  });
}
</script>

<template>
  <div 
    class="project-card" 
    role="button"
    tabindex="0"
    @click="$emit('click')" 
    @keydown.enter="$emit('click')"
    @keydown.space.prevent="$emit('click')"
    @mouseenter="onMouseEnter" 
    @mouseleave="onMouseLeave"
  >
    <div class="card-content">
      <div class="header">
        <h3 :style="{ viewTransitionName: getTransitionName('title') }">{{ title }}</h3>
      </div>
      <p :style="{ viewTransitionName: getTransitionName('desc') }">{{ description }}</p>
      <div class="tags" :style="{ viewTransitionName: getTransitionName('tags') }">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="corner-plus" ref="plusIconRef"></div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 24px;
  cursor: pointer;
  height: 100%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  position: relative;
}

.project-card:hover,
.project-card:focus-visible {
  /* border-color: var(--accent-color); */
  border-color: white;
  box-shadow: 0 0 20px rgba(121, 40, 202, 0.1);
  transform: translateY(-2px);
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.tag {
  font-size: 0.75rem;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #222;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.project-card:hover .tag,
.project-card:focus-visible .tag {
  color: var(--text-color);
  border-color: #444;
}

.corner-plus {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  border: 1px solid #888;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover .corner-plus,
.project-card:focus-visible .corner-plus {
  opacity: 1;
  /* border-color: var(--accent-color); */
  border-color: white;
  box-shadow: 0 0 10px rgba(121, 40, 202, 0.2);
}

.corner-plus::before,
.corner-plus::after {
  content: '';
  position: absolute;
  background-color: #888;
  transition: background-color 0.3s ease;
}

.project-card:hover .corner-plus::before,
.project-card:hover .corner-plus::after,
.project-card:focus-visible .corner-plus::before,
.project-card:focus-visible .corner-plus::after {
  /* background-color: var(--accent-color); */
  background-color: white;
}

.corner-plus::before {
  width: 16px;
  height: 1px;
}

.corner-plus::after {
  width: 1px;
  height: 16px;
}
</style>

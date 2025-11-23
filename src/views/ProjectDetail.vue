<script setup lang="ts">
import { computed, onMounted, onUnmounted, nextTick, defineAsyncComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import gsap from 'gsap';
import Background from '../components/Background.vue';
import { getProjectBySlug } from '../data/projects';
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

const slug = computed(() => route.params.slug as string);
const project = computed(() => getProjectBySlug(slug.value));

const contentComponents: Record<string, any> = {
  'remapping': defineAsyncComponent(() => import('../components/projects/ContentRemapping.vue')),
  'rideparsec': defineAsyncComponent(() => import('../components/projects/ContentRideParsec.vue')),
  'mtg-price-tracker': defineAsyncComponent(() => import('../components/projects/ContentMtgPriceTracker.vue')),
  'krypton': defineAsyncComponent(() => import('../components/projects/ContentKrypton.vue')),
  'truffle': defineAsyncComponent(() => import('../components/projects/ContentTruffle.vue')),
  'traction': defineAsyncComponent(() => import('../components/projects/ContentTraction.vue')),
};

const ProjectContent = computed(() => {
  if (!slug.value) return null;
  return contentComponents[slug.value] || null;
});

function goBack() {
  router.push('/');
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') goBack();
}

onMounted(async () => {
  await nextTick();
  window.addEventListener('keydown', handleKeydown);
  gsap.to('.project-detail', { opacity: 1, duration: 0.3 });
  gsap.to(['.project-body > *', '.back-btn'], { 
    opacity: 1, 
    stagger: 0.1, 
    duration: 0.4, 
    delay: 0.1 
  });
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Background />
  
  <div v-if="project" class="page-wrapper">
    <div class="backdrop" @click="goBack" />
    
    <main class="container">
      <div class="project-detail" :style="{ viewTransitionName: `project-${slug}` }">
        <button class="back-btn" @click="goBack">
          <ArrowLeft class="icon" /> Back
        </button>
        
        <div class="project-header">
          <h1 :style="{ viewTransitionName: `${slug}-title` }">{{ project.title }}</h1>
          <p class="description" :style="{ viewTransitionName: `${slug}-desc` }">
            {{ project.description }}
          </p>
          <div class="tags" :style="{ viewTransitionName: `${slug}-tags` }">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>

        <div class="project-body">
          <div class="image-placeholder">
            <div class="placeholder-pattern" />
          </div>
          
          <component :is="ProjectContent" v-if="ProjectContent" />
          <div v-else class="content">
            <p>Content coming soon...</p>
          </div>

          <div class="actions">
            <a v-if="project.link" :href="project.link" target="_blank" class="btn primary">
              <ArrowUpRight class="icon" /> Visit Project
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-detail {
  background: #0a0a0a;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  opacity: 0;
}

.back-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 32px;
  transition: color 0.2s;
  opacity: 0;
}

.back-btn:hover {
  color: var(--text-color);
}

.project-header {
  margin-bottom: 32px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  background: linear-gradient(to right, #fff, #aaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.8rem;
  padding: 4px 12px;
  background: rgba(121, 40, 202, 0.1);
  border: 1px solid rgba(121, 40, 202, 0.3);
  color: #d0a9f5;
}

.project-body > * {
  opacity: 0;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: #111;
  border: 1px solid var(--border-color);
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;
}

.placeholder-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#222 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.5;
}

.content {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
}

.btn.primary {
  display: inline-block;
  background: var(--text-color);
  color: var(--bg-color);
  padding: 12px 24px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.btn.primary:hover {
  background: #ccc;
  transform: translateY(-2px);
}

.icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: middle;
  margin-right: 6px;
  display: inline-block;
}
</style>

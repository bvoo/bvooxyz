<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import gsap from 'gsap';
import Background from '../components/Background.vue';
import ProjectCard from '../components/ProjectCard.vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';
import Footer from '../components/Footer.vue';
import { projects } from '../data/projects';

const router = useRouter();
const route = useRoute();
const activeSection = ref('projects');

function navigateToProject(slug: string) {
  router.push(`/projects/${slug}`);
}

onMounted(async () => {
  await nextTick();
  
  gsap.from('.project-card-wrapper', {
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.2
  });
});
</script>

<template>
  <Background />
  
  <main id="main-content" class="container" tabindex="-1">
    <header>
      <div class="logo">bvoo.xyz</div>
      <nav aria-label="Main navigation">
        <a href="#projects" :aria-current="activeSection === 'projects' ? 'true' : undefined">Projects</a>
        <a href="#about" :aria-current="activeSection === 'about' ? 'true' : undefined">About</a>
        <a href="#contact" :aria-current="activeSection === 'contact' ? 'true' : undefined">Contact</a>
      </nav>
    </header>

    <HeroSection />

    <section id="projects" class="projects-grid" tabindex="-1">
      <div class="grid">
        <div 
          v-for="project in projects" 
          :key="project.slug"
          class="project-card-wrapper"
          :data-project-slug="project.slug"
          :style="{ viewTransitionName: route.params.slug === project.slug ? 'none' : `project-${project.slug}` }"
        >
          <ProjectCard v-bind="project" @click="navigateToProject(project.slug)" />
        </div>
      </div>
    </section>

    <AboutSection />
    
    <ContactSection />
    
    <Footer />
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  margin-bottom: 80px;
}

.logo {
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -1px;
}

nav {
  display: flex;
  gap: 24px;
}

nav a {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}

nav a:hover {
  color: var(--text-color);
}

.projects-grid {
  margin-bottom: 120px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
}
</style>

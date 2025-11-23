<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function onCardEnter(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  gsap.to(card, {
    scale: 1.02,
    duration: 0.4,
    ease: 'back.out(1.7)'
  });
}

function onCardLeave(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  gsap.to(card, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  });
}

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

onMounted(() => {
  gsap.from('.about-content > *', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 80%'
    }
  });
});
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <h2>About Me</h2>
      <p class="about-intro">
        I work across the full spectrum. Full-stack software, PCB design, manufacturing. I work on 0-to-1 projects or join existing teams, adapting to whatever the project needs. Feel free to <span class="link" @click="scrollToContact">inquire</span> about any of my projects or to ask about my availability and experience.
      </p>
      
      <div class="skills-grid">
        <div class="skill-category" @mouseenter="onCardEnter" @mouseleave="onCardLeave">
          <h3>Frontend</h3>
          <ul>
            <li>Vue / React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
          </ul>
        </div>
        
        <div class="skill-category" @mouseenter="onCardEnter" @mouseleave="onCardLeave">
          <h3>Backend</h3>
          <ul>
            <li>Node / Rust / Python</li>
            <li>REST / GraphQL</li>
            <li>SQL / NoSQL</li>
          </ul>
        </div>
        
        <div class="skill-category" @mouseenter="onCardEnter" @mouseleave="onCardLeave">
          <h3>Cloud & DevOps</h3>
          <ul>
            <li>AWS, GCP, Cloudflare</li>
            <li>CI/CD</li>
            <li>Kubernetes</li>
          </ul>
        </div>
        
        <div class="skill-category" @mouseenter="onCardEnter" @mouseleave="onCardLeave">
          <h3>Hardware & Mfg</h3>
          <ul>
            <li>PCB EDA</li>
            <li>DFM & DFA</li>
            <li>Production</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  margin-bottom: 120px;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
}

.about-content h2 {
  font-size: 2.5rem;
  margin-bottom: 24px;
  background: linear-gradient(to right, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.about-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 48px;
}

.about-intro .link {
  color: var(--text-secondary);
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;
}

.about-intro .link:hover {
  color: white;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.skill-category {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  padding: 24px;
}

.skill-category:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--text-secondary);
}

.skill-category h3 {
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: var(--text-color);
}

.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-category li {
  color: var(--text-secondary);
  padding: 6px 0;
  font-size: 0.95rem;
}
</style>

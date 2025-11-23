<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { projects } from '../data/projects';
import { useDiscordCopy } from '../composables/useDiscordCopy';

const router = useRouter();
const { copyDiscord, copied } = useDiscordCopy();
const showDiscordTooltip = ref(false);

function navigateToProject(slug: string) {
  router.push(`/projects/${slug}`);
}

function handleCopy() {
  copyDiscord();
  showDiscordTooltip.value = true;
  setTimeout(() => {
    showDiscordTooltip.value = false;
  }, 2000);
}
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-column contact-column">
        <h3>Contact</h3>
        <div class="footer-links">
          <a href="mailto:kaitlyn@bvoo.xyz">Email</a>
          <a href="https://github.com/bvoo" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/bvoo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/bvoowo" target="_blank" rel="noopener noreferrer">Twitter</a>
          <div 
            class="discord-link"
            @click="handleCopy"
            @mouseenter="showDiscordTooltip = true"
            @mouseleave="!copied && (showDiscordTooltip = false)"
          >
            Discord
            <div class="tooltip" :class="{ visible: showDiscordTooltip }">
              {{ copied ? 'Copied!' : '@bvoo' }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-column projects-column">
        <h3>Projects</h3>
        <div class="footer-links">
          <a 
            v-for="project in projects" 
            :key="project.slug" 
            href="#" 
            @click.prevent="navigateToProject(project.slug)"
          >
            {{ project.title }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-color);
  padding: 40px 0 20px;
  margin-top: 40px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.02));
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.footer-column h3 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  font-weight: 600;
}

.projects-column {
  text-align: right;
}

.projects-column h3 {
  text-align: right;
}

.contact-column .footer-links {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 8px 32px;
  justify-content: start;
}

.projects-column .footer-links {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 8px 32px;
  justify-content: end;
}

.projects-column .footer-links a {
  text-align: right;
  width: 100%;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links a, .discord-link {
  color: var(--text-secondary);
  font-size: 1rem;
  transition: all 0.2s ease;
  text-decoration: none;
  width: fit-content;
  cursor: pointer;
  position: relative;
}

.footer-links a:hover, .discord-link:hover {
  color: var(--text-color);
  font-weight: 600;
}

.tooltip {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(10px);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--text-color);
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  white-space: nowrap;
  z-index: 10;
  font-weight: normal;
}

.tooltip.visible {
  opacity: 1;
  transform: translateY(-50%) translateX(15px);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.brand {
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: -1px;
  cursor: pointer;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .contact-column .footer-links,
  .projects-column .footer-links {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 360px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .projects-column,
  .projects-column h3 {
    text-align: right;
  }

  .contact-column .footer-links,
  .projects-column .footer-links {
    display: flex;
    align-items: flex-start;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .tooltip {
    left: auto;
    right: -10px;
    top: -30px;
    transform: translateX(0);
  }
  
  .tooltip.visible {
    transform: translateY(-5px);
  }
}
</style>

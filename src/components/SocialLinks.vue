<script setup lang="ts">
import { ref } from 'vue';
import { Mail } from 'lucide-vue-next';
import { useDiscordCopy } from '../composables/useDiscordCopy';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconDiscord from './icons/IconDiscord.vue';

const emit = defineEmits<{
  emailClick: [event: MouseEvent];
}>();

const { copyDiscord, copied: discordCopied } = useDiscordCopy();

const activeTooltip = ref<string | null>(null);
const showDiscordTooltip = ref(false);
</script>

<template>
  <div class="social-links">
    <a 
      href="mailto:kaitlyn@bvoo.xyz" 
      class="social-link" 
      aria-label="Email"
      @click="emit('emailClick', $event)"
      @mouseenter="activeTooltip = 'email'"
      @mouseleave="activeTooltip = null"
    >
      <Mail />
      <transition name="fade">
        <span v-if="activeTooltip === 'email'" class="social-tooltip">kaitlyn@bvoo.xyz</span>
      </transition>
    </a>
    <a 
      href="https://github.com/bvoo" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="social-link" 
      aria-label="GitHub"
      @mouseenter="activeTooltip = 'github'"
      @mouseleave="activeTooltip = null"
    >
      <IconGithub />
      <transition name="fade">
        <span v-if="activeTooltip === 'github'" class="social-tooltip">@bvoo</span>
      </transition>
    </a>
    <a 
      href="https://linkedin.com/in/bvoo" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="social-link" 
      aria-label="LinkedIn"
      @mouseenter="activeTooltip = 'linkedin'"
      @mouseleave="activeTooltip = null"
    >
      <IconLinkedin />
      <transition name="fade">
        <span v-if="activeTooltip === 'linkedin'" class="social-tooltip">/in/bvoo</span>
      </transition>
    </a>
    <a 
      href="https://twitter.com/bvoowo" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="social-link" 
      aria-label="Twitter"
      @mouseenter="activeTooltip = 'twitter'"
      @mouseleave="activeTooltip = null"
    >
      <IconTwitter />
      <transition name="fade">
        <span v-if="activeTooltip === 'twitter'" class="social-tooltip">@bvoowo</span>
      </transition>
    </a>
    <div 
      class="social-link discord-trigger" 
      role="button"
      tabindex="0"
      aria-label="Discord"
      @mouseenter="showDiscordTooltip = true"
      @mouseleave="showDiscordTooltip = false"
      @click="copyDiscord"
      @keydown.enter="copyDiscord"
      @keydown.space.prevent="copyDiscord"
    >
      <IconDiscord />
      <transition name="fade">
        <span v-if="showDiscordTooltip" class="discord-tooltip">
          {{ discordCopied ? 'Copied!' : '@bvoo' }}
        </span>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
}

.social-link {
  color: var(--text-secondary);
  transition: all 0.2s ease;
  padding: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.social-link:hover {
  color: var(--text-color);
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--border-color);
  transform: translateY(-2px);
}

.discord-trigger {
  cursor: pointer;
}

.social-tooltip,
.discord-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  white-space: nowrap;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  z-index: 10;
  color: var(--text-color);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

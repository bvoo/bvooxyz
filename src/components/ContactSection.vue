<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail } from 'lucide-vue-next';
import { useDiscordCopy } from '../composables/useDiscordCopy';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconDiscord from './icons/IconDiscord.vue';

gsap.registerPlugin(ScrollTrigger);

const { copyDiscord, copied: discordCopied } = useDiscordCopy();

const localCurrency = ref('USD');
const localAmount = ref<string | null>(null);
const showTooltip = ref(false);
const showDiscordTooltip = ref(false);

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(amount);
}

onMounted(async () => {
  // Currency conversion logic
  try {
    let userCurrency = 'USD';

    if (import.meta.env.DEV) {
      userCurrency = 'CAD';
    } else {
      try {
        const geoResponse = await fetch('/api/geolocation');
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          if (geoData.currency) {
            userCurrency = geoData.currency;
          }
        }
      } catch (e) {
        console.error('Failed to fetch geolocation', e);
      }
    }
    
    if (userCurrency && userCurrency !== 'USD') {
      localCurrency.value = userCurrency;
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await response.json();
      if (data && data.rates && data.rates[userCurrency]) {
        const rate = data.rates[userCurrency];
        localAmount.value = formatCurrency(3000 * rate, userCurrency);
      }
    }
  } catch (e) {
    console.error('Failed to fetch currency rates', e);
  }

  gsap.from('.contact-content > *', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 80%'
    }
  });
});
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact-content">
      <h2>Get in Touch</h2>
      <p class="contact-text">
        I'm currently available for freelance work and open to new opportunities.
        <br>
        <span class="min-engagement">
          Engagements typically start at 
          <span 
            class="currency-trigger"
            @mouseenter="showTooltip = true"
            @mouseleave="showTooltip = false"
          >
            $3,000 USD
            <transition name="fade">
              <span v-if="showTooltip && localAmount" class="currency-tooltip">
                ≈ {{ localAmount }}
              </span>
            </transition>
          </span>
        </span>
      </p>

      <div class="social-links">
        <a href="mailto:kaitlyn@bvoo.xyz" class="social-link" aria-label="Email">
          <Mail />
        </a>
        <a href="https://github.com/bvoo" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
          <IconGithub />
        </a>
        <a href="https://linkedin.com/in/bvoo" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
          <IconLinkedin />
        </a>
        <a href="https://twitter.com/bvoowo" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter">
          <IconTwitter />
        </a>
        <div 
          class="social-link discord-trigger" 
          aria-label="Discord"
          @mouseenter="showDiscordTooltip = true"
          @mouseleave="showDiscordTooltip = false"
          @click="copyDiscord"
        >
          <IconDiscord />
          <transition name="fade">
            <span v-if="showDiscordTooltip" class="discord-tooltip">
              {{ discordCopied ? 'Copied!' : '@bvoo' }}
            </span>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.contact-text {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 600px;
}

.min-engagement {
  display: block;
  margin-top: 8px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  opacity: 0.8;
}

.currency-trigger {
  border-bottom: 1px dashed var(--text-secondary);
  cursor: help;
  position: relative;
  color: var(--text-color);
}

.currency-tooltip {
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
  margin-bottom: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  z-index: 10;
}

.discord-trigger {
  position: relative;
  cursor: pointer;
}

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
}

.social-link:hover {
  color: var(--text-color);
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--border-color);
  transform: translateY(-2px);
}
</style>

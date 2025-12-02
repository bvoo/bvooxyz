<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import SocialLinks from './SocialLinks.vue';
import EmailModal from './EmailModal.vue';

const localCurrency = ref('USD');
const localAmount = ref<string | null>(null);
const showTooltip = ref(false);
const showEmailModal = ref(false);

function openEmailModal(event: MouseEvent) {
  event.preventDefault();
  showEmailModal.value = true;
}

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

      <SocialLinks @email-click="openEmailModal" />
    </div>

    <EmailModal :show="showEmailModal" @close="showEmailModal = false" />
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

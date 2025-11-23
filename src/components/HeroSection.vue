<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-vue-next';

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

onMounted(async () => {
  await nextTick();
  
  const h1Element = document.querySelector('.hero h1') as HTMLElement;
  const subtitleElement = document.querySelector('.subtitle') as HTMLElement;
  
  if (h1Element && subtitleElement) {
    const h1Text = 'hey.';
    const subtitleText = subtitleElement.textContent || '';
    
    h1Element.textContent = '';
    subtitleElement.textContent = '';
    gsap.set('.cta-button', { opacity: 0 });
    
    const timeline = gsap.timeline();
    
    h1Text.split('').forEach((_, i) => {
      timeline.call(() => {
        h1Element.innerHTML = h1Text.substring(0, i + 1) + '<span class="blink">|</span>';
      });
      timeline.to({}, { duration: 0.1 });
    });
    
    timeline.to({}, { duration: 0.1 });
    
    subtitleText.split('').forEach((_, i) => {
      timeline.call(() => {
        h1Element.innerHTML = h1Text;
        subtitleElement.innerHTML = subtitleText.substring(0, i + 1) + '<span class="blink">|</span>';
      });
      timeline.to({}, { duration: 0.02 });
    });
    
    timeline.call(() => {
      subtitleElement.innerHTML = subtitleText;
      h1Element.innerHTML = h1Text.slice(0, -1) + '<span class="blink">.</span>';
    });
    
    timeline.to('.cta-button', { opacity: 1, duration: 1 });
    
    timeline.call(() => {
      const blinkCursor = document.querySelector('.blink') as HTMLElement;
      if (blinkCursor) {
        gsap.set(blinkCursor, { opacity: 1 });
        
        const blinkTimeline = gsap.timeline({ repeat: -1 });
        blinkTimeline
          .to(blinkCursor, { opacity: 1, duration: 0 })
          .to(blinkCursor, { opacity: 1, duration: 1 })
          .to(blinkCursor, { opacity: 0, duration: 0 })
          .to(blinkCursor, { opacity: 0, duration: 1 });
      }
    });
  }
});
</script>

<template>
  <section class="hero">
    <h1>hey<span class="blink">.</span></h1>
    <p class="subtitle">i'm a software engineer with a focus on user experience, performance, and quick timelines.</p>
    <button @click="scrollToContact" class="cta-button">
      Work with me <ArrowRight class="cta-icon" />
    </button>
  </section>
</template>

<style scoped>
.hero {
  margin-bottom: 120px;
  min-height: 300px;
}

h1 {
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: -2px;
  background: linear-gradient(to bottom right, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  min-height: 4.4rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  min-height: 1.44rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0px;
  }
}
</style>

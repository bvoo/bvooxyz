<script setup lang="ts">
defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <transition name="fade">
    <div 
      v-if="show" 
      class="email-modal-backdrop" 
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-modal-title"
      @click.self="emit('close')"
      @keydown.escape="emit('close')"
    >
      <div class="email-modal">
        <h3 id="email-modal-title">Before you email</h3>
        <p>
          Email is great for scoped project details. For fastest back-and-forth though, Discord (@bvoo) is usually best.
          To help get the ball rolling, please include:
        </p>
        <ul>
          <li>1-2 sentences about what you want to build or work on.</li>
          <li>Rough timeline (e.g. "start in January", "ship in 6 weeks").</li>
          <li>Any budget range you're comfortable sharing.</li>
          <li>Relevant links (existing product, repo, designs, etc.).</li>
        </ul>
        <div class="email-modal-actions">
          <button type="button" class="email-modal-button" @click="emit('close')">
            Cancel
          </button>
          <a 
            href="mailto:kaitlyn@bvoo.xyz" 
            class="email-modal-button primary"
            @click="emit('close')"
          >
            Continue to email
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.email-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.email-modal {
  background: #050505;
  border: 1px solid var(--border-color);
  padding: 24px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8);
  text-align: left;
}

.email-modal h3 {
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.email-modal p {
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.email-modal ul {
  margin: 0 0 20px;
  padding-left: 18px;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.email-modal li + li {
  margin-top: 6px;
}

.email-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.email-modal-button {
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-secondary);
  padding: 8px 14px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
}

.email-modal-button.primary {
  background: var(--text-color);
  color: var(--bg-color);
}
</style>

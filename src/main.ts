import { createApp } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.css'
import App from './App.vue'
import router from './router'

// Register GSAP plugins once globally
gsap.registerPlugin(ScrollTrigger)

const app = createApp(App)
app.use(router)
app.mount('#app')

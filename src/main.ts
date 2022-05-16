import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import routes from 'virtual:generated-pages'
import { setGlobalOptions } from 'vue-request'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'echarts'

const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
setGlobalOptions({
  manual: true,
  throttleInterval: 500,
})
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(head)
app.mount('#app')

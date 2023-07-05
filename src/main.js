import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style.css'
import axios from './plugins/axios'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$axios = axios;

app.use(createPinia()).mount('#app')

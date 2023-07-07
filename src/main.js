import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue'
import './style.css'
import axios from './plugins/axios'
import router from './router';
import App from './App.vue'

const app = createApp(App);

app.config.globalProperties.$axios = axios;

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(pinia).use(router).mount('#app')

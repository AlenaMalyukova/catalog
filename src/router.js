import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './pages/MainPage.vue';
import CategoryPage from './pages/CategoryPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/category/:slug',  component: CategoryPage },
  ],
})
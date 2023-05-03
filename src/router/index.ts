import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/1pages/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
    },
  ],
});

export default router;
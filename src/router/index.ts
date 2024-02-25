import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'
import MeteorsView from '../views/meteors-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meteors',
      name: 'meteors',
      component: MeteorsView
    },,
  ]
})

export default router

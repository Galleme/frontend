import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Index from '../views/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/test/',
    component: Index,
    children: [
      {
        path: '',
        redirect: '/test/1'
      },
      {
        path: '1',
        component: () => import('@/views/index.vue')
      },
      {
        path: '2',
        component: () => import('@/views/index.vue')
      },
      {
        path: '3',
        component: () => import('@/views/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

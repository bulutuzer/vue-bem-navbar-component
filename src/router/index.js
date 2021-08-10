import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ana Sayfa',
    component: Home
  },
  {
    path: '/yatirimci-iliskileri/8',
    name: 'Yatırımcı İlişkileri',
    component: () => import('@/pages/about')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

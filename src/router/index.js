import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/signout',
    name: 'SignOut',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/ErrorView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

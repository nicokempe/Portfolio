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
    component: () => import('../views/rights/ImprintView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/rights/PrivacyPolicy.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/user/SignUpView.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/user/SignInView.vue')
  },
  {
    path: '/signout',
    name: 'SignOut',
    component: () => import('../views/user/SignOutView.vue')
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: () => import('../views/user/ForgetPasswordView.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/user/ProfileView.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/SignUpView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/user/SettingsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

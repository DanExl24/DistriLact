import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import MissingPassword from '@/views/auth/MissingPassword.vue'
import HomeView from '@/views/public/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path : '/', component : HomeView},
    { path : '/Login', component : Login },
    { path : '/Register', component : Register },
    { path : '/Missing' , component : MissingPassword},
  ],
})

export default router
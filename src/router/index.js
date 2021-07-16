import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        redirect: '/welcome'
    },
    {
        path: '/welcome',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

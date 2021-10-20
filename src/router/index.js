import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from '../pages/Home.vue'
import Donate from '../pages/Donate.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/donate',
        name: 'Donate',
        component: Donate
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

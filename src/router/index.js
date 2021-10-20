import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from '../pages/Home.vue'
import Donations from '../pages/Donations.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/donations',
        name: 'Donations',
        component: Donations
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

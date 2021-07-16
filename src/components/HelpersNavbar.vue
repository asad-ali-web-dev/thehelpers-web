<template>
    <div class="w-screen bg-white" style="box-shadow: 0px 3px 15px #16171C1C;">
        <div class="mx-24 h-[85px] flex flex-row items-center justify-center lg:justify-between">
            <div class="py-12">
                <img class="h-12" src="../assets/TheHelpers.svg" alt="The Helpers Logo SVG">
            </div>
            <div class="hidden lg:flex lg:flex-row lg:gap-8 lg:h-[85px] lg:items-center">
                <router-link class="flex items-center uppercase h-full px-6 text-[14px] text-helper-gray border-t-4 border-helper-yellow" v-for="(link, index) in navLinks" :key="index" :to="link.path">{{ link.name }}</router-link>
            </div>
        </div>
    </div>
    <div class="block lg:hidden fixed bottom-0 left-0 right-0">
        <div class="w-screen bg-helper-black h-[70px] flex flex-row items-stretch justify-start">
            <div v-for="(link, index) in navLinks" :key="index" @click="$router.push({ path: link.path })" class="cursor-pointer h-full w-full flex items-center justify-center" :class="{ 'bg-gray-900': linkActive }">
                <span v-if="$router.currentRoute.value.path === link.path" class="material-icons text-white">{{ link.icon }}</span>
                <span v-else class="material-icons-outlined text-white">{{ link.icon }}</span>
            </div>
        </div>
    </div>
    <div class="h-[65px] bg-helper-yellow hidden lg:flex flex-row items-center justify-center">
        <div class="flex flex-row items-center gap-7 h-full">
            <p class="text-white text-xl">Lorem ipsum dolor sit amet.</p>
            <button class="transition-all duration-500 capitalize px-4 hover:px-5 py-3 bg-white text-helper-yellow rounded-lg hover:shadow-lg">Donate Now</button>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'

export default {
    data: () => ({
        'navLinks': [
            { path: '/welcome', name: 'Home', icon: 'home' },
            { path: '/donations', name: 'Donations', icon: 'volunteer_activism' },
            { path: '/about', name: 'About', icon: 'info' },
            { path: '/contact', name: 'Contact', icon: 'mail' }
        ],
        linkActive: false,
        curIndex: -9
    })
}
</script>
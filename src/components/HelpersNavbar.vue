<template>
    <div class="fixed z-50 top-0 select-none">
        <div class="transition-all duration-700 w-screen bg-white" :class="{ 'shadow-2xl': isBelow }">
            <div class="mx-24 h-[85px] flex flex-row items-center justify-center lg:justify-between">
                <div class="py-12">
                    <img class="h-12 select-none" draggable="false" src="../assets/TheHelpers.svg" alt="The Helpers Logo SVG">
                </div>
                <div class="hidden lg:flex lg:flex-row lg:gap-8 lg:h-[85px] lg:items-center">
                    <router-link class="transition-all duration-500 flex items-center uppercase h-full px-6 text-[14px] border-helper-yellow" :class="{ 'border-t-8 text-helper-yellow': $router.currentRoute.value.path === link.path, 'text-helper-gray': $router.currentRoute.value.path !== link.path }" v-for="(link, index) in navLinks" :key="index" :to="link.path">{{ link.name }}</router-link>
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
    </div>
    <div class="hidden lg:block transition-all duration-1000 fixed z-20 top-0 h-[130px] w-full bg-red-400" :class="{ '-translate-y-full': isBelow }">
        <div class="relative w-full h-full">
            <div class="absolute bottom-0 h-[45px] w-full shadow-inner bg-helper-yellow hidden lg:flex flex-row items-center justify-center">
                <div class="flex flex-row items-center gap-7 h-full">
                    <p class="text-white text-lg capitalize">Considering to help others with your wealth</p>
                    <button @click="$router.push('/donate')" class="transition-all duration-500 capitalize px-4 hover:px-5 h-[calc(100%-10px)] bg-white text-helper-yellow rounded-md hover:shadow-lg">Donate Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        'navLinks': [
            { path: '/', name: 'Home', icon: 'home' },
            { path: '/donate', name: 'Donate', icon: 'volunteer_activism' },
            { path: '/about', name: 'About', icon: 'info' },
            { path: '/contact', name: 'Contact', icon: 'mail' }
        ],
        linkActive: false,
        curIndex: -9,
        scrollPosition: 0
    }),
    mounted() {
        window.addEventListener('scroll', () => {
            this.scrollPosition = window.scrollY
        })
    },
    computed: {
        isBelow() {
            return this.scrollPosition > 680
        }
    }
}
</script>
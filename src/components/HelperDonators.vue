<template>
    <h1 class="my-28 text-center text-5xl font-light text-helper-yellow">Recent Donations</h1>
    <div class="mb-10 w-full flex flex-row items-center justify-center">
        <div class="lg:grid lg:grid-cols-6 flex flex-col gap-14">
            <div v-for="(card, index) in 5" :key="index" class="group transition-all duration-700 relative cursor-pointer flex flex-col items-center justify-center p-6 w-80 h-80 rounded-md box" :class="{ 'col-span-2': index !== 3 || index !== 4, 'col-span-2 col-start-2': index === 3 }">
                <div class="transition-all duration-700 absolute z-20 inset-0 bg-gray-400/0 hover:bg-gray-400/40 rounded-md"></div>
                <div class="relative z-10 flex flex-col items-center gap-8">
                    <div class="group-hover:scale-[0.9] transition-all duration-700 w-32 h-32 bg-helper-yellow rounded-full bg-no-repeat bg-center bg-cover border-4 border-helper-yellow group-hover:border-helper-gray" style="background-image: url(https://i.pravatar.cc/300);"></div>
                    <h1 class="group-hover:scale-[0.9] transition-all duration-700 text-helper-yellow group-hover:text-helper-gray text-2xl font-medium font-montserrat">PADA Jazza</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full pb-12 flex flex-row items-center justify-center">
        <button class="transition-all duration-700 hover:scale-[1.1] mt-6 rounded-md shadow-xl py-4 px-8 bg-gray-700 hover:bg-helper-yellow text-xl font-bold text-white hover:text-yellow-900">See More</button>
    </div>
</template>

<style scoped>
.box {
    box-shadow: 0 5px 10px rgba(0,0,0,0.08),0 0 0 rgba(0,0,0,0.08) inset;
}
.box:hover {
    box-shadow: none;
}
</style>
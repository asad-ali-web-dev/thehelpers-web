<template>
    <div id="hero" class="select-none relative mt-20 lg:mt-32 w-full h-[46rem] bg-red-400 bg-no-repeat bg-center bg-cover">
        <div class="z-10 absolute inset-0 bg-gray-900/60"></div>
        <div class="z-20 relative w-full p-8 lg:p-0 h-full flex flex-col items-center justify-center gap-5 font-montserrat">
            <h1 class="text-white text-3xl lg:text-6xl font-bold text-center">Lorem ipsum dolor sit amet.</h1>
            <p class="text-white font-light text-xl lg:text-2xl max-w-[52ch] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum distinctio dignissimos illum.</p>
            <button class="transition-all duration-700 hover:scale-[1.1] mt-6 rounded-md shadow-xl py-4 px-8 bg-gray-700 hover:bg-helper-yellow text-xl font-bold text-white hover:text-yellow-900">Donate now</button>
        </div>
    </div>
</template>

<style>
#hero {
    background-image: url(../assets/hero-image.jpg);
}
</style>
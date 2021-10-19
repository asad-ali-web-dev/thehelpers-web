<template>
    <div class="mt-32 w-full h-[calc(100vh-140px)] p-5 mb-[30rem] md:mb-40 lg:mb-0">
        <div class="hidden lg:block relative lg:absolute lg:inset-0 lg:z-0">
            <iframe class="grayscale" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lahore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div class="relative lg:absolute lg:top-1/2 lg:right-0 lg:mr-28 lg:-translate-y-1/2 lg:z-10 w-full lg:w-[54rem] h-auto lg:py-12 lg:pl-6 lg:pr-12 lg:bg-white lg:shadow-xl lg:rounded-xl grid grid-cols-5 gap-y-10 lg:gap-x-20">
            <h1 class="capitalize text-xl md:text-4xl font-medium font-montserrat mb-9 col-span-4 pl-6 text-helper-yellow">Start a conversation</h1>
            <div class="col-span-5 lg:col-span-2 h-full">
                <div class="p-5 font-montserrat">
                    <h1 class="text-lg md:text-xl font-medium pb-3 flex flex-row items-center gap-4"> <span class="material-icons hidden md:block">phone</span> <span>Call Now</span></h1>
                    <p class="font-light text-sm md:text-lg ml-0 md:ml-10">+92 303 95 04 808</p>
                    <p class="font-light text-sm md:text-lg ml-0 md:ml-10">+92 302 97 88 441</p>
                    <p class="font-light text-sm md:text-lg ml-0 md:ml-10">+92 305 47 80 626</p>
                </div>
                <div class="p-5 font-montserrat">
                    <h1 class="text-lg md:text-xl font-medium pb-3 flex flex-row items-center gap-4"> <span class="material-icons hidden md:block">mail</span> <span>Email Now</span></h1>
                    <p class="font-light text-sm md:text-lg ml-0 md:ml-10">thehelpersociety@gmail.com</p>
                    <p class="font-light text-sm md:text-lg ml-0 md:ml-10">helpersf20@gmail.com</p>
                </div>
            </div>
            <div class="relative flex flex-col items-end gap-4 col-span-5 lg:col-span-3">
                <div class="relative w-full h-14 rounded-lg">
                    <input id="name" type="text" class="relative peer w-full h-full px-4 py-3 text-lg text-gray-500 shadow-inner focus:outline-none border-2 border-helper-gray rounded-lg" placeholder=" ">
                    <label for="#name" class="transition-all duration-500 absolute left-3 peer-placeholder-shown:left-5 top-0 -translate-y-1/2 bg-white peer-placeholder-shown:bg-transparent px-2 peer-placeholder-shown:px-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 whitespace-nowrap text-md peer-placeholder-shown:text-lg text-gray-800 peer-placeholder-shown:text-gray-500">Your Name</label>
                </div>
                <div class="relative w-full h-14 rounded-lg">
                    <input id="email" type="email" class="relative peer w-full h-full px-4 py-3 text-lg text-gray-500 shadow-inner focus:outline-none border-2 border-helper-gray rounded-lg" placeholder=" ">
                    <label for="#email" class="transition-all duration-500 absolute left-3 peer-placeholder-shown:left-5 top-0 -translate-y-1/2 bg-white peer-placeholder-shown:bg-transparent px-2 peer-placeholder-shown:px-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 whitespace-nowrap text-md peer-placeholder-shown:text-lg text-gray-800 peer-placeholder-shown:text-gray-500">Your Email</label>
                </div>
                <div class="relative w-full rounded-lg">
                    <textarea id="email" type="email" rows="5" class="relative peer w-full px-4 py-3 text-lg text-gray-500 shadow-inner focus:outline-none border-2 border-helper-gray rounded-lg" placeholder=" "></textarea>
                    <label for="#email" class="transition-all duration-500 absolute left-3 peer-placeholder-shown:left-5 top-0 -translate-y-1/2 bg-white peer-placeholder-shown:bg-transparent px-2 peer-placeholder-shown:px-0 peer-placeholder-shown:top-7 peer-placeholder-shown:-translate-y-1/2 whitespace-nowrap text-md peer-placeholder-shown:text-lg text-gray-800 peer-placeholder-shown:text-gray-500">Your Email</label>
                </div>
                <button class="px-5 py-3 max-w-min whitespace-nowrap text-xl font-montserrat font-light bg-helper-yellow rounded-lg transition-all duration-700 hover:drop-shadow-lg hover:scale-[0.9]">Send</button>
            </div>
        </div>
    </div>
</template>
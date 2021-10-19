<template>
    <div class="w-full mt-36">

        <div class="mt-52 mb-20 flex flex-col gap-y-6 justify-center items-center text-center p-8">

            <h1 class="text-6xl text-gray-600">Introduction</h1>
            <p class="text-2xl font-extralight text-gray-500 max-w-[60ch]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium corrupti omnis magni harum, nihil iusto. Nostrum, rem. Distinctio magni dolorum similique deserunt quas saepe numquam perspiciatis tempora quis, eius minus dignissimos rem officia dicta officiis impedit quaerat quidem sint laboriosam qui.</p>

        </div>

        <div class="flex flex-col gap-y-12 items-center justify-center mx-auto py-12 bg-gray-100">

            <h1 class="text-4xl font-bold text-gray-800 capitalize">Core Team</h1>

            <div class="flex flex-col lg:flex-row items-center justify-between gap-6 px-12">

                <div v-for="(member, index) in team" :key="index" class="w-auto lg:w-96 flex flex-col gap-y-3 justify-center items-center">
                    <div class="w-full h-72 bg-red-400"></div>
                    <h1 class="text-2xl font-medium text-gray-600">{{ member.name }}</h1>
                    <p>{{ member.description }}</p>
                    <button class="transition-all duration-700 hover:scale-[1.1] mt-6 rounded-md shadow-xl py-4 px-8 bg-gray-700 hover:bg-helper-yellow text-xl font-bold text-white hover:text-yellow-900">Contact Now</button>
                </div>

            </div>

        </div>

        <div class="w-[95%] h-96 mx-auto mt-12 border-4 border-helper-yellow flex flex-col justify-center items-center text-center gap-y-3 p-4">
            <h1 class="text-5xl text-gray-600">Join Us</h1>
            <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="relative w-full lg:w-[30rem] h-14 rounded-lg">
                <input id="email" type="email" class="relative peer w-full h-full px-4 py-3 text-lg text-gray-500 shadow-inner focus:outline-none border-2 border-helper-gray rounded-lg" placeholder=" ">
                <label for="#email" class="transition-all duration-500 absolute left-3 peer-placeholder-shown:left-5 top-0 -translate-y-1/2 bg-white peer-placeholder-shown:bg-transparent px-2 peer-placeholder-shown:px-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 whitespace-nowrap text-md peer-placeholder-shown:text-lg text-gray-800 peer-placeholder-shown:text-gray-500">Your Email</label>
            </div>
            <button class="transition-all duration-700 hover:scale-[1.1] mt-6 rounded-md shadow-xl py-4 px-8 bg-gray-700 hover:bg-helper-yellow text-xl font-bold text-white hover:text-yellow-900">Submit</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: "lorem ipsem", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est reiciendis iure facere voluptatibus.", contact: "+920000000000" },
                { name: "lorem ipsem", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est reiciendis iure facere voluptatibus.", contact: "+920000000000" },
                { name: "lorem ipsem", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est reiciendis iure facere voluptatibus.", contact: "+920000000000" }
            ]
        }
    }
}
</script>
<template>
    <div class="w-full mt-36">

        <div class="mt-52 mb-20 flex flex-col gap-y-6 justify-center items-center text-center p-8">

            <h1 class="text-6xl text-gray-600">Introduction</h1>
            <p class="text-2xl font-extralight text-gray-500 max-w-[60ch]"><strong>The Holy Prophet Hazrat Muhammad (P.B.U.H) said:</strong> The believer’s shade on the Day of Resurrection will be his charity.” (Al-Tirmidhi). Following the concept given by the respected Messenger and having the pain of humanity in our hearts, we established the foundation of our welfare society “The Helpers” on July 1,2021 among the few students at our respected institute FCIT. Since the day 
                <span v-if="read_more">
                    it came into existence we are constantly trying to help as more people as we can. From paying the educational dues of deserving students to arranging the grocery for the poor, we are making sure to serve the humanity in all the ways available to us. Our only purpose for establishing this society is to help the people unconditionally and sincerely because Allah, the Exalted, says, ‘Spend, O son of Adam, and I shall spend on you.’ (Al-Bukhari and Muslim).
                    Not only we want to serve the people ourselves, but also, we want to set up an organized system for this institute so that this effort will become way of heaven for all of us and even after our deaths, this system would be here to facilitate the deserving people. Currently, we have started at a very limited scope but we are hoping that by the support of the courteous and kind-hearted people soon we will be able to achieve our goal. Charity is the only treasure that will remain with us even after our death. Hazrat Muhammad, said: "When a man dies, his deeds come to an end except for three things: Sadqa Jariyah (ceaseless charity); a knowledge which is beneficial, or a virtuous descendant who prays for him (for the deceased)." (Muslim)
                    So, be a part of us by donating us now because your little contribution can better someone’s life and also of yours even after this temporary one!
                </span>
                <span v-else>
                    ...
                </span>
            </p>

            <div @click="expand" class="cursor-pointer text-blue-600 uppercase text-xl hover:tracking-wide">
                <span v-if="!read_more">Read More</span>
                <span v-else>Read Less</span>
            </div>

        </div>

        <div class="flex flex-col gap-y-12 items-center justify-center mx-auto py-12 bg-gray-100">

            <h1 class="text-4xl font-bold text-gray-800 capitalize">Core Team</h1>

            <div class="flex flex-col lg:flex-row items-center justify-between gap-6 px-12">

                <div v-for="(member, index) in team" :key="index" class="w-auto lg:w-96 flex flex-col gap-y-3 justify-center items-center">
                    <div class="w-full h-72 bg-red-400"></div>
                    <h1 class="text-2xl font-medium text-gray-600">{{ member.name }}</h1>
                    <p>{{ member.description }}</p>
                    <a :href="`https://wa.me/${member.contact}`" class="transition-all duration-700 hover:scale-[1.1] mt-6 rounded-md shadow-xl py-4 px-8 bg-gray-700 hover:bg-helper-yellow text-xl font-bold text-white hover:text-yellow-900">Contact Now</a>
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
                { name: "Shehzad Shifa", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est reiciendis iure facere voluptatibus.", contact: "923039504808" },
                { name: "Anss Raza", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est reiciendis iure facere voluptatibus.", contact: "923237231200" },
                { name: "Abbas Ali", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est reiciendis iure facere voluptatibus.", contact: "923054780626" }
            ],
            read_more: false
        }
    },
    methods: {
        expand() {
            this.read_more = !this.read_more;
        }
    }
}
</script>
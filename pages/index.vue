<template>
<div>
    <!-- part 1 -->
    <container>
        <div class="min-h-screen flex flex-col">
            <div class="flex-1 bg-no-repeat sm:bg-contain bg-right-bottom flex" :style="{ backgroundImage: `url(${bg.bg1})` }">
                <div class="flex-1 flex flex-col gap-6 sm:flex-row justify-center lg:items-center">
                    <div class="flex-1 flex items-center justify-center h-full p-6 md:p-12 lg:max-w-[600px]">
                        <div class="flex flex-col gap-y-8 text-center">
                            <div class="font-bold text-4xl lg:text-6xl">
                                <div>TASTE IT BABY!</div>
                                <div>TASTE IT BABY!</div>
                                <div>TASTE IT BABY!</div>
                            </div>
                            <div class="lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            <div>
                                <button class="bg-black text-[#e4ab00e8] px-6 py-2 uppercase">JETZT BESTELLEN</button>
                            </div>
                            <div class="hidden sm:flex justify-center items-center">
                                <button>***</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 flex lg:max-w-[800px]">
                        <div class="flex-1 flex justify-center items-center p-6 md:p-12">
                            <div class="flex justify-center items-center">
                                <img class="w-[280px] lg:w-[460px]" :src="img.edmund" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex sm:hidden justify-center items-center">
                    <button>***</button>
                </div>
            </div>
            <div class="bg-repeat" :style="{ backgroundImage: `url(${bg.AdobeStock})` }">
                <div class="text-white p-6 md:p-12 flex flex-col sm:flex-row sm:justify-around lg:items-center gap-6">
                    <div class="text-4xl flex font-bold sm:w-2/6 sm:justify-end lg:justify-center">
                        <div class="flex sm:flex-col lg:flex-row gap-3">
                            <div>REWE</div>
                            <div>EDEKA</div>
                        </div>
                    </div>
                    <div class="hidden sm:flex border lg:h-[140px]"></div>
                    <div class="flex flex-col gap-6 lg:gap-3 sm:w-3/6 lg:2/6">
                        <p class="capitalize text-sm">EDMUND IN DEINER NÄHE</p>
                        <h2 class="text-2xl font-bold">AUF DER SUCHE?</h2>
                        <p>Unsere Veganer Produkte von edmumd gibt es auch in deiner Nähe. Unsere Produkte warten zum Beispiel bei REWE, EDEKA oder Alnatura darauf, von dir vernascht zu werden.</p>
                        <button class="uppercase lg:hidden bg-white text-yellow-200 border-2 border-gray-400 py-2 px-4">Suppermarket finden</button>
                    </div>
                    <button class="uppercase hidden lg:block bg-white text-yellow-200 border-2 border-gray-400 py-2 px-4 w-2/6">Suppermarket finden</button>
                </div>
            </div>
        </div>
    </container>
    
    <!-- part 2 -->
    <container>
        <div class="bg-repeat bg-[#e96958] min-h-screen flex" :style="{ backgroundImage: `url(${bg.bg2})` }">
            <div class="flex-1 flex flex-col gap-6 p-6 md:p-12 lg:justify-center">
                <div class="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center">
                    <div class="flex-1 w-full lg:max-w-[800px]">
                        <div class="flex justify-center items-center p-6 md:p-12">
                            <div class="flex justify-center items-center">
                                <img class="2-[150px] lg:w-[400px]" :src="img.edmund1" alt="img">
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col gap-6 max-w-[400px] lg:max-w-[600px]">
                        <p class="text-sm capitalize">EDMUND MACHT DEN UNTERSCHIED</p>
                        <h2 class="text-4xl lg:text-6xl capitalize">DIR KOMMT NUR GUTES IN DEN MUND</h2>
                        <p class="text-sm">Unsere Veganer Produkte nicht neu erfunden. Aber fast. Mit Edmund haben wir Produkte entwickelt mit denen sparst du dir Unmengen an Milch, Zucker und künstlichen Zusatzstoffen, aber nicht den Genuss.</p>
                        <div class="xl:flex flex-wrap hidden">
                            <div v-for="(icon, index) in logo.icons" :key="`icons-${index}`" class="m-3">
                                <img class=" h-12" :src="icon.img" alt="icon">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex flex-wrap justify-around xl:hidden">
                        <div v-for="(icon, index) in logo.icons" :key="`icons-${index}`" class="m-3">
                            <img class="h-18" :src="icon.img" alt="icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </container>

    <!-- part 3 -->
    <container>
        <div class="min-h-screen flex flex-col justify-center gap-y-12 p-12 bg-white">
            <div class="max-w-[800px] mx-auto text-center flex flex-col gap-y-8 p-6">
                <div>GESCHMACKSABENTEUER</div>
                <div class="text-6xl">UNSERE SORTEN</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                <div>
                    <div class="flex max-w-[260px] mx-auto border-2 border-[#65A532]">
                        <div class="bg-white text-[#65A532] w-7/12 py-2">AUFSTRICHE</div>
                        <div class="bg-[#65A532] text-white w-5/12 py-2">SUPPEN</div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden flex justify-center">
                <div class="flex min-w-[1140px] m-auto">
                    <div v-for="(item, index) in img.part3.images" :key="`part-3-${index}`">
                        <img class="w-[300px]" :src="item.img" alt="img">
                    </div>
                </div>
            </div>
            <div class="flex justify-center gap-x-6">
                <button><img :src="img.part3.icons.arr_right" alt=""></button>
                <button><img :src="img.part3.icons.arr_left" alt=""></button>
            </div>
        </div>
    </container>

    <!-- part 4 -->
    <container>
        <div class="bg-repeat relative bg-[#7bb34e] min-h-screen flex p-6 lg:p-12 xl:p-20" :style="{ backgroundImage: `url(${bg.bg3})` }" >
                    <img class="absolute -top-32 left-64" :src="img.part3.nut" alt="nut">
                    <img class="absolute rotate-180 -top-12 left-6" :src="img.part3.nut" alt="nut">
                    <img class="absolute rotate-[90deg] bottom-32 -left-24" :src="img.part3.nut" alt="nut">
                    <img class="absolute rotate-[-70deg] -bottom-32 left-72" :src="img.part3.nut" alt="nut">
            <div class="flex-1" :style="{ backgroundImage: `url(${bg.AdobeStock})` }">
                <div class="w-full h-full bg-[#7e43ca96]">
                </div>
            </div>
        </div>
    </container>
    
</div>
</template>

<script>
import container from '../components/container.vue'
export default {
  components: { container },
  data(){
        return{
            bg: {
                bg1: require('@/assets/img/home/bg1.png'),
                bg2: require('@/assets/img/bg2.svg'),
                bg3: require('@/assets/img/bg3.svg'),
                AdobeStock: require('@/assets/img/home/AdobeStock.png'),
            },
            img: {
                edmund: require('@/assets/img/home/edmund_Suppe_Kartoffel.png'),
                edeka: require('@/assets/img/home/edeka-1.png'),
                edmund1: require('@/assets/img/home/Edmund_1_2491.jpg'),
                part3: {
                    images: [
                        {img: require('@/assets/img/home/part3/edmund_Suppe_Karotten.png')},
                        {img: require('@/assets/img/home/part3/edmund_Suppe_Kartoffel.png')},
                        {img: require('@/assets/img/home/part3/edmund_Suppe_Kürbis.png')},
                        {img: require('@/assets/img/home/part3/edmund_Suppe_Linsen.png')},
                    ],
                    icons: {
                        arr_right: require('@/assets/img/home/part3/arr_right.png'),
                        arr_left: require('@/assets/img/home/part3/arr_left.png'),
                    },
                    nut: require('@/assets/img/home/part3/nut.png'),
                },

            },
            logo: {
                icons: [
                    { id:1 , img: require('@/assets/img/home/icon/Edmund_Icons_glutenfrei.png')},
                    { id:2 , img: require('@/assets/img/home/icon/Edmund_Icons_laktosefrei.png')},
                    { id:3 , img: require('@/assets/img/home/icon/Edmund_Icons_ohne-kokosoel.png')},
                    { id:4 , img: require('@/assets/img/home/icon/Edmund_Icons_ohne-palmoel.png')},
                    { id:5 , img: require('@/assets/img/home/icon/Edmund_Icons_ohne-soja.png')},
                    { id:6 , img: require('@/assets/img/home/icon/Edmund_Icons_ohne-zusatzstoffe.png')},
                ]
            }
        }
    }
  }
</script>

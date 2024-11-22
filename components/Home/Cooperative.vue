<template>
    <div class="pt-[5.21vw] bg-cover bg-center" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(${home_bg3})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative flex flex-col ">
            <div class="w-full flex justify-between leading-[2.55vw] h-[3.07vw] text-[2.19vw] font-semibold">
                <div class="text-[#16212A]">合作单位</div>
                <div class="text-[#000000] opacity-20">Cooperative units</div>
            </div>
            <div class="mt-[2.6vw] w-full h-[32.08vw] pt-[3.13vw] pb-[2.5vw] px-[4.17vw] bg-white flex flex-col justify-between rounded-[1.04vw] text-[black] font-semibold text-[1.46vw]">
                <div class="flex justify-between text-center">
                    <div v-for="(item, index) in unitList" :key="index" class="flex flex-col items-center w-[10.63vw]">
                        <div class="h-[9.38vw] w-[9.38vw]">
                            <img :src="item.logo" :alt="item.name" srcset="">
                        </div>
                        <div class="h-[2.03vw] mt-[0.73vw]">{{ item.name }}</div>
                    </div>
                </div>
                <div class="flex justify-between text-center">
                    <div v-for="(item, index) in unitList2" :key="index" class="flex flex-col items-center w-[10.63vw]">
                        <div class="h-[9.38vw] w-[9.38vw]">
                            <img :src="item.logo" :alt="item.name" srcset="">
                        </div>
                        <div class="h-[2.03vw] mt-[0.73vw]">{{ item.name }}</div>
                    </div>
                </div>
                
            </div>    
        </div>
        
    </div>
</template>

<script setup lang="ts">
import home_bg3 from '@/assets/img/home_bg3.png'
import unit1 from '@/assets/img/unit1.png'
import unit2 from '@/assets/img/unit2.png'
import unit3 from '@/assets/img/unit3.png'
import unit4 from '@/assets/img/unit4.png'
import unit5 from '@/assets/img/unit5.png'
import unit6 from '@/assets/img/unit6.png'

import { ref } from 'vue'
import {getClientType} from '@/utils/utils.js'

const isWeb = ref(getClientType() === 'web')
const unitList = ref([
    { name: 'MIT', logo: unit1 },
    { name: '北京协和医院', logo: unit2 },
    { name: '安贞医院', logo: unit3 },
])

const unitList2 = ref([
    { name: '阜外医院', logo: unit4 },
    { name: '斯坦福大学', logo: unit5 },
    { name: '上海交通大学', logo: unit6 },
])
</script>

<style scoped>
</style>
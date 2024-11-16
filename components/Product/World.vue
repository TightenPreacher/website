<template>
    <div class="h-[46.88vw] pt-[11.46vw] bg-cover bg-center" :style="{ backgroundImage: `url(${home_bg1})` }">
        <div class="text-center my-0 mx-auto w-[62.5vw] h-full relative ">
            <div class="text-[#030303] font-semibold text-[1.98vw] leading-[2.34vw] h-[2.76vw]">世界模型</div>
            <div class="mt-[1.56vw] text-[1.04vw] leading-[2.08vw] font-normal text-[#1F1F1F]">
                <div v-for="(item, index) in modList" :key="index">{{ item }}</div>
            </div>
            <div class="flex mt-[3.12vw] justify-between">
                <div v-for="(item, index) in modList2" :key="index" class="w-[20.1vw]">
                    <img class="h-[14.74vw] w-[20.1vw] rounded-[1.04vw]" :src="item.pic" alt="姬器人科技" srcset="">
                    <div class="mt-[1.56vw] font-medium text-[1.15vw] text-black h-[1.88vw] leading-[1.88vw]">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import home_bg1 from '@/assets/img/home_bg1.png'
import world1 from '@/assets/img/world1.png'
import world2 from '@/assets/img/world2.png'
import world3 from '@/assets/img/world3.png'

const modList = ref([
    '世界模型通过对环境中各种三维资产场景、物体、人等的动态事件及其交互操作进行实时采集与记录',
    '在数字孪生中进行重演和增强，完成对环境动态变化的感知、理解和预测',
    '世界模型不仅能精确模拟和反映物理世界的动态，还能预测并适应未来的变化，为用户提供一个高度响应和预测性的平台。'
])

const modList2 = ref([
    {name: '三维资产动态采集与重建', pic: world1},
    {name: '环境动态预测', pic: world2},
    {name: '交互与操作模拟重建', pic: world3},
])
</script>

<style scoped>

</style>
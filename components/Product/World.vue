<template>
    <div class="bg-cover bg-center" :class="`${isWeb ? 'h-[100vh]' : 'h-[46.88vw]'} ${lan === 'zh' ? 'pt-[11.46vw]' : 'pt-[9.96vw]'}`" :style="{ backgroundImage: `url(/img/home_bg1.png)` }">
        <div class="text-center my-0 mx-auto w-[62.5vw] h-full relative ">
            <div class="text-[#030303] font-semibold text-[1.98vw] leading-[2.34vw] h-[2.76vw]">{{lan === 'zh' ? '世界模型' : 'World model'}}</div>
            <div class=" text-[1.04vw] font-normal text-[#1F1F1F]" :class="lan==='zh' ? 'mt-[1.56vw] leading-[2.08vw]' : 'mt-[1.04vw] leading-[1.67vw]'">
                <div class="whitespace-pre-wrap" v-for="(item, index) in (lan === 'zh' ? modList : modList3)" :key="index">{{ item }}</div>
            </div>
            <div class="flex justify-between" :class="lan === 'zh' ? 'mt-[3.12vw]' : 'mt-[2.08vw]' ">
                <div v-for="(item, index) in modList2" :key="index" class="w-[20.1vw]">
                    <img class="h-[14.74vw] w-[20.1vw] rounded-[1.04vw]" :src="item.pic" alt="姬器人科技" srcset="">
                    <div class="font-medium text-[1.15vw] text-black h-[1.88vw] leading-[1.88vw] whitespace-pre-wrap" :class="lan === 'zh' ? 'mt-[1.56vw]' : 'mt-[1.04vw]'">{{ lan === 'zh' ? item.name : item.name2 }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {getClientType, getLang} from '@/utils/utils.js'
const lan = ref(getLang())
const isWeb = ref(getClientType() === 'web')
import world1 from '@/assets/img/world1.png'
import world2 from '@/assets/img/world2.png'
import world3 from '@/assets/img/world3.png'

const modList = ref([
    '世界模型通过对环境中各种三维资产：场景、物体、人等的动态事件及其交互进行实时采集与记录',
    '在物理数字孪生中进行重演和增强，完成对环境动态变化的感知、理解和预测',
    '世界模型不仅能精确模拟和反映物理世界的动态，还能预测并适应未来的变化，为用户提供一个高度响应和预测性的平台'
])

const modList3 = ref([
    'The world model performs real-time collection and recording of dynamic events and interactive operations involving various 3D assets in the environment, including scenes, objects, people, and more.',
    'Replay and augment data within the physics-based digital twin to achieve perception, understanding,\nand prediction of environmental dynamics.',
    'The world model not only accurately simulates and reflects the dynamics of the physical world but also predicts and adapts to future changes, providing users with a highly responsive and predictive platform.'
])

const modList2 = ref([
    {name: '三维资产动态采集与重建', name2: 'dynamic capture and\nreconstruction of 3D asset', pic: world1},
    {name: '环境动态预测', name2: 'dynamic prediction\nof environment', pic: world2},
    {name: '交互与操作模拟重建', name2: 'simulation and reconstruction\nof Interaction and manipulation', pic: world3},
])
</script>

<style scoped>
</style>
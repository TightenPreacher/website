<template>
    <div class="flex flex-col items-center justify-start pt-[5.36vw] h-[46.88vw]">
        <div class="text-center text-[2.19vw] leading-[2.55vw] h-[3.07vw] text-[#030303]">新闻资讯</div>
        <div class="flex justify-between mt-[2.6vw] w-full">
            <div v-for="(item, index) in newList" :key="index" class="w-[15.05vw]">
                <img class="h-[10.47vw] w-full" :src="item.img" alt="姬器人科技" srcset="">
                <div class="flex flex-col p-[1.04vw] font-normal">
                    <div class="font-semibold text-black h-[1.88vw] leading-[1.88vw] text-[1.25vw]">{{ item.title }}</div>
                    <div class="text-[#555555] mt-[1.04vw] leading-[1.88vw] text-[1.15vw] h-[5.57vw]">{{ item.content }}</div>
                    <div class="flex items-center justify-between text-[#ABABAB] leading-[1.88vw] mt-[1.04vw] mb-[0.52vw] text-[0.94vw] h-[1.56vw]">
                        <div>{{ item.time }}</div>
                        <img class="h-[1.35vw] w-[1.35vw] cursor-pointer" src="~/assets/img/btnRight2.png" alt="姬器人科技" srcset="">
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-[3.13vw] rounded-[3.13vw] bg-black h-[3.23vw] w-[9.17vw] text-[1.15vw] text-white font-normal cursor-pointer text-center flex items-center justify-center">
            更多 >
        </div>
    </div>
</template>

<script setup lang="ts">
import new11 from '@/assets/img/new11.png'
import new22 from '@/assets/img/new22.png'
import new33 from '@/assets/img/new33.png'
import new44 from '@/assets/img/new44.png'

import { ref } from 'vue'

const newList = ref([
    {title: '姬器人创始人  CTO...', content: '2024年6月29日，由哈佛大学无锡校友会举办的 AIEC人工智能与俱身...', time: '2024-06-29', img: new11},
    {title: '姬器人创始人  CTO...', content: '2024年10月11日，1苏州市太仓市委常委、组织部部长、苏州市人社局...', time: '2024-10-11', img: new22},
    {title: '姬器人创始人  CTO...', content: '2024年10月26日，创始人卢树强受邀参加出席由声网科技主办的 声网...', time: '2024-10-26', img: new33},
    {title: '敬请期待...', content: '更多新闻资讯内容', time: '--', img: new44}
])
</script>

<style scoped>
</style>
<template>
    <div class="pt-[5.36vw] bg-cover bg-center" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(${home_bg2})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative flex flex-col items-center justify-start ">
            <div class="text-center text-[2.19vw] leading-[2.55vw] h-[3.07vw] text-[#030303] font-semibold">{{ lan === 'zh' ? '新闻资讯' : 'News'}}</div>
            <div class="flex justify-between mt-[2.6vw] w-full">
                <div v-for="(item, index) in newList" @click="handleChangeTab(index)" :key="index" class="w-[15.05vw]">
                    <img class="h-[10.47vw] w-full" :src="lan !== 'zh' && index === 3 ? item.img2 : item.img" alt="姬器人科技" srcset="">
                    <div class="flex flex-col p-[1.04vw] font-normal bg-[#F8F8F8] rounded-b-[1.04vw]">
                        <div class="font-semibold text-black h-[1.88vw] leading-[1.88vw] text-[1.25vw]">{{ lan === 'zh' ? item.title : item.title2 }}</div>
                        <div class="text-[#555555] mt-[1.04vw] leading-[1.88vw] text-[1.15vw] h-[5.57vw]">{{ lan === 'zh' ? item.content : item.content2 }}</div>
                        <div class="flex items-center justify-between text-[#ABABAB] leading-[1.88vw] mt-[1.04vw] mb-[0.52vw] text-[0.94vw] h-[1.56vw]">
                            <div>{{ item.time }}</div>
                            <img class="h-[1.35vw] w-[1.35vw] cursor-pointer" src="~/assets/img/btnRight2.png" alt="姬器人科技" srcset="">
                        </div>
                    </div>
                </div>
            </div>
            <div @click="handleChangeTab()" class="btnn mt-[3.13vw] rounded-[3.13vw] bg-black h-[3.23vw] w-[9.17vw] text-[1.15vw] text-white font-normal cursor-pointer text-center flex items-center justify-center relative">
                {{lan === 'zh' ? '更多' : 'more'}} <img class="w-[1.25vw] h-[1.25vw] absolute top-[0.99vw] right-[1.35vw]" src="@/assets/img/right.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {getClientType, getLang} from '@/utils/utils.js'
const lan = ref(getLang())
const isWeb = ref(getClientType() === 'web')
import home_bg2 from '@/assets/img/home_bg2.png'
import new11 from '@/assets/img/new11.png'
import new22 from '@/assets/img/new22.png'
import new33 from '@/assets/img/new33.png'
import new44 from '@/assets/img/new44.png'
// import new55 from '@/assets/img/new55.png'
import new66 from '@/assets/img/new66.png'

const newList = ref([
    {title: '姬器人创始人  CTO...', title2: 'Dr. Xu Wenqiang...', content: '2024年6月29日，由哈佛大学无锡校友会举办的 AIEC人工智能与俱身...', content2: 'On June 29, 2024, at the AIEC Artificial Intelligence and ...',time: '2024-06-29', img: new11},
    {title: '姬器人创始人  CTO...', title2: 'Dr. Xu Wenqiang...', content: '2024年10月11日，1苏州市太仓市委常委、组织部部长、苏州市人社局...', content2: 'On October 11, 2024, a delegation from Taicang, including the...',time: '2024-10-11', img: new22},
    {title: '姬器人创始人 CEO...', title2: 'Lu Shuqiang...', content: '2024年10月26日，创始人卢树强受邀参加出席由声网科技主办的 声网...', content2: 'On October 26, 2024, Founder Lu Shuqiang was invited to attend...',time: '2024-10-26', img: new33},
    {title: '姬器人创始人 CEO...', title2: 'Founder and CEO...', content: '2024年11月24日，创始人卢树强受邀参加由U8世界创新峰会，创新改变...', content2: 'On November 24, 2024, founder Lu Shuqiang was invited to ...',time: '2024-11-24', img: new66, img2: new66}
])

const handleChangeTab = (index?: number) => {
    if (index === 0 || index) {
        navigateTo(`/news?to=${index+1}`)
    } else {
        navigateTo(`/news`)
    }
}
</script>

<style scoped>
.btnn:hover {
    background-color: rgba(0,0,0,0.8);
}
</style>
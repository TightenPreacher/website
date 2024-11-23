<template>
    <div class="pt-[0.94vw] flex flex-col  bg-cover bg-center" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(${home_bg3})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative">
            <div v-for="(item, index) in addressList" :key="index" class="mt-[6.77vw]">
                <div class="flex items-center justify-between">
                    <div class="h-[3.07vw] text-[2.19vw] leading-[2.55vw] font-semibold text-[#030303]">{{ lan === 'zh' ? item.title : item.title2 }}</div>
                    <div class="h-[2.34vw] text-[1.67vw] leading-[1.98vw] font-semibold text-[#030303]">{{ lan === 'zh' ? item.add : item.add2 }}</div>
                </div>
                <div class="divider mt-[1.56vw] mb-[2.6vw] h-0 bor"></div>
                <div class="h-[5.42vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#1F1F1F]">{{ lan === 'zh' ? item.text : item.text2 }}</div>
            </div>    
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {getClientType, getLang} from '@/utils/utils.js'
const lan = ref(getLang())
const isWeb = ref(getClientType() === 'web')
import home_bg3 from '@/assets/img/home_bg3.png'
const addressList = ref([
    { title: '商业合作', title2: 'Business Collaboration', add: '邮箱：BP@maschinerobot.com', add2: 'Email：BP@maschinerobot.com',text: '合作共赢，开启智能穿戴与脑机交互新时代。', text2: 'Collaborate for mutual success, ushering in a new era of smart wearables and brain-computer interaction.'},
    { title: '加入我们', title2: 'Join Us', add: '邮箱：HR@maschinerobot.com', add2: 'Email：HR@maschinerobot.com',text: '寻找有激情的工程师，加入我们，探索未来科技的无限可能！', text2: 'Collaborate for mutual success, ushering in a new era of smart wearables and brain-computer interaction.'},
])
</script>

<style scoped>
.bor::after {
    height: 1px;
    background-color: #B4BDC4;
}
.bor::before {
    height: 1px;
    background-color: #B4BDC4;
}
</style>
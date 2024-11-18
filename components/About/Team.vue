<template>
    <div class="flex flex-col pt-[3.75vw] h-[100vh]  bg-cover bg-center"  :style="{ backgroundImage: `url(${home_bg3})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative">
            <div class="flex justify-between w-full text-[#030303] font-semibold items-center">
                <div class="text-[2.19vw] leading-[3.65vw] h-[3.65vw]">团队介绍</div>
                <div class="opacity-15 text-[3.13vw] leading-[3.65vw] h-[4.38vw]">Team Introduction</div>
            </div>
            <div class="flex justify-between mt-[2.29vw]">
                <div v-for="(item, index) in teamList" :key="index" class="w-[30.21vw]">
                    <div class="h-18.49vw w-full relative">
                        <img class="h-full w-full" :src="item.pic" :alt="item.name" srcset="">
                        <div class="absolute right-[3.65vw] bottom-[4.69vw]">
                            <div class="text-[1.46vw] text-[#080808] font-semibold h-[1.88vw] leading-[1.88vw]">{{ item.name }}</div>
                            <div class="text-[1.04vw] text-[#555555] font-normal h-[1.88vw] leading-[2.4vw]">{{ item.title }}</div>
                        </div>
                    </div>
                    <div class="text-[1.04vw] leading-[2.4vw] mt-[2.08vw] text-[#555555] font-normal">
                        <div v-for="(data, index) in item.content" :key="index">
                            · {{ data }}
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import team1 from '@/assets/img/team1.png'
import team2 from '@/assets/img/team2.png'
import home_bg3 from '@/assets/img/home_bg3.png'

const teamList = ref([
    {
        name: '徐文强',
        title: '创始人',
        pic: team1,
        content: [
            "研发科学家   CTO",
            "姬械机俱身智能机器人研究院 主任",
            "上海交大吴文俊荣誉博士",
            "主要研究方向为：人形智能机器人 俱身智能 仿生机器人",
            "在具身智能相关国际顶级期刊级会议发表相关论文30余篇",
        ]
    },
    {
        name: '王    坤',
        title: '合伙人',
        pic: team2,
        content: [
            "产品与开发总监",
            "任知名机器人产品与开发专家 ",
            "曾任知名机器人公司研发总监&产品总监",
            "曾主导实现多款上亿营收的服务机器人产品开发生产与商业交付",
        ]
    },
])
</script>

<style scoped>
</style>
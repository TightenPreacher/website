<template>
    <div class="flex flex-col pt-[3.75vw] bg-cover bg-center" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(${home_bg3})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative">
            <div class="flex justify-between w-full text-[#030303] font-semibold items-center">
                <div class="text-[2.19vw] leading-[3.65vw] h-[3.65vw]">{{lan === 'zh' ? '团队介绍' : 'Team Introduction'}}</div>
                <div class="opacity-15 text-[3.13vw] leading-[3.65vw] h-[4.38vw]" v-if="lan === 'zh'">Team Introduction</div>
            </div>
            <div class="flex justify-between mt-[2.29vw]">
                <div v-for="(item, index) in teamList" :key="index" class="w-[30.21vw]">
                    <div class="h-18.49vw w-full relative">
                        <img class="h-full w-full" :src="item.pic" :alt="item.name" srcset="">
                        <div class="absolute right-[3.65vw] bottom-[4.69vw]">
                            <div class="text-[1.46vw] text-[#080808] font-semibold h-[1.88vw] leading-[1.88vw]">{{ lan === 'zh' ? item.name : item.name2 }}</div>
                            <div class="text-[1.04vw] text-[#555555] font-normal h-[1.88vw] leading-[2.4vw]">{{ lan === 'zh' ? item.title : item.title2 }}</div>
                        </div>
                    </div>
                    <div class="text-[1.04vw] mt-[2.08vw] text-[#555555] font-normal" :class="`${lan === 'zh' ? ' leading-[2.4vw]' : 'leading-[1.56vw]'} ${lan !=='zh' && index === 0 ? 'h-[16.82vw] flex flex-col justify-between' : (lan !== 'zh' && index === 1 ? 'h-[12.45vw] flex flex-col justify-between' : '')}`">
                        <div class="flex" v-for="(data, ind) in (lan === 'zh' ? item.content : item.content2)" :key="ind">
                            <div>·</div>
                            <div>{{ data }}</div>
                        </div>
                    </div>
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
import team1 from '@/assets/img/team1.png'
import team2 from '@/assets/img/team2.png'
import home_bg3 from '@/assets/img/home_bg3.png'

const teamList = ref([
    {
        name: '徐文强',
        name2: 'Xu Wenqiang',
        title: '创始人',
        title2: 'Founder',
        pic: team1,
        content: [
            "研发科学家   CTO",
            "姬械机俱身智能机器人研究院 主任",
            "上海交大吴文俊荣誉博士",
            "主要研究方向为：人形智能机器人 俱身智能 仿生机器人",
            "在具身智能相关国际顶级期刊级会议发表相关论文30余篇",
        ],
        content2: [
            "R&D Scientist, CTO",
            "Director of the Embodied Intelligence Robot Research Institute",
            "PhD with Honor, Wen-Tsun Wu Honorable Class, Shanghai Jiao Tong University",
            "Main research areas: Humanoid robots, Embodied intelligence, Bionic robots",
            "Published over 30 papers in top international journals and conferences on embodied intelligence"
        ]
    },
    {
        name: '王    坤',
        name2: 'Wang Kun',
        title: '合伙人',
        title2: 'Partner',
        pic: team2,
        content: [
            "产品与开发总监",
            "任知名机器人产品与开发专家 ",
            "曾任知名机器人公司研发总监&产品总监",
            "曾主导实现多款上亿营收的服务机器人产品开发生产与商业交付",
        ],
        content2: [
            "Product and Development Director",
            "Renowned Robot Product and Development Expert",
            "Former R&D Director & Product Director at a leading robotics company",
            "Led the development, production, and commercial delivery of multiple service robot products generating over 100 million in revenue"
        ]
    },
])
</script>

<style scoped>
</style>
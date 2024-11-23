<template>
    <div class="bg-cover bg-center" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(/img/home_bg1.png)` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative flex flex-col text-[1.04vw] text-center font-semibold">
            <div class="h-[3.07vw] text-[2.19vw] leading-[2.55vw] mt-[8.33vw]">Empowering AI</div>
            <div class="font-normal break-keep leading-[2.08vw] mt-[1.04vw]">
                {{ lan === 'zh' ? '通过对人类本身智能属性的获取与计算建模，将对应的智能属性移植到对应的虚拟或实体智能体(Agent) 从而让智能体具备像人类本体一致表达的功能，行为与思想特质。' : 'Acquiring and modeling the intelligent attributes of the human body itself, and transferring and embedding these intelligent attributes into corresponding virtual or physical agents, endowing these agents with functions, behaviors, and cognitive characteristics similar to those of the human entity.'}}
            </div>
            <div class="mt-[1.56vw]">{{ lan === 'zh' ? '让每一个人参与构建AGI，让AGI解放每一个人' : 'Let everyone participate in building AGI, and let AGI free everyone.'}}</div>
            <img class="h-[25vw] w-full rounded-[1vw] mt-[1.56vw]" src="/img/home1.png" alt="" srcset="">
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {getClientType, getLang} from '@/utils/utils.js'

const lan = ref(getLang())
const isWeb = ref(getClientType() === 'web')
</script>

<style scoped >
</style>
<template>
    <div class="pt-[10.42vw] bg-cover bg-center" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(${home_bg2})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative flex justify-between ">
            <div>
                <img class="h-[5.21vw] w-[5.21vw] mt-[0.52vw]" src="~/assets/img/logo2.png" alt="姬器人科技" srcset="">
                <img class="h-[10vw] " :class="lan === 'zh' ? 'mt-[9.17vw]' : 'mt-[13.23vw]'" src="~/assets/img/group.png" alt="with" srcset="">
            </div>
            <div>
                <div class="flex justify-between items-end">
                    <img class="h-[6.88vw] w-[13.54vw]" src="~/assets/img/name.png" alt="Ex Maschine" srcset="">    
                    <img v-if="type === 1" @click="handleChangeTab" class="h-[3.13vw] w-[3.13vw] cursor-pointer mb-[0.57vw]" src="~/assets/img/btnRight.png" alt="右" srcset="">
                </div>
                
                <div class="w-[33.44vw] h-[16.72vw] text-[1.04vw] mt-[2.08vw]" :class="lan === 'zh' ? ' w-[21.3vw] leading-[2.4vw]' : 'w-[36.36vw] leading-[1.67vw]'">
                    {{lan === 'zh' ? '姬器人科技由上海交通大学机器人团队与姬械机科技联合创立。团队在机器人物理世界仿真，人体信息穿戴采集，人形机器人复杂任务操作，类脑计算模型开发应用等多个方向具备深厚技术积累，并在具身智能相关学术顶级会议与期刊发表多篇研究成果。公司旨在结合人形机器人技术与智能穿戴传感交互技术实现俱身智能体研发，进一步推动人形机器人产品的生活与家用化应用落地，从而将人们从繁杂的生活场景解放出来，让人们能够更好的享受美好生活。' : 'The Ex Maschine Technology was jointly established by the Robotics Team at Shanghai Jiao Tong University and the Ex Maschin Technology. The team has extensive technical expertise in several areas, including physical simulation engines for robotics, wearable systems for human body data collection, complex task execution by humanoid robots, and the development and application of brain-inspired computational models. They have published numerous research findings in top academic conferences and journals related to embodied intelligence. The company aims to combine humanoid robotics technology with intelligent wearable sensor interaction technology to develop embodied intelligent agents, further promoting the lifestyle and household application of humanoid robot products. This vision seeks to free people from the complexities of daily life, enabling them to enjoy a better quality of life.'}}
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
import home_bg2 from '@/assets/img/home_bg2.png'
const props = defineProps({
    type: {
        type: Number,
        required: true
    }
})
const handleChangeTab = () => {
    navigateTo(`/about`)
}
</script>

<style scoped>
</style>
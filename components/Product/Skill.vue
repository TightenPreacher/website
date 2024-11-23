<template>
    <div>
        <div v-for="(item, index) in modList" :id="`${index === 0 ? 'mod' : 'skill' }`" :key="index" class="bg-cover bg-center" :class="`${isWeb ? 'h-[100vh]' : 'h-[46.88vw]'} ${lan === 'zh' ? 'pt-[5.2vw]' : 'pt-[3.13vw]'}`" :style="{ backgroundImage: `url(${index == 0 ? home_bg2 : '/img/home_bg1.png'})` }">
            <div class="my-0 mx-auto w-[62.5vw] h-full relative ">
                <div class="font-semibold text-black leading-[1.98vw] text-[1.67vw]" :class="index === 0 ? 'text-left' : 'text-right'">{{ lan === 'zh' ? item.title : item.title2 }}</div>
                <div class="text-[1.04vw] text-[#1F1F1F] mt-[1.56vw]" :class="lan === 'zh' ? ' leading-[2.4vw]' : 'leading-[1.67vw]'">{{ lan === 'zh' ? item.content : item.content2 }}</div>
                <div class="flex justify-between" :class="lan === 'zh' ? 'mt-[2.6vw]' : 'mt-[1.56vw]'">
                    <div class="text-center" v-for="(val, ind) in item.list" :key="ind">
                        <img class="h-[20.1vw] w-[20.1vw] rounded-[1.04vw]" :src="`/img/skill${index === 0 ? ind+1 : ind+4}.png`" alt="姬器人科技" srcset="">
                        <div class="mt-[1.56vw] font-medium text-[1.15vw] text-black h-[1.88vw] leading-[1.88vw]  whitespace-pre-wrap">{{ lan === 'zh' ? val.name : val.name2 }}</div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {getClientType, getLang} from '@/utils/utils.js'
const lan = ref(getLang())
const isWeb = ref(getClientType() === 'web')
import { useRoute } from 'vue-router';

const route = useRoute();
import home_bg2 from '@/assets/img/home_bg2.png'

const modList = ref([
    {title: '俱身穿戴', title2: 'Wearable technology', content:'俱身穿戴技术是通过集成了多个不同信号源类型的智能传感器的穿戴设备系统对人体静态物理形态，运动动作姿态以及交互操作技能进行等不同状态与任务对应的身体部位的传感信号实时并行采集与记录。从而基于自有多源信号处理模型对俱身穿戴系统获得的人体数据进行建模计算，重构生成对应相关身体物理与体态交互及操作模拟，进一步为信息数据移植于人形机器人系统做输入。', content2: "Empowering wearable technology involves wearable device systems integrated with multiple types of intelligent sensors that capture and record real-time parallel sensor signals from various body parts corresponding to different states and tasks. These sensors collect data on the body's static physical form, movement posture, and interaction skills. Using proprietary multi-source signal processing models, the collected human data is then modeled and computed to reconstruct and generate corresponding physical interactions and operational simulations of the body. This process further enables the transfer of information and data to humanoid robot systems for input.", list: [{name: '动态身体信号采集与重建', name2: 'Dynamic capture and reconstruction\nof body signals'},{name: '运动与任务操作采集与重建', name2: 'Capture and reconstruction\nof motion and task operation'},{name: '面部情感变化采集与重建', name2: 'Capture and reconstruction\nof facial emotion variation'}]},
    {title: '仿人技能', title2: 'Human-level skills', content:'仿人技能利用来自俱身穿戴技术的多传感数据进行训练，捕捉人类的各种行为和情感。这些技能按操作复杂度分为不同类型，以适应不同自由度的硬件本体，比如低自由度的简单操作、高自由度的复杂操作和需要高级决策的长序列操作等。与人交互时，通过给人的偏好和情绪建模，使交互有更强的顺应性。多层次的技能设定，确保了在不同应用场景下的广泛适用性和高效性。', content2: 'Human-level skills are trained using multi-sensor data from empowering wearable technology to capture various human behaviors and emotions. These skills are categorized by operation complexity to adapt to embodiments with different degrees of freedom, such as simple operations for low degrees of freedom, complex operations for high degrees of freedom, and long-sequence operations that require advanced decision-making. When interacting with humans, these skills incorporate modeling of human preferences and emotions, making the interaction more responsive and adaptive. The multi-layered skill settings ensure broad applicability and efficiency across various application scenarios.', list: [{name: '操作技能', name2: 'Manipulation Skills'},{name: '人机交互技能', name2: 'Human-Robot Interaction Skills'},{name: '技能难度评级', name2: 'Skill Rating'}]},
])
onMounted(() => {
    nextTick(() => {
        if (route.query.at == '2') {
            document.getElementById('mod')?.scrollIntoView({block:'start'})
        } else if (route.query.at == '3') {
            document.getElementById('skill')?.scrollIntoView({block:'start'})
        }
    })
})
</script>

<style scoped>

</style>
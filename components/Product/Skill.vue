<template>
    <div>
        <div v-for="(item, index) in modList" :key="index" class="h-[46.88vw] pt-[5.2vw]">
            <div class="font-semibold text-black leading-[1.98vw] text-[1.67vw]" :class="index === 0 ? 'text-left' : 'text-right'">{{ item.title }}</div>
            <div class="text-[1.04vw] text-[#1F1F1F] mt-[1.56vw]">{{ item.content }}</div>
            <div class="flex justify-between mt-[2.6vw]">
                <div class="text-center" v-for="(val, index) in item.list" :key="index">
                    <img class="h-[20.1vw] w-[20.1vw] rounded-[1.04vw]" :src="val.pic" alt="姬器人科技" srcset="">
                    <div class="mt-[1.56vw] font-medium text-[1.15vw] text-black h-[1.88vw] leading-[1.88vw]">{{ val.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import skill1 from '@/assets/img/skill1.png'
import skill2 from '@/assets/img/skill2.png'
import skill3 from '@/assets/img/skill3.png'
import skill4 from '@/assets/img/skill4.png'
import skill5 from '@/assets/img/skill5.png'
import skill6 from '@/assets/img/skill6.png'

const modList = ref([
    {title: '俱身穿戴',content:'俱身穿戴技术主要是通过集成了多个不同信号源类型的智能传感器的穿戴设备系统对人体静态物理形态，运动动作姿态以及交互操作技能进行等不同状态与任务对应的身体部位的传感信号实时并行采集与记录。从而基于自有多源信号处理模型对俱身穿戴系统获得的人体数据进行建模计算，重构生成对应相关身体物理与体态交互及操作模拟，进一步为信息数据移植于人形机器人系统做输入。', list: [{name: '动态身体信号采集与重建', pic: skill1},{name: '运动与任务操作采集与重建', pic: skill2},{name: '面部情感变化采集与重建', pic: skill3}]},
    {title: '仿人技能',content:'仿人技能利用来自俱身穿戴技术的多传感数据进行训练，捕捉人类的各种行为和情感。这些技能按操作复杂度分为不同类型，以适应不同自由度的硬件本体，比如低自由度的简单操作、高自由度的复杂操作和需要高级决策的长序列操作等。与人交互时，通过给人的偏好和情绪建模，使交互有更强的顺应性。多层次的技能设定，确保了在不同应用场景下的广泛适用性和高效性。', list: [{name: '操作技能（简单、高自由度、长序列）', pic: skill4},{name: '人机交互（物理、情感）技能', pic: skill5},{name: '技能难度评级、鉴证', pic: skill6}]},
])
</script>

<style scoped>

</style>
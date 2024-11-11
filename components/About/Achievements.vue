<template>
    <div class="w-full pt-[3.13vw]">
        <div class=" text-right text-[2.19vw] leading-[3.65vw] h-[3.65vw] font-semibold text-black">团队相关技术研究成果</div>
        <div class="divider mt-[1.56vw] mb-[2.6vw] h-0 bor"></div>
        <div v-for="(item, index) in AchieveList" :key="index" class="mb-[3.65vw] flex rounded-[1.04vw] border-[rgba(0,0,0,0.4)] border-solid border-[1px]">
            <img v-if="index % 2 === 0" class="w-[8.28vw] h-[10.73vw]" :src="item.pic" alt="成果">
            <div class="flex flex-col font-normal text-[1.05vw] text-[#555555] ml-[1.56vw] w-[51.15vw]">
                <div :class="item.cls" class="font-semibold text-black leading-[1.88vw] whitespace-pre-line">{{ item.title }}</div>
                <div :class="item.cls2" class="leading-[1.67vw]">{{ item.conten }}</div>
                <div :class="item.cls3" class="leading-[2.4vw]">{{ item.tag }}</div>
            </div>
            <img v-if="index % 2 === 1" class="w-[8.28vw] h-[10.73vw] ml-[1.67vw]" :src="item.pic" alt="成果">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import num1 from '@/assets/img/num1.png'
import num2 from '@/assets/img/num2.png'
import num3 from '@/assets/img/num3.png'
import num4 from '@/assets/img/num4.png'
import num5 from '@/assets/img/num5.png'
import num6 from '@/assets/img/num6.png'
import num7 from '@/assets/img/num7.png'
import num8 from '@/assets/img/num8.png'
import num9 from '@/assets/img/num9.png'
import num10 from '@/assets/img/num10.png'
import num11 from '@/assets/img/num11.png'

const AchieveList = ref([
    {pic:num1, cls: 'mt-[1.93vw]', cls2: 'mt-[1.04vw]', cls3: 'mt-[0.52vw]', title: 'Explicit shape encoding for real-time instance segmentation, ICCV ’19', conten: 'Wenqiang Xu*, Haiyang Wang*, Fubo Qi, Cewu Lu', tag: 'Tag: Object detection'},
    {pic:num2, cls: 'mt-[1.15vw]', cls2: 'mt-[0.73vw]', cls3: 'mt-[0.21vw]', title: 'Srda: Generating instance segmentation annotation via scanning, reasoning and domain adaptation, ECCV ’18.', conten: 'Wenqiang Xu*, Yonglu Li*, Cewu Lu', tag: 'Tag: Generative model'},
    {pic:num3, cls: 'mt-[1.15vw]', cls2: 'mt-[0.73vw]', cls3: 'mt-[0.21vw]', title: 'UniFolding: Towards Sample-efficient, Scalable, and Generalizable Robotic Garment Folding, \n CoRL ’23', conten: 'Han Xue*, Yutong Li*, Wenqiang Xu, Dongzhe Zheng, Cewu Lu', tag: 'Tag: Deformable object, Manipulation'},
    {pic:num4, cls: 'mt-[0.63vw]', cls2: 'mt-[0.52vw]', cls3: 'mt-[0.21vw]', title: 'RoboTube: Learning Household Manipulation from Human Videos with Simulated TwinEnvironments, CoRL ’22 Oral', conten: 'Haoyu Xiong*, Haoyuan Fu*, Jieyi Zhang, Chen Bao, Qiang Zhang, Yongxi Huang, Wenqiang Xu,Animesh Garg, Cewu Lu', tag: 'Tag: Imitation learning'},
    {pic:num5, cls: 'mt-[1.93vw]', cls2: 'mt-[1.04vw]', cls3: 'mt-[0.52vw]', title: 'ArmentTracking: Category-level Garment Pose Tracking, CVPR ’23', conten: 'Han Xue, Wenqiang Xu, Jieyi Zhang, Titian Tang, Yutong Li, Wenxin Du, Ruolin Ye, Cewu Lu', tag: 'Tag: Deformable object'},
    {pic:num6, cls: 'mt-[1.93vw]', cls2: 'mt-[1.04vw]', cls3: 'mt-[0.52vw]', title: 'AKB-48: A Real-World Articulated Object Knowledge Base, CVPR ’22', conten: 'Liu, Liu, Wenqiang Xu, Haoyuan Fu, Sucheng Qian, Yang Han, Cewu Luv', tag: 'Tag: Articulated object'},
    {pic:num7, cls: 'mt-[1.93vw]', cls2: 'mt-[1.04vw]', cls3: 'mt-[0.52vw]', title: 'Precise Robotic Needle-Threading with Tactile Perception and Reinforcement Learning,CoRL ’23', conten: 'Zhenjun Yu*, Wenqiang Xu*, Siqiong Yao, Jieji Ren, Tutian Tang, Yutong Li, Guoying Gu, Cewu Lu', tag: 'Tag: Tactile, Deformable object, Manipulation'},
    {pic:num8, cls: 'mt-[1.15vw]', cls2: 'mt-[0.73vw]', cls3: 'mt-[0.21vw]', title: 'ClothPose: A Real-world Benchmark for Visual Analysis of Garment Pose via An Indirect Recording Solution, ICCV ’23 Oral', conten: 'Wenqiang Xu*, Wenxin Du*, Han Xue, Yutong Li, Ruolin Ye, Yanfeng Wang, Cewu Lu', tag: 'Tag: Deformable object, Manipulation'},
    {pic:num9, cls: 'mt-[1.25vw]', cls2: 'mt-[0.84vw]', cls3: 'mt-[0.52vw]', title: 'RFUniverse: A Multiphysics Simulation Platform for Embodied AI, RSS ’23', conten: 'Haoyuan Fu*, Wenqiang Xu*, Ruolin Ye*, Han Xue, Zhenjun Yu, Tutian Tang, Yutong Li, Wenxin Du,Jieyi Zhang, Cewu Lu', tag: 'Tag: Multiphysics simulation'},
    {pic:num10, cls: 'mt-[1.93vw]', cls2: 'mt-[1.04vw]', cls3: 'mt-[0.52vw]', title: 'Visual-Tactile Sensing for In-Hand Object Reconstruction, CVPR ’23', conten: 'Wenqiang Xu*, Zhenjun Yu*, Han Xue, Ruolin Ye, Siqiong Yao, Cewu Lu', tag: 'Tag: Tactile, Deformable object'},
    {pic:num11, cls: 'mt-[0.63vw]', cls2: 'mt-[0.52vw]', cls3: 'mt-[0.21vw]', title: 'RCareWorld: A Human-centric Simulation World for Caregiving Robots, IROS ’22 BestRoboCup Award Winner, Best Paper Finalist', conten: 'Ruolin Ye*, Wenqiang Xu*, Haoyuan Fu, Rajat Kumar Jenamani, Vy Nguyen, Cewu Lu, Katherine Dimitropoulou, Tapomayukh，Bhattacharjee', tag: 'Tag: Musculoskeletal simulation, Human-robot interaction'},
])
</script>

<style scoped>
.bor::after {
    height: 1px;
    background-color: #BFBFBF;
}
.bor::before {
    height: 1px;
    background-color: #BFBFBF;
}
</style>
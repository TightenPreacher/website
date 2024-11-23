<template>
    <div id="robot" class="bg-cover bg-center" :class="`${isWeb ? 'h-[100vh]' : 'h-[46.88vw]'} ${lan === 'zh' ? 'pt-[5.2vw]' : 'pt-[3.33vw]'}`" :style="{ backgroundImage: `url(${home_bg2})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative  flex justify-between items-center">
            <img class="w-[24.27vw] h-[35.83vw] -ml-[3.12vw]" src="~/assets/img/robot.png" alt="" srcset="">
            <div class="flex flex-col" :class="lan === 'zh' ? ' w-[38.13vw]' : 'w-[38.75vw]'">
                <div class="font-semibold text-black leading-[1.98vw] text-[1.67vw] bor" :class="lan === 'zh' ? ' mt-[1.35vw]' : ''">{{lan === 'zh' ? '类脑智能 - 人形机器人' : 'Brain-inspired intelligence - Humanoid robot'}}</div>
                <div class="mt-[1.56vw] text-[#1F1F1F] font-normal flex flex-col justify-between" :class="lan === 'zh' ? 'text-[1.04vw] h-[25vw] leading-[1.88vw]' : 'text-[0.94vw] h-[31.83vw] leading-[1.67vw]'">
                    <div>{{lan === 'zh' ? '类脑智能（Brain-Inspired Intelligence），是人工智能（AI）发展的重要途径，也是新一代AI计算体系的主要路线之一。' : 'Brain-inspired intelligence is an important approach in the development of artificial intelligence (AI) technology and one of the main pathways for the next-generation AI computing framework.'}}</div>
                    <div>{{lan === 'zh' ? '类脑智能整体，主要包括脑认知与神经计算（brain-inspired cognitive and neural computing）、类脑芯片与系统（brain-inspired chips and system）、类脑智能机器人（brain-inspired intelligent robots）等不同的技术发展方向。' : 'Brain-inspired intelligence as a whole primarily includes different technological development directions such as brain cognitive and neural computing, brain-inspired chips and systems, and brain-inspired intelligent robots.'}}</div>
                    <div>{{lan === 'zh' ? '类脑智能模型在应用层面根据模型模拟大脑尺度的不同可以划分为3个级别第一级为基于神经元机制的单任务计算模型，第二级为基于神经群机制的复杂识任务计算模型，第三级为基于全脑机制的高级类人决策计算模型。' : 'Brain-inspired intelligent models can be divided into three levels based on the scale of brain simulation at the application layer. The first level is a single-task computation model based on neuronal mechanisms. The second level is a complex recognition task computation model based on neural network mechanisms. The third level is a high-level humanoid decision-making computation model based on whole-brain mechanisms.'}} </div>
                    <div>{{lan === 'zh' ? '总体来说类脑智能在低能耗计算系统、多模态感知、自主学习、认知模拟、多模态信息处理等方面有独特潜力和特殊价值。我们希望通过类脑直接计算模型，能够对智能人形机器人从单高效任务计算到复杂任务的判断与操作执行，再到高级的情感交互与自主意识构建进行实现，从而打造人形机器人的 脑-心-行等类人通路。' : 'Overall, brain-inspired intelligence has unique potential and special value in areas such as low-energy computing systems, multi-modal perception, autonomous learning, cognitive simulation, and multi-modal information processing. We hope that through brain-inspired computation models, we can enable humanoid robots to progress from efficient single-task computation to complex task judgment and execution, and further to advanced emotional interaction and autonomous consciousness development, thereby creating humanoid pathways such as brain-heart-action for humanoid robots.'}}</div>
                </div>
                <div class="flex justify-between text-[1.25vw] text-[#050505] font-medium h-[2.08vw] leading-[2.08vw] mt-[2.08vw]">
                    <div>脑 - Brain&Mind</div>
                    <div>心 - Heart&Love</div>
                    <div>行 - Action&Task</div>
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
onMounted(() => {
    nextTick(() => {
        if (route.query.at == '4') {
            document.getElementById('robot')?.scrollIntoView({block:'start'})
        }
    })
})
</script>

<style scoped>
.bor::after {
  content: '';
  display: block;
  width: 1.56vw; 
  border-bottom: 0.17vw solid black;
  margin-top: 1.04vw;
}
</style>
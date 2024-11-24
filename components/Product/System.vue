<template>
    <div class=" bg-cover bg-center" :class="`${isWeb ? 'h-[100vh]' : 'h-[46.88vw]'} ${lan === 'zh' ? 'pt-[4.69vw]' : 'pt-[1.8vw]'}`" :style="{ backgroundImage: `url(${home_bg3})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative ">
            <div class="flex justify-between text-[1.25vw] text-[#8E8E8E] font-normal">
                <div :class="`${active === index ? 'text-black font-semibold' : ''} ${lan === 'zh' ? '' : item.cls} ${lan === 'zh' && active === index ? 'active' : (lan !== 'zh' && active === index ? 'active2' : '')}`" class="cursor-pointer" @click="handleChange(index)" v-for="(item, index) in list" :key="index">{{ lan === 'zh' ? item.title : item.title2 }}</div>   
            </div>
            
            <div>
                <img class="rounded-[1.04vw] w-full h-[26.61vw]" :class="lan === 'zh' ? 'mt-[2.6vw]' : ' mt-[1.04vw]'" :src="`/img/sys_bg${active+1}.png`" alt="" srcset="">
                <div class=" text-[#1F1F1F] font-normal" :class="lan === 'zh' ? 'leading-[1.98vw] text-[1.04vw] mt-[1.56vw]' : 'leading-[1.56vw] text-[0.94vw] mt-[1.04vw]'">{{ lan === 'zh' ? list[active].content : list[active].content2 }}</div>
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

const active = ref(0)
const list = ref([
    {id: 0 ,title: '类脑高速感知计算模型', title2: 'Brain-inspired high-speed perception computation model', cls: 'w-[12.34vw]', content: '类脑高速感知计算模型模拟了人脑对环境快速感知和处理信息的能力。通过类脑神经网络结构，该模型能够迅速分析多模态信息（如视觉、听觉、触觉等），从复杂的环境中提取关键数据，并为后续的决策过程提供精准的感知基础。这种模型特别适用于需要快速信息处理的领域，如机器人视觉、自动驾驶系统和智能监控系统。', content2: "The brain-inspired high-speed perception computation model simulates the human brain's ability to rapidly perceive and process information from the environment. Using a brain-inspired neural network structure, this model can quickly analyze multimodal information (such as vision, hearing, touch, etc.), extract key data from complex environments, and provide an accurate perceptual foundation for subsequent decision-making processes. This model is particularly suitable for fields that require fast information processing, such as robotic vision, autonomous driving systems, and intelligent monitoring systems."},
    {id: 1 ,title: '类脑高速识别检测模型', title2: 'Brain-inspired high-speed recognition and detection model', cls: 'w-[13.23vw]', content: '类脑高速识别检测模型通过模拟大脑在识别和检测物体或模式时的神经处理机制，实现高效且精准的目标识别和事件检测。该模型能够在复杂场景中快速响应，并具备强大的适应能力和鲁棒性，适合应用于实时图像识别、安防监控、医疗影像分析等需要高度准确性和实时性的任务中。', content2: 'The brain-like high-speed recognition and detection model simulates the neural processing mechanisms of the brain when recognizing and detecting objects or patterns, enabling efficient and accurate target recognition and event detection. This model can quickly respond in complex scenarios and possesses strong adaptability and robustness, making it suitable for tasks that require high accuracy and real-time performance, such as real-time image recognition, security surveillance, and medical image analysis.'},
    {id: 2 ,title: '类脑智能决策控制模型', title2: 'Brain-inspired intelligent decision-making and control model', cls: 'w-[14.95vw]', content: '类脑智能决策控制模型模拟了人脑在多任务处理中的决策机制。该模型通过类脑神经网络结构和多层级的规划控制反馈回路，能够在复杂环境中针对多源数据进行分层计算，并做出最优决策。它不仅具备实时分析和预测的能力，还能根据环境变化动态调整决策策略，从而提升系统的自适应性和稳健性。该模型特别适用于无人驾驶、工业自动化和智能物流等需要快速决策和精准控制的场景。', content2: "The brain-inspired intelligent decision-making control model simulates the decision-making mechanism of the human brain in multitasking. Through a brain-like neural network structure and multi-level planning and control feedback loops, the model can perform hierarchical computations on multi-source data in complex environments and make optimal decisions. It not only has the ability to analyze and predict in real-time but also dynamically adjusts decision-making strategies based on environmental changes, thereby enhancing the system's adaptability and robustness. This model is particularly suitable for scenarios that require rapid decision-making and precise control, such as autonomous driving, industrial automation, and intelligent logistics."},
    {id: 3 ,title: '类脑智能机器人操作系统', title2: 'Brain-inspired intelligent robot operating system', cls: 'w-[10.47vw]', content: '类脑智能机器人操作系统仿照人脑对多任务的并行处理和资源调度能力，能够在多种传感器和执行单元间实现高效的协同与控制。该操作系统结合类脑计算架构和自我学习机制，支持机器人在复杂动态环境中的高效任务分配和资源管理，从而实现灵活的动作控制和智能化的任务完成。该系统广泛应用于服务机器人、医疗辅助设备和特种作业机器人等需要自适应操作的领域。', content2: "The brain-inspired intelligent robot operating system mimics the human brain's ability to perform parallel processing of multitasks and resource scheduling, enabling efficient coordination and control among various sensors and actuators. This operating system integrates brain-like computing architecture and self-learning mechanisms, supporting the robot's efficient task allocation and resource management in complex dynamic environments, thereby achieving flexible motion control and intelligent task completion. The system is widely applied in fields that require adaptive operations, such as service robots, medical assistive devices, and specialized task robots."}
])

const handleChange = (index: number) => {
    active.value = index
}
</script>

<style scoped>
.active::after {
  content: '';
  display: block;
  width: 1.46vw; 
  border-bottom: 0.17vw solid black;
  margin: 0 auto;
  margin-top: 0.73vw;
}
.active2::after {
  content: '';
  display: block;
  width: 1.46vw; 
  border-bottom: 0.17vw solid black;
  margin-top: 0.73vw;
}
</style>
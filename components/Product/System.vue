<template>
    <div class="h-[46.88vw] pt-[4.69vw]">
        <div class="flex justify-between text-[1.25vw] text-[#8E8E8E] font-normal">
            <div :class="active === index ? 'active text-black' : ''" class="cursor-pointer" @click="handleChange(index)" v-for="(item, index) in list" :key="index">{{ item.title }}</div>   
        </div>
        
        <div>
            <div class=" rounded-[1.04vw] w-full h-[26.61vw] bg-black mt-[2.6vw]"></div>
            <div class="mt-[1.56vw] text-[1.04vw] text-[#1F1F1F] font-normal leading-[1.98vw]">{{ list[active].content }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
const list = ref([
    {id: 0 ,title: '类脑高速感知计算模型', pic: '', content: '类脑高速感知计算模型模拟了人脑对环境快速感知和处理信息的能力。通过类脑神经网络结构，该模型能够迅速分析多模态信息（如视觉、听觉、触觉等），从复杂的环境中提取关键数据，并为后续的决策过程提供精准的感知基础。这种模型特别适用于需要快速信息处理的领域，如机器人视觉、自动驾驶系统和智能监控系统。'},
    {id: 1 ,title: '类脑高速识别检测模型', pic: '', content: '类脑高速识别检测模型通过模拟大脑在识别和检测物体或模式时的神经处理机制，实现高效且精准的目标识别和事件检测。该模型能够在复杂场景中快速响应，并具备强大的适应能力和鲁棒性，适合应用于实时图像识别、安防监控、医疗影像分析等需要高度准确性和实时性的任务中。'},
    {id: 2 ,title: '类脑智能决策控制模型', pic: '', content: '类脑智能决策控制模型模拟了人脑在多任务处理中的决策机制。该模型通过类脑神经网络结构和多层级的规划控制反馈回路，能够在复杂环境中针对多源数据进行分层计算，并做出最优决策。它不仅具备实时分析和预测的能力，还能根据环境变化动态调整决策策略，从而提升系统的自适应性和稳健性。该模型特别适用于无人驾驶、工业自动化和智能物流等需要快速决策和精准控制的场景。'},
    {id: 3 ,title: '类脑智能机器人操作系统', pic: '', content: '类脑智能机器人操作系统仿照人脑对多任务的并行处理和资源调度能力，能够在多种传感器和执行单元间实现高效的协同与控制。该操作系统结合类脑计算架构和自我学习机制，支持机器人在复杂动态环境中的高效任务分配和资源管理，从而实现灵活的动作控制和智能化的任务完成。该系统广泛应用于服务机器人、医疗辅助设备和特种作业机器人等需要自适应操作的领域。'}
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
</style>
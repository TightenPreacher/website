<template>
    <div class="pt-[6.77vw] bg-cover bg-center" :class="isWeb ? ' h-[100vh]' : 'h-[46.88vw]' " :style="{ backgroundImage: `url(/img/home_bg1.png)` }">
        <div  class="my-0 mx-auto w-[62.5vw] h-full relative flex flex-col ">
            <div class="flex justify-between w-[47.55vw] font-semibold">
                <div class="text-[2.19vw] text-[#030303] leading-[2.55vw] h-[3.07vw] mt-[0.52vw]">{{ lan === 'zh' ? '应用场景' : 'Application scenarios'}}</div>
                <div class="text-[#color: #000000;] opacity-20 text-[2.6vw] leading-[3.07vw] h-[3.65vw]" v-if="lan === 'zh'">Application scenarios</div>
            </div>
            <div class="flex mt-[3.13vw]">
                <img class="h-[27.29vw] w-[47.55vw] mr-[3.02vw]" @click="handleClick(modelKey)" :src="`/img/app${modelKey+1}.png`" alt="姬器人科技" srcset="">
                <div class="text-[1.04vw] leading-[2.4vw]">
                    <div v-for="(item, index) in modelList" :key="index"
                        @click="handleChange(index)"
                        :class="`${item.key === modelKey ? 'active text-[#080808] font-semibold':'text-[#8E8E8E] font-normal'} ${lan === 'zh' ? ' text-[1.46vw]' : 'text-[1.15vw]'} ${lan !== 'zh' && item.key === 0 ? 'mb-[2.6vw]' : ' mb-[3.23vw]'} ${lan !== 'zh' && item.key !== 0 ? 'h-[3.23vw] mb-[1.9vw]' : ' h-[1.88vw]'}`"
                        class="relative leading-[1.88vw] ml-[2.19vw] cursor-pointer"
                    >
                        {{ lan === 'zh' ? item.name : item.name2 }}
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
const modelKey = ref(0)
const modelList = ref([
    {name: '医疗看护', name2: 'Medical Care', key: 0},
    {name: '康养陪护', name2: 'Elderly Care and Companion', key: 1},
    {name: '居家陪护', name2: 'Home Care and Companion', key: 2},
    {name: '情感陪互', name2: 'Emotional Companionship', key: 3},
    {name: '情感陪伴', name2: 'Emotional Companionship', key: 4},
    {name: '情感交互', name2: 'Emotional Interaction', key: 5},
])

const handleChange = (index: number) => {
    modelKey.value = index
}

const handleClick = (index: number) => {
    navigateTo(`/product?type=2&to=${index+1}`)
}
</script>

<style scoped>
.active::after {
  content: '';
  display: block;
  width: 0.52vw; 
  border-bottom: 1.88vw solid black; 
  position: absolute;
  left: -2.19vw;
  /* top: 0; */
  top: 50%;
  transform: translateY(-50%);
}
</style>
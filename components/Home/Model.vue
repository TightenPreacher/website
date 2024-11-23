<template>
    <div class="pt-[6.76vw]  bg-[#EFEFEF]" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative flex  flex-col ">
            <div class="flex justify-between">
                <div class="active h-[3.65vw] mt-[11.77vw] font-semibold" :class="`${lan === 'zh' ? 'text-[2.19vw]' : 'min-w-[10vw] leading-[2.92vw] text-[1.67vw]'} ${modelNmae === 'World model' ? 'w-[10vw]' : ''}`">
                    {{ modelNmae }}
                </div>
                <img class="h-[27.71vw]" @click="handleClick(modelKey)" :src="`/img/mod${modelKey+1}.png`" alt="姬器人科技" srcset="" :class="lan === 'zh' ? 'w-[49.06vw]' : 'w-[48.46vw]'">
            </div>
            
            <div class="flex flex-col">
                <div class="h-[3.13vw] mt-[3.13vw] flex items-center justify-end">
                    <div class="flex text-[1.15vw] h-[1.88vw] text-[#8E8E8E]">
                        <div v-for="(item, index) in modelList" :key="item.key" 
                            class="cursor-pointer font-normal"
                            @click="handleChangeModel(index)"
                            :class="`${modelKey === item.key ? 'text-[#16212A] font-semibold':''} ${lan === 'zh' ? 'mr-[3.13vw]' : 'mr-[2.5vw]'}`"
                        >
                            {{ lan === 'zh' ? item.name : item.name2 }}
                        </div>
                    </div>
                    <div class="flex justify-between w-[9.9vw]">
                        <img v-if="modelKey !== 0" @click="handleChange('left')" class="h-[3.13vw] w-[3.13vw] cursor-pointer" src="~/assets/img/btnLeft.png" alt="左" srcset="">
                        <img v-if="modelKey === 0" class="h-[3.13vw] w-[3.13vw] cursor-not-allowed" src="~/assets/img/btnLeft2.png" alt="左" srcset="">
                        <img v-if="modelKey !== 3" @click="handleChange('right')" class="h-[3.13vw] w-[3.13vw] cursor-pointer" src="~/assets/img/btnRight.png" alt="右" srcset="">
                        <img v-if="modelKey === 3" class="h-[3.13vw] w-[3.13vw] cursor-not-allowed" src="~/assets/img/btnRight3.png" alt="右" srcset="">
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import {getClientType, getLang} from '@/utils/utils.js'
const lan = ref(getLang())
const isWeb = ref(getClientType() === 'web')
const modelNmae = ref(lan.value === 'zh' ? '世界模型' : 'World model')
const modelKey = ref(0)
const modelList = ref([
    {name: '世界模型',name2: 'World model',key: 0},
    {name: '俱身穿戴',name2:  'Wearable technology',key: 1},
    {name: '仿人技能',name2:  'Human-level skills',key: 2},
    {name: '类脑智能',name2:  'Brain-inspired intelligent',key: 3},
])

const handleChangeModel = (index: number) => {
    modelKey.value = index
    modelNmae.value = lan.value === 'zh' ? modelList.value[index].name : modelList.value[index].name2
}

const handleChange = (val: string) => {
    if (val === 'left') {
        modelKey.value = modelKey.value === 0 ? 0 : modelKey.value - 1
    } else {
        modelKey.value = modelKey.value === 3 ? 3 : modelKey.value + 1
    }
    nextTick(() => {
        modelNmae.value = lan.value === 'zh' ? modelList.value[modelKey.value].name : modelList.value[modelKey.value].name2
    })
}

const handleClick = (index: number) => {
    navigateTo(`/product?type=1&at=${index+1}`)
}
</script>

<style scoped>
.active::after {
  content: '';
  display: block;
  width: 1.98vw; 
  border-bottom: 0.51vw solid black;
  margin-top: 1.55vw;
}
</style>
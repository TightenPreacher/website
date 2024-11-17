<template>
    <div class="pt-[6.76vw] h-[46.88vw] bg-[#EFEFEF]">
        <div  class="my-0 mx-auto w-[62.5vw] h-full relative flex justify-between ">
            <div class="active h-[3.65vw] text-[2.19vw] mt-[11.77vw]">
                {{ modelNmae }}
            </div>
            <div class="flex flex-col">
                <img class="h-[27.71vw] w-[49.06vw]" :src="`/img/mod${modelKey+1}.png`" alt="姬器人科技" srcset="">
                <div class="h-[3.13vw] mt-[3.13vw] flex items-center justify-between">
                    <div class="flex text-[1.15vw] h-[1.88vw] text-[#8E8E8E]">
                        <div v-for="(item, index) in modelList" :key="item.key" 
                            class="cursor-pointer mr-[3.13vw] font-normal"
                            @click="handleChangeModel(index)"
                            :class="modelKey === item.key ? 'text-[#16212A] font-semibold':''"
                        >
                            {{ item.name }}
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

const modelNmae = ref('世界模型')
const modelKey = ref(0)
const modelList = ref([
    {name: '世界模型', key: 0},
    {name: '俱身穿戴', key: 1},
    {name: '仿人技能', key: 2},
    {name: '类脑智能', key: 3},
])

const handleChangeModel = (index: number) => {
    modelKey.value = index
    modelNmae.value = modelList.value[index].name
}

const handleChange = (val: string) => {
    if (val === 'left') {
        modelKey.value = modelKey.value === 0 ? 0 : modelKey.value - 1
    } else {
        modelKey.value = modelKey.value === 3 ? 3 : modelKey.value + 1
    }
    nextTick(() => {
        modelNmae.value = modelList.value[modelKey.value].name
    })
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
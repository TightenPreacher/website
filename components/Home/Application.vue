<template>
    <div class="flex flex-col pt-[10.42vw] h-[46.88vw]">
        <div class="flex justify-between w-[47.55vw]">
            <div class="text-[2.19vw] text-[#030303] leading-[2.55vw] h-[3.07vw] mt-[0.52vw]">应用场景</div>
            <div class="text-[#EBEBEB] text-[2.6vw] leading-[3.07vw] h-[3.65vw]">Application scenarios</div>
        </div>
        <div class="flex mt-[3.13vw]">
            <div class=" bg-[#37383A] w-[47.55vw] h-[27.29vw] mr-[3.02vw]"></div>
            <div class="text-[1.04vw] leading-[2.4vw]">
                <div v-for="(item, index) in modelList" :key="index"
                    @click="handleChange(index)"
                    :class="item.key === modelKey ? 'active text-[#080808] font-semibold':''"
                    class="text-[#8E8E8E] font-normal relative text-[1.46vw] h-[1.88vw] leading-[1.88vw] mb-[3.23vw] ml-[2.19vw] cursor-pointer"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modelKey = ref(0)
const modelList = ref([
    {name: '医疗看护', key: 0},
    {name: '康养陪护', key: 1},
    {name: '居家陪护', key: 2},
    {name: '情感陪互', key: 3},
    {name: '情感陪伴', key: 4},
    {name: '情感交互', key: 5},
])

const handleChange = (index: number) => {
    modelKey.value = index
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
  top: 0;
}
</style>
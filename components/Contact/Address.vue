<template>
    <div class="h-[40.09vw] pt-[0.94vw] flex flex-col">
        <div v-for="(item, index) in addressList" :key="index" class="mt-[6.77vw]">
            <div class="flex items-center justify-between">
                <div class="h-[3.07vw] text-[2.19vw] leading-[2.55vw] font-semibold text-[#030303]">{{ item.title }}</div>
                <div class="h-[2.34vw] text-[1.67vw] leading-[1.98vw] font-semibold text-[#030303]">{{ item.add }}</div>
            </div>
            <div class="divider mt-[1.56vw] mb-[2.6vw] h-0 bor"></div>
            <div class="h-[5.42vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#1F1F1F]">{{ item.text }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const addressList = ref([
    { title: '商业合作', add: '邮箱：BP@maschinerobot.com', text: '合作共赢，开启智能穿戴与脑机交互新时代。'},
    { title: '加入我们', add: '邮箱：HR@maschinerobot.com', text: '寻找有激情的工程师，加入我们，探索未来科技的无限可能！'},
])
</script>

<style scoped>
.bor::after {
    height: 1px;
    background-color: #B4BDC4;
}
.bor::before {
    height: 1px;
    background-color: #B4BDC4;
}
</style>
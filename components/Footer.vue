<template>
    <div class="w-full">
        <div class="my-0 mx-auto w-[62.5vw] pb-[6.25vw] flex flex-col justify-end h-[46.88vw] ">
            <div class="mb-[2.56vw] flex justify-between items-end">
                <img class="h-[3.75vw] w-[9.84vw]" src="~/assets/img/logo.png" alt="姬器人科技" srcset="">
                <div class=" font-semibold text-black text-[0.94vw] h-[1.72vw]">让每一个⼈参与构建AGI，让AGI解放每一个⼈</div>
            </div>
            <div class="divider my-0 h-0 bor"></div>
            <div class="flex text-[0.94vw] font-semibold h-[1.04vw] mt-[2.6vw]">
                <div v-for="(item, index) in tabList" :key="index" class="mr-[3.65vw]">{{ item.name }}</div>
            </div>
            <div class="flex justify-between items-end">
                <div class="flex flex-col text-black text-[0.94vw] leading-[2.19vw] font-normal">
                    <div>备案号：京ICP备 2022008549号 </div>
                    <div>© Copyright - MaschineRobot. All RightReserved</div>
                </div>
                <img class="h-[10.42vw] w-[8.33vw]" src="~/assets/img/wx.png" alt="智姬公众号" srcset="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabList = ref([
    {key:1,name:'首页'},
    {key:2,name:'产品'},
    {key:3,name:'新闻'},
    {key:4,name:'关于我们'},
    {key:5,name:'联系我们'},
])
</script>

<style scoped>
.bor::after {
    height: 1px;
    background-color: #5A5A5A;
}
.bor::before {
    height: 1px;
    background-color: #5A5A5A;
}
</style>
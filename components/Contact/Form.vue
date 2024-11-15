<template>
    <div class="h-[46.88vw] pt-[2.34vw]">
        <div class="h-[3.07vw] text-[2.19vw] leading-[2.55vw] font-semibold text-[#030303]">项目合作</div>
        <div class="mt-[1.56vw]">
            <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">公司/机构/组织名称*</div>
            <div class="mt-[0.52vw] w-full">
                <input type="text" placeholder="请输入"
                    class="input input-bordered w-full h-[5.21vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw]" />
            </div>
        </div>
        <div class="mt-[1.56vw] flex justify-between">
            <div>
                <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">联系人姓名*</div>
                <input type="text" placeholder="请输入"
                    class="input input-bordered h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
            </div>
            <div>
                <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">联系人电话*</div>
                <input type="text" placeholder="请输入"
                    class="input input-bordered h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
            </div>
            <div>
                <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">联系人邮箱*</div>
                <input type="text" placeholder="请输入"
                    class="input input-bordered h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
            </div>
        </div>
        <div class="mt-[1.56vw]">
            <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">意向合作方式</div>
            <div class="flex justify-between mt-[0.52vw]">
                <div v-for="(item, index) in cooperationList" :key="index" @click="handleCooperation(item.id)"
                    class="w-[15.16vw] h-[5.21vw] leading-[5.21vw] rounded-[4.17vw] text-center text-[1.25vw] cursor-pointer font-medium"
                    :class="item.id === cooperationId ? ' bg-black text-white' : 'bg-white text-[#555555]'">{{ item.name
                    }}</div>
            </div>
        </div>
        <div class="mt-[2.6vw]">
            <div
                class="w-[18.23vw] h-[5.21vw] leading-[5.21vw] bg-black text-white rounded-[4.17vw] text-center text-[1.25vw] cursor-pointer font-medium"
                @click="handleFrom"
            >
                提交</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cooperationList = ref([
    { name: '研发合作', id: 1 },
    { name: '市场合作', id: 2 },
    { name: '项目资助', id: 3 },
    { name: '其他', id: 4 },
])

const cooperationId = ref(1)

const handleCooperation = (id: number) => {
    cooperationId.value = id
}

const handleFrom = async () => {
    console.log("=====================");
    
    await $fetch('http://124.221.83.248/feishu', {
        method: 'POST',
        mode: 'cors',
        body: {
            "cooperation": {
                "organization": "哥本哈根大学",
                "contacts": "王先生",
                "phone": "13800000000",
                "email": "shuangshuangliu@maschinerobot.com"
            },
            // "intention": [1],
            "ways": [1]
        }
    })
    console.log("11111111111111111");
} 
</script>

<style scoped></style>
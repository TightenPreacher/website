<template>
    <div class="h-[46.88vw] pt-[2.34vw]  bg-cover bg-center"  :style="{ backgroundImage: `url(${home_bg2})` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative">
            <div class="h-[3.07vw] text-[2.19vw] leading-[2.55vw] font-semibold text-[#030303]">项目合作</div>
            <div class="mt-[1.56vw]">
                <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">公司/机构/组织名称*</div>
                <div class="mt-[0.52vw] w-full">
                    <input type="text" placeholder="请输入"
                        @input="(e) => handleChange('organization',e)"
                        class="input input-bordered w-full h-[5.21vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw]" />
                        <div v-if="org" class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#ff5722]">请输入公司/机构/组织名称</div>
                </div>
            </div>
            <div class="mt-[1.56vw] flex justify-between">
                <div>
                    <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">联系人姓名*</div>
                    <input type="text" placeholder="请输入"
                        @input="(e) => handleChange('contacts',e)"
                        class="input input-bordered h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
                        <div v-if="conta" class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#ff5722]">请输入联系人姓名</div>
                </div>
                <div>
                    <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">联系人电话*</div>
                    <input type="text" placeholder="请输入"
                        @input="(e) => handleChange('phone',e)"
                        class="input input-bordered h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
                        <div v-if="phone" class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#ff5722]">{{ phonetext }}</div>
                </div>
                <div>
                    <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">联系人邮箱*</div>
                    <input type="text" placeholder="请输入"
                        @input="(e) => handleChange('email',e)"
                        class="input input-bordered h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
                        <div v-if="email" class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#ff5722]">{{ emailtext }}</div>
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
    </div>
</template>

<script setup lang="ts">
import { ref,nextTick } from 'vue'
import home_bg2 from '@/assets/img/home_bg2.png'

const org = ref(false)
const conta = ref(false)
const phone = ref(false)
const email = ref(false)

const phonetext = ref('')
const emailtext = ref('')

const cooperation = ref<any>({
    organization: "",
    contacts: "",
    phone: "",
    email: ""
})

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

const handleChange = (type: string ,e: any) => {
    cooperation.value[type] = e.target.value
}

const handleFrom = () => {
    org.value = false
    conta.value = false
    phone.value = false
    email.value = false
    if (!cooperation.value.organization) {
        org.value = true
    }
    if (!cooperation.value.contacts) {
        conta.value = true
    }
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(cooperation.value.phone)) {
        phone.value = true
        phonetext.value = '请输入正确的手机号'
    }
    if (!cooperation.value.phone) {
        phone.value = true
        phonetext.value = '请输入联系人电话'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cooperation.value.email)) {
        email.value = true
        emailtext.value = '请输入正确的邮箱'
    }
    if (!cooperation.value.email) {
        email.value = true
        emailtext.value = '请输入联系人邮箱'
    }

    if (org.value || conta.value || phone.value || email.value) return
    if (cooperation.value.organization > 50) {
        cooperation.value.organization = cooperation.value.organization.substring(0, 50)
    }
    if (cooperation.value.contacts > 10) {
        cooperation.value.contacts = cooperation.value.contacts.substring(0, 10)
    }
    nextTick(async() => {
        await $fetch('/feishu', {
            method: 'POST',
            body: {
                "cooperation": cooperation.value,
                "intention": [cooperationId.value],
                "ways": [cooperationId.value]
            }
        })
    })
} 
</script>

<style scoped></style>
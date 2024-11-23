<template>
    <div class="pt-[2.34vw]  bg-cover bg-center" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(${home_bg2})` }">
        <div class="toast toast-top toast-center z-50 text-[1.2vw]" v-if="submi !== 0">
            <div class="alert text-[#67c23a] bg-[#f0f9eb] border-[#e1f3d8] p-[0.8vw] px-[1.5vw]" v-if="submi === 1">
                <span>{{lan === 'zh' ? '提交成功' : 'Submission successful'}}</span>
            </div>

            <div class="alert text-[#e6a23c] bg-[#fdf6ec] border-[#faecd8] p-[0.8vw] px-[1.5vw]" v-if="submi === 2">
                <span>{{lan === 'zh' ? '工作人员将尽快与您联系，请勿重复提交，谢谢您的耐心' : 'The staff will contact you as soon as possible. Please do not submit repeatedly. Thank you for your patience.'}}</span>
            </div>
        </div>

        <div class="my-0 mx-auto w-[62.5vw] h-full relative">
            <div class="h-[3.07vw] text-[2.19vw] leading-[2.55vw] font-semibold text-[#030303]">{{lan === 'zh' ? '项目合作' : 'Project Collaboration'}}</div>
            <div class="mt-[1.56vw]">
                <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">{{lan === 'zh' ? '公司/机构/组织名称*' : 'Company/Organization/Institution Name*'}}</div>
                <div class="mt-[0.52vw] w-full">
                    <input type="text" :placeholder="lan === 'zh' ? '公司名称不能超过50个字' : 'Limit of 100 words'"
                        @input="(e: any) => handleChange('organization',e)" v-model="cooperation.organization" maxlength="50"
                        class="input w-full h-[5.21vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw]" />
                        <div v-if="org" class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#ff5722]">{{lan === 'zh' ? '请输入公司/机构/组织名称' : 'Please enter Company/Organization/Institution Name'}}</div>
                </div>
            </div>
            <div class="mt-[1.56vw] flex justify-between">
                <div>
                    <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">{{lan ==='zh' ? '联系人姓名*' : 'Contact Person Name*'}}</div>
                    <input type="text" :placeholder="lan === 'zh' ? '联系人不能超过15个字' : 'Limit of 15 words'"
                        @input="(e: any) => handleChange('contacts',e)" v-model="cooperation.contacts" maxlength="15"
                        class="input h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
                        <div v-if="conta" class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#ff5722]">{{lan === 'zh' ? '请输入联系人姓名' : 'Please enter contact person name'}}</div>
                </div>
                <div>
                    <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">{{lan === 'zh' ? '联系人电话*' : 'Contact Person Phone*'}}</div>
                    <input type="text" :placeholder="lan === 'zh' ? '请输入' : 'Please enter'"
                        @input="(e: any) => handleChange('phone',e)" v-model="cooperation.phone"
                        class="input h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
                        <div v-if="phone" class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#ff5722]">{{ phonetext }}</div>
                </div>
                <div>
                    <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">{{lan === 'zh' ? '联系人邮箱*' : 'Contact Person Email*'}}</div>
                    <input type="text" :placeholder="lan === 'zh' ? '请输入' : 'Please enter'"
                        @input="(e: any) => handleChange('email',e)" v-model="cooperation.email"
                        class="input h-[5.21vw] w-[20.31vw] rounded-[4.17vw] text-[1.25vw] pl-[1.56vw] mt-[0.52vw]" />
                        <div v-if="email" class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#ff5722]">{{ emailtext }}</div>
                </div>
            </div>
            <div class="mt-[1.56vw]">
                <div class="h-[2.71vw] text-[1.25vw] leading-[2.71vw] font-normal text-[#555555]">{{lan === 'zh' ? '意向合作方式' : 'Intended Collaboration Method:'}}</div>
                <div class="flex justify-between mt-[0.52vw]">
                    <div v-for="(item, index) in cooperationList" :key="index" @click="handleCooperation(item.id)"
                        class="w-[15.16vw] h-[5.21vw] rounded-[4.17vw] text-center text-[1.25vw] cursor-pointer whitespace-pre-wrap"
                        :class="`${item.id === cooperationId ? ' bg-black text-white font-medium' : 'bg-white text-[#555555] font-normal'} ${lan === 'zh' ? 'leading-[5.21vw]' : 'leading-[1.9vw] flex items-center justify-center'}`">
                        {{ lan === 'zh' ? item.name : item.name2 }}</div>
                </div>
            </div>
            <div class="mt-[2.6vw]">
                <div
                    class="w-[18.23vw] h-[5.21vw] leading-[5.21vw] bg-black text-white rounded-[4.17vw] text-center text-[1.25vw] cursor-pointer font-medium"
                    @click="handleFrom"
                >{{lan === 'zh' ? '提交' : 'Submit'}}</div>
            </div>    
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,nextTick } from 'vue'
import {getClientType, getLang} from '@/utils/utils.js'
const lan = ref(getLang())
const isWeb = ref(getClientType() === 'web')
import home_bg2 from '@/assets/img/home_bg2.png'
import { time } from 'console';

const org = ref(false)
const conta = ref(false)
const phone = ref(false)
const email = ref(false)
const submi = ref(0)

const phonetext = ref('')
const emailtext = ref('')

const cooperation = ref<any>({
    organization: "",
    contacts: "",
    phone: "",
    email: ""
})

const cooperationList = ref([
    { name: '研发合作', name2: 'R&D\nCollaboration', id: 1 },
    { name: '市场合作', name2: 'Duration-based Collaboration', id: 2 },
    { name: '项目资助', name2: 'Project\nFunding', id: 3 },
    { name: '其他', name2: 'Others', id: 4 },
])

const cooperationId = ref(4)

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
        phonetext.value = lan.value === 'zh' ? '格式错误，请核对后重新输入' : 'Format error, please check and re-enter.'
    }
    if (!cooperation.value.phone) {
        phone.value = true
        phonetext.value = lan.value === 'zh' ? '请输入联系人电话' : 'Please enter contact person phone'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cooperation.value.email)) {
        email.value = true
        emailtext.value = lan.value === 'zh' ? '格式错误，请核对后重新输入' : 'Format error, please check and re-enter.'
    }
    if (!cooperation.value.email) {
        email.value = true
        emailtext.value = lan.value === 'zh' ? '请输入联系人邮箱' : 'Please enter contact person email'
    }

    if (org.value || conta.value || phone.value || email.value) return
    if (cooperation.value.organization > 50) {
        cooperation.value.organization = cooperation.value.organization.substring(0, 50)
    }
    if (cooperation.value.contacts > 15) {
        cooperation.value.contacts = cooperation.value.contacts.substring(0, 15)
    }
    nextTick(async() => {
        let res: any = await $fetch('/feishu', {
            method: 'POST',
            body: {
                "cooperation": cooperation.value,
                "intention": [cooperationId.value],
                "ways": [cooperationId.value],
                "product": "ex"
            }
        })
        if (res.code == 10001) {
            submi.value = 2
        } else {
            submi.value = 1
            cooperation.value = {
                organization: "",
                contacts: "",
                phone: "",
                email: ""
            }
            cooperationId.value = 4
        }

        setTimeout(() => {
            submi.value = 0
        }, 2000);
    })
} 
</script>

<style scoped>
input::placeholder {
    font-weight: 400;
    color: #B6C0CA;
}
input {
    font-weight: 600;
}
input:focus {
    outline: transparent;
}
</style>
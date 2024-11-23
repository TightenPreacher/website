<template>
    <div class="flex flex-col w-full">
       <div :id="`mod${index+1}`" v-for="(item, index) in modList" :key="index" class="relative bg-cover bg-center" :class="isWeb ? ' h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(/img/bg_pro${index+1}.png)` }">
            <div class="my-0 mx-auto w-[62.5vw] h-full relative">
                <div class="absolute" :class="(lan === 'zh' ? item.cls : item.cls3)+item.cls2">
                    <div class=" text-[2.19vw] leading-[2.55vw] font-semibold text-black" :class="lan === 'zh' ? '' : 'w-[20.8vw]'">{{ lan === 'zh' ? item.title : item.title2 }}</div>
                    <div class="text-[1.25vw] font-normal text-[#1F1F1F] mt-[2.08vw]" :class="lan !== 'zh' && index % 2 === 0 ? 'w-[27.76vw] leading-[2.08vw]' : (lan !== 'zh' && index % 2 !== 0 ? 'w-[20.8vw] leading-[2.08vw]' : 'leading-[2.71vw]')">
                        <div>{{ lan === 'zh' ? item.content : item.content3 }}</div>
                        <div v-if="item.content2 && lan === 'zh'">{{ item.content2 }}</div>   
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
import { useRoute } from 'vue-router';

const route = useRoute();

const modList = ref([
    {title: '医疗看护', title2: 'Medical Care', cls: 'top-[20.83vw] left-[2.08vw]', cls3: 'top-[18.8vw] left-[2.08vw]',cls2: " w-[23.91vw]", content:'通过人形机器人搭载智能交互系统', content2:'实现医学临床场景下的病人看护与护理陪护', content3: 'By equipping humanoid robots with intelligent interaction systems, patient care and nursing companionship can be provided in medical clinical scenarios.'},
    {title: '康养陪护', title2: 'Elderly Care and Companion', cls: 'top-[19.27vw] -right-[3.8vw]', cls3: 'top-[16.15vw] -right-[3.8vw]',cls2: " w-[21.41vw]", content:'通过人形机器人搭载智能交互系统', content2:'实现养老院环境下的老人陪护与看护', content3: 'By equipping humanoid robots with intelligent  interaction  systems, elderly companionship and care can be provided in nursing home environments.'},
    {title: '居家陪护', title2: 'Home Care and Companion', cls: 'top-[18.54vw] left-[2.08vw]', cls3: 'top-[16.7vw] left-[2.08vw]',cls2: " w-[21.41vw]", content:'通过人形机器人搭载智能交互系统', content2:'实现居家环境下的陪护与看护', content3: 'By equipping humanoid robots with intelligent interaction systems, companionship and care can be provided in home environments.'},
    {title: '情感陪伴', title2: 'Emotional Companionship', cls: 'top-[19.27vw]  right-0', cls3: 'top-[15.6vw]  right-0',cls2: " w-[23.91vw]", content:'通过人形机器人搭载情感智能体实现机器人的情感特性表达，从而实现机器与人的独特情感交互体验', content2:'', content3: "By equipping humanoid robots with emotional intelligence agents, the robot's emotional traits are expressed, enabling a unique emotional interaction experience between humans and machines."},
    {title: '情感陪护', title2: 'Emotional Companionship', cls: 'top-[16.93vw] left-0', cls3: 'top-[15.6vw] left-0',cls2: " w-[21.41vw]", content:'通过仿生人形机器人搭载智能交互系统 实现对用户的情感陪护与交互娱乐', content2:'', content3: 'By equipping bionic humanoid robots with intelligent interaction systems, emotional companionship and interactive entertainment can be provided to users.'},
    {title: '情感交互', title2: 'Emotional Interaction', cls: 'top-[16.93vw] right-[-4.53vw]', cls3: 'top-[13.83vw] right-[-4.53vw]',cls2: " w-[26.46vw]", content:'通过佩戴脑机接口系统，并且与搭载智能系统的人形机器人进行情感交互，从而实现基于个人情感精准监测的情感互动', content2:'', content3: 'By wearing a brain-machine interface system and interacting emotionally with a humanoid robot equipped with an intelligent system, emotional interaction based on precise monitoring of personal emotions can be achieved.'},
])

onMounted(() => {
    nextTick(() => {
        if (route.query.to == '2') {
            document.getElementById('mod2')?.scrollIntoView({block:'start'})
        } else if (route.query.to == '3') {
            document.getElementById('mod3')?.scrollIntoView({block:'start'})
        } else if (route.query.to == '4') {
            document.getElementById('mod4')?.scrollIntoView({block:'start'})
            console.log(document.getElementById('mod4'));
        } else if (route.query.to == '5') {
            document.getElementById('mod5')?.scrollIntoView({block:'start'})
        } else if (route.query.to == '6') {
            document.getElementById('mod6')?.scrollIntoView({block:'start'})
        } 
    })
})
</script>

<style scoped>

</style>
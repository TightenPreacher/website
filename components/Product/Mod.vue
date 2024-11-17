<template>
    <div class="flex flex-col w-full">
       <div :ref="`mod${index+1}`" v-for="(item, index) in modList" :key="index" class="relative h-[46.88vw] bg-cover bg-center" :style="{ backgroundImage: `url(/img/bg_pro${index+1}.png)` }">
            <div class="my-0 mx-auto w-[62.5vw] h-full relative">
                <div class="absolute" :class="item.cls+item.cls2">
                    <div class="h-[3.07vw] text-[2.19vw] leading-[2.55vw] font-semibold text-black">{{ item.title }}</div>
                    <div class="text-[1.25vw] leading-[2.71vw] font-normal text-[#1F1F1F] mt-[2.08vw]">
                        <div>{{ item.content }}</div>
                        <div v-if="item.content2">{{ item.content2 }}</div>   
                    </div>
                </div>
            </div>
        </div> 
    </div>
    
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const mod1 = ref()
const mod2 = ref()
const mod3 = ref()
const mod4 = ref()
const mod5 = ref()
const mod6 = ref()

const modList = ref([
    {title: '医疗看护', cls: 'top-[20.83vw] left-[2.08vw]', cls2: " w-[23.91vw]", content:'通过人形机器人搭载智能交互系统', content2:'实现医学临床场景下的病人看护与护理陪护' },
    {title: '康养陪护', cls: 'top-[19.27vw] -right-[3.8vw]', cls2: " w-[21.41vw]", content:'通过人形机器人搭载智能交互系统', content2:'实现养老院环境下的老人陪护与看护' },
    {title: '居家陪护', cls: 'top-[18.54vw] left-[2.08vw]', cls2: " w-[21.41vw]", content:'通过人形机器人搭载智能交互系统', content2:'实现居家环境下的陪护与看护' },
    {title: '情感陪伴', cls: 'top-[19.27vw]  right-0', cls2: " w-[23.91vw]", content:'通过人形机器人搭载情感智能体实现机器人的情感特性表达，从而实现机器与人的独特情感交互体验', content2:'' },
    {title: '情感陪护', cls: 'top-[16.93vw] left-0', cls2: " w-[21.41vw]", content:'通过仿生人形机器人搭载智能交互系统 实现对用户的情感陪护与交互娱乐', content2:'' },
    {title: '情感交互', cls: 'top-[16.93vw] right-[-4.53vw]', cls2: " w-[26.46vw]", content:'通过佩戴脑机接口系统，并且与搭载智能系统的人形机器人进行情感交互，从而实现基于个人情感精准监测的情感互动', content2:'' },
])

onMounted(() => {
    nextTick(() => {
        if (route.query.to == '2' && mod2.value) {
            mod2.value[0].scrollIntoView({block:'start'})
        } else if (route.query.to == '3' && mod3.value) {
            mod3.value[0].scrollIntoView({block:'start'})
        } else if (route.query.to == '4' && mod4.value) {
            mod4.value[0].scrollIntoView({block:'start'})
        } else if (route.query.to == '5' && mod5.value) {
            mod5.value[0].scrollIntoView({block:'start'})
        } else if (route.query.to == '6' && mod6.value) {
            mod6.value[0].scrollIntoView({block:'start'})
        }
    })
})
</script>

<style scoped>

</style>
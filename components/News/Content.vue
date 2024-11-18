<template>
    <div class="w-full pt-[2.08vw] relative">
        <img class="w-full z-10 absolute top-0 left-0" src="~/assets/img/home_bg2.png" alt="新闻">
        <img class="w-full z-10 absolute bottom-0 left-0" src="~/assets/img/home_bg3.png" alt="新闻">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative z-30">
            <div :id="`news${index+1}`" v-for="(item, index) in newList" :key="index" class="mb-[4.17vw]">
                <div class="relative rounded-[1.04vw] overflow-hidden">
                    <img class="w-full" :src="`/img/new${index+1}.png`" alt="新闻">
                    <div class="bg-[#010406] h-[6.15vw] w-[6.77vw] absolute right-0 bottom-0 z-10 text-white text-center pt-[1.09vw] pl-[0.63vw] rounded-tl-[1.04vw]">
                        <div class="font-semibold h-[2.34vw] text-[1.67vw] w-[6.15vw]">{{ item.time1 }}</div>
                        <div class="font-normal h-[1.46vw] text-[1.04vw] w-[6.15vw]">{{ item.time2 }}</div>
                    </div>
                </div>
                <div class="flex flex-col mt-[1.56vw] text-[black] font-semibold text-[1.25vw]">
                    <div>{{ item.title }}</div>
                    <div v-if="item.title2">{{ item.title2 }}</div>
                </div>
                <div class="mt-[1.04vw] text-[1.04vw] text-[#1F1F1F] font-normal leading-[1.98vw]">{{ item.content }}</div>    
            </div>    
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const newList = ref([
    {time1: '06/29', time2: '2024', title: '姬器人创始人  CTO  徐文强 博士出席 ', title2: '2024，AIEC人工智能与具身智能展望交流会并做专题报告分享：脑机接口与俱身智能', content: '2024年6月29日，由哈佛大学无锡校友会举办的 AIEC人工智能与具身智能展望与交流会中，姬器人科技创始人，徐文强博士受邀为大家进行题目为：新一代人机交互技术：脑机接口与俱身智能 的专题报告。在该报告中，分析了脑机接口与俱身智能技术如何革新我们的交互方式，以及它在未来智能系统中的应用潜力，为行业描述了一个关键高效的人机交互蓝图。'},
    {time1: '10/11', time2: '2024', title: '姬器人创始人  CTO  徐文强博士 代表公司参加 ', title2: '第八届创意太仓全球创新创业大赛重庆站专场，并获奖', content: '2024年10月11日，苏州市太仓市委常委、组织部部长、苏州市人社局副局长、太仓市政府副市长、市委组织部常务副部长、太仓市人社局局长一行，在重庆举办路演，邀请智能制造、新能源、新材料、新一代信息技术、航空航天、芯片等等，姬器人创始人徐文强博士参加 并获第三名。'},
    {time1: '10/26', time2: '2024', title: '姬器人创始人 CEO卢树强 出席声网 RTE2024实时互联网大会', title2: '并于无所不在的计算：空间计算和新硬件技术专场，做专题报告： 脑机接口与俱身智能计算体系', content: '2024年10月26日，创始人卢树强受邀参加出席由声网科技主办的 声网RTE2024实时互联网大会，并在无所不在的计算：龙剑计算和新硬件技术专利论坛做   脑机接口与俱身智能计算体系的 技术专题报告，该报告主要给听众分享了脑机与俱身人形机器人的计算约束和计算难题，以及对应的计算体系与计算架构设计方案，并给大家分享了脑机与俱身机器人的真实行业应用场景与前景。'},
])

onMounted(() => {
    nextTick(() => {
        if (route.query.to == '1') {
            document.getElementById('news1')?.scrollIntoView({block:'start'})
        } else if (route.query.to == '2') {
            document.getElementById('news2')?.scrollIntoView({block:'start'})
        } else if (route.query.to == '3') {
            document.getElementById('news3')?.scrollIntoView({block:'start'})
        }
    })
})
</script>

<style scoped>

</style>
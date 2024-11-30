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
                <div class="flex flex-col mt-[1.56vw] text-[black] font-semibold text-[1.15vw] leading-[2.08vw]">
                    <div>{{ lan === 'zh' ? item.title : item.title3 }}</div>
                    <div v-if="item.title2 && lan === 'zh'">{{ item.title2 }}</div>
                </div>
                <div class="mt-[1.04vw] text-[1.04vw] text-[#1F1F1F] font-normal leading-[1.98vw]">{{ lan === 'zh' ? item.content : item.content2 }}</div>    
                <div class="mt-[0.83vw] text-[1.04vw] text-[#1F1F1F] font-normal leading-[1.98vw]" v-if="item.content3 && lan !== 'zh'">{{ item.content3 }}</div>    
            </div>    
            <!-- <div class="h-[46.88vw]"></div> -->
        </div>
        <img v-if="show" @click="goTop()" class="w-[6.15vw] h-[6.15vw] fixed right-[18.75vw] bottom-[5vw] z-50 cursor-pointer" src="/img/totop.png" alt="" srcset="">
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { getLang } from '@/utils/utils.js';
const { $eventBus } = useNuxtApp();

const lan = ref(getLang())
const route = useRoute();
const show = ref(false);
const newList = ref([
    {time1: '06/29', time2: '2024', title: '姬器人创始人  CTO  徐文强 博士出席 ', title2: '2024，AIEC人工智能与具身智能展望交流会并做专题报告分享：脑机接口与俱身智能', title3: 'Dr. Xu Wenqiang, Founder and CTO of Ex Maschine attended the 2024 AIEC Artificial Intelligence and Embodied Intelligence Outlook and Exchange Conference and delivered a special report on Brain-Machine Interfaces and Embodied Intelligence.',content: '2024年6月29日，由哈佛大学无锡校友会举办的 AIEC人工智能与具身智能展望与交流会中，姬器人科技创始人，徐文强博士受邀为大家进行题目为：新一代人机交互技术：脑机接口与俱身智能 的专题报告。在该报告中，分析了脑机接口与俱身智能技术如何革新我们的交互方式，以及它在未来智能系统中的应用潜力，为行业描述了一个关键高效的人机交互蓝图。', content2: 'On June 29, 2024, at the AIEC Artificial Intelligence and Embodied Intelligence Outlook and Exchange Conference, organized by the Harvard University Wuxi Alumni Association, Dr. Xu Wenqiang, Founder of Ex Maschine Technology, was invited to give a special report titled "Next-Generation Human-Machine Interaction Technology: Brain-Machine Interfaces and Empowering Intelligence." In this presentation, Dr. Xu analyzed how brain-machine interfaces and embodied intelligence technologies are revolutionizing our methods of interaction, as well as their potential applications in future intelligent systems, presenting an essential and efficient blueprint for human-machine interaction.'},
    {time1: '10/11', time2: '2024', title: '姬器人创始人  CTO  徐文强博士 代表公司参加 ', title2: '第八届创意太仓全球创新创业大赛重庆站专场，并获奖', title3: 'Dr. Xu Wenqiang, Founder and CTO of Ex Maschine, represented the company at the 8th Creative Taicang Global Innovation and Entrepreneurship Competition, Chongqing Station, and won an award.',content: '2024年10月11日，苏州市太仓市委常委、组织部部长、苏州市人社局副局长、太仓市政府副市长、市委组织部常务副部长、太仓市人社局局长一行，在重庆举办路演，邀请智能制造、新能源、新材料、新一代信息技术、航空航天、芯片等等，姬器人创始人徐文强博士参加 并获第三名。', content2: 'On October 11, 2024, a delegation from Taicang, including the Standing Committee Member of the Taicang Municipal Party Committee, the Minister of the Organization Department, the Deputy Director of the Suzhou Human Resources and Social Security Bureau, the Vice Mayor of Taicang, the Executive Deputy Minister of the Organization Department of the Taicang Municipal Party Committee, and the Director of the Taicang Human Resources and Social Security Bureau, held a roadshow in Chongqing. The event invited participants from fields such as intelligent manufacturing, new energy, new materials, next-generation information technology, aerospace, and semiconductors. Dr. Xu Wenqiang, Founder of Ex Maschine, attended the event and received an award.'},
    {time1: '10/26', time2: '2024', title: '姬器人创始人 CEO卢树强 出席声网 RTE2024实时互联网大会', title2: '并于无所不在的计算：空间计算和新硬件技术专场，做专题报告： 脑机接口与俱身智能计算体系', title3: 'Lu Shuqiang, Founder and CEO of Ex Maschine, attended the Agora RTE2024 Real-Time Internet Conference and delivered a special report on Brain-Machine Interfaces and Embodied Intelligence Computing Systems at the Omnipresent Computing: Spatial Computing and New Hardware Technology session.',content: '2024年10月26日，创始人卢树强受邀参加出席由声网科技主办的 声网RTE2024实时互联网大会，并在无所不在的计算：龙剑计算和新硬件技术专利论坛做   脑机接口与俱身智能计算体系的 技术专题报告，该报告主要给听众分享了脑机与俱身人形机器人的计算约束和计算难题，以及对应的计算体系与计算架构设计方案，并给大家分享了脑机与俱身机器人的真实行业应用场景与前景。', content2: 'On October 26, 2024, Founder Lu Shuqiang was invited to attend the Agora RTE2024 Real-Time Internet Conference, organized by Agora Technology. At the Omnipresent Computing: Dragon Sword Computing and New Hardware Technology Patent Forum, he gave a technical report on Brain-Machine Interfaces and Embodied Intelligence Computing Systems. The report primarily shared with the audience the computational constraints and challenges faced by brain-machine interfaces and embodied humanoid robots, as well as corresponding computing systems and architecture design solutions. Additionally, Lu Shuqiang presented real-world industry application scenarios and the future prospects of brain-machine interfaces and humanoid robots.'},
    {time1: '11/24', time2: '2024', title: '姬器人创始人 CEO卢树强 出席U8世界创新峰会', title2: '并做 脑机接口与俱身智能技术与应用分享报告', title3: ' Founder and CEO of Ex Maschine, Lu Shuqiang, attended the U8 World Innovation Summit and delivered a presentation on "Brain-Computer Interface and Embodied Intelligence Technology and Applications."',content: '2024年11月24日，创始人卢树强受邀参加由U8世界创新峰会，创新改变世界（Innovation Changes The World）：并于U8全球新质生产力环节做脑机接口与俱是智能技术与应用报告分享，该报告主要给听众分享了脑机接口与俱身人形机器人的技术体系和对应的产品应用，并给大家分享了脑机接口与俱身机器人的未来发展路线与真实行业应用前景。U8（牛津大学、麻省理工学院、斯坦福大学、哈佛大学、北京大学、剑桥大学、加州理工学院、清华大学 ）', content2: 'On November 24, 2024, founder Lu Shuqiang was invited to participate in the U8 World Innovation Summit, themed "Innovation Changes the World." During the U8 Global New Productivity segment, he delivered a presentation on "Brain-Computer Interface and Embodied Intelligence Technology and Applications." The report focused on sharing the technical framework of brain-computer interfaces and embodied humanoid robots, as well as their corresponding product applications. Lu also discussed the future development roadmap and real-world industry application prospects of brain-computer interfaces and embodied robots.',content3: 'U8 consists of leading institutions such as the University of Oxford, MIT, Stanford University, Harvard University, Peking University, the University of Cambridge, Caltech, and Tsinghua University.'},
])

const handleScroll = (val:boolean) => {
    show.value = val
}

const goTop = () => {
    document.getElementById('news1')?.scrollIntoView({block:'start'})
}

onMounted(() => {
    $eventBus.on('scroll',(data:any)=> handleScroll(data))
    nextTick(() => {
        if (route.query.to == '1') {
            document.getElementById('news1')?.scrollIntoView({block:'start'})
        } else if (route.query.to == '2') {
            document.getElementById('news2')?.scrollIntoView({block:'start'})
        } else if (route.query.to == '3') {
            document.getElementById('news3')?.scrollIntoView({block:'start'})
        } else if (route.query.to == '4') {
            document.getElementById('news4')?.scrollIntoView({block:'start'})
        }
    })
})
</script>

<style scoped>

</style>
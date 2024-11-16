<template>
    <div class="w-full bg-cover bg-center" :style="{ backgroundImage: `url(/img/footer_bg.png)` }">
        <div class="my-0 mx-auto w-[62.5vw] pb-[6.25vw] flex flex-col justify-end h-[46.88vw]">
            <div class="mb-[2.56vw] flex justify-between items-end">
                <img class="h-[3.75vw] w-[9.84vw]" src="~/assets/img/logo.png" alt="姬器人科技" srcset="">
                <div class=" font-semibold text-black text-[0.94vw] h-[1.72vw]">让每一个⼈参与构建AGI，让AGI解放每一个⼈</div>
            </div>
            <div class="divider my-0 h-0 bor"></div>
            <div class="flex text-[0.94vw] font-semibold h-[1.04vw] mt-[2.6vw]">
                <div v-for="(item, index) in tabList" @click="handleChangeTab(item.key)" :key="index" class="mr-[3.65vw]" :class="item.key === 'product' ? 'dropdown dropdown-hover':''">
                    <div v-if="item.key === 'product'" role="button" tabindex="0">
                    {{ item.name }}
                        <ul tabindex="0" class="dow dropdown-content rounded-[0.52vw] z-[1] w-[7.81vw]">
                            <div class="w-full h-full  px-[1.04vw] py-[1.56vw] rounded-[0.52vw] bg-[rgba(0,0,0,0.3)]">
                            <li @click="handleChangeMenu(1)" class="text-[1.03vw] mb-[1.47vw]"><a>技术产品</a></li>
                            <li @click="handleChangeMenu(2)"><a>行业方案</a></li> 
                            </div>
                        </ul>
                    </div>
                    {{ item.key === 'product' ? "" : item.name }}
                </div>
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
const { $eventBus } = useNuxtApp();

const tabList = ref([
    {name: '首页', key: 'home'},
    {name: '产品', key: 'product'},
    {name: '新闻', key: 'news'},
    {name: '关于我们', key: 'about'},
    {name: '联系我们', key: 'contactUs'},
])

const handleChangeTab = (val: string) => {
    $eventBus.emit('handleChangeTab', val);
}
const handleChangeMenu = (val: number) => {
    $eventBus.emit('handleChangeMenu', val);
}
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
.dow {
  margin-top: 0.62vw;
  margin-left: -1.15vw;
  background: #fff;
  color: #FFFFFF;
  font-weight: 400;
  li {
    height: 1.1vw;
  }
  li:hover {
    font-weight: 600;
  }
}
</style>
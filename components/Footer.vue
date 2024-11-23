<template>
    <div class="foo w-full bg-cover bg-center" :style="{ backgroundImage: `url(/img/footer_bg.png)` }">
        <div class="my-0 mx-auto w-[62.5vw] pb-[6.25vw] flex flex-col justify-end h-[46.88vw]" @mouseleave="handleLeave('')">
            <div class="mb-[2.56vw] flex justify-between items-end">
                <img class="h-[3.75vw] w-[9.84vw]" src="~/assets/img/logo.png" alt="姬器人科技" srcset="">
                <div class="font-semibold text-black text-[0.94vw] h-[1.72vw]">{{lan === 'zh' ? '让每一个人参与构建AGI，让AGI解放每一个人' : 'Let everyone participate in building AGI, and let AGI free everyone.'}}</div>
            </div>
            <div class="divider my-0 h-0 bor"></div>
            <div class="flex text-[0.94vw] font-semibold h-[1.04vw] mt-[2.6vw]">
                <div v-for="(item, index) in tabList" @mousemove="(e: any)=>handlemove(e,item.key)" @click="handleChangeTab(item.key)" :key="index" class="mr-[3.65vw] cursor-pointer" @mouseenter="handleLeave(item.key)" :class="item.key === 'product' ? 'dropdown dropdown-hover':''">
                    <div v-if="item.key === 'product'" role="button" tabindex="0" id="pro2" @mousemove="(e:any)=>handlemove(e,'123')">
                      {{ lan === 'zh' ? item.name : item.name2 }}
                        <ul tabindex="0" class="dow dropdown-content rounded-[0.52vw] z-[1] font-normal" :class="lan === 'zh' ? 'w-[7.81vw]' : 'w-[11.24vw]'">
                            <div class="w-full flex flex-col justify-center h-[7.13vw]  px-[1.04vw]  rounded-[0.52vw] bg-[rgba(0,0,0,0.3)] text-[rgba(255,255,255,0.6)] text-[0.94vw]">
                            <li @click="handleChangeMenu(1)" class="mb-[1.47vw]"><a>{{ lan === 'zh' ? '技术产品' : 'Technical Products'}}</a></li>
                            <li @click="handleChangeMenu(2)" class="mb-[0.2vw]"><a>{{ lan === 'zh' ? '行业方案' : 'Industry Solutions'}}</a></li> 
                            </div>
                        </ul>
                    </div>
                    {{ item.key === 'product' ? "" : (lan === 'zh' ? item.name : item.name2) }}
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
import { getLang } from '@/utils/utils.js';

const lan = ref(getLang())
const tabList = ref([
    {name: '首页', name2: 'Home',key: 'home'},
    {name: '产品', name2: 'Production',key: 'product'},
    {name: '新闻', name2: 'News',key: 'news'},
    {name: '关于我们', name2: 'About Us',key: 'about'},
    {name: '联系我们', name2: 'Contact',key: 'contact'},
])

const handleChangeTab = (val: string) => {
  if(val === 'product') return
  navigateTo(`/${val === 'home' ? '' : val}`)
}
const handleChangeMenu = (val: number) => {
  navigateTo(`/product?type=${val}`)
  let he: any = document.querySelector('.head')
  he.focus()
}

const handlemove = (e:any,val:string) => {
  e.stopPropagation()
  if (!(val === 'product' || val === '123')) return 
  let he: any = document.getElementById('pro2')
  he.focus()
}

const handleLeave = (val: string) => {
  if ((val === 'product')) return 
  
  let he: any = document.getElementById('pro2')
  he.blur()
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
    color: #fff;
  }
}
.foo:focus-visible {
    outline: transparent;
  }
</style>
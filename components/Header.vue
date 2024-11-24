<template>
    <div class="head absolute top-0 left-1/2 -translate-x-2/4 w-[62.5vw] flex justify-between z-20" tabindex="-1" @mouseleave="handleLeave('')" >
          <img class="h-[4.01vw] w-[10.52vw] mt-[2.86vw]" src="~/assets/img/logo.png" alt="姬器人科技" srcset="">
          <div class="flex h-[1.04vw] mt-[3.85vw] text-[0.94vw]">
            <div class="flex">
              <div v-for="(item) in tabList" :key="item.key" @mousemove="(e: any)=>handlemove(e,item.key)" @click="handleChangeTab(item.key)"
                :class="`${tabName === item.key ? ' h-[1.73vw] text-black font-semibold active':''} ${item.key === 'product' ? 'dropdown dropdown-hover':''}`" 
                class="cursor-pointer mr-[2.65vw] text-[#1F1F1F] font-normal relative" @mouseenter="handleLeave(item.key)"
              >
                <div v-if="item.key === 'product'" role="button" tabindex="0" id="pro" @mousemove="(e:any)=>handlemove(e,'123')">
                  {{ lan === 'zh' ? item.name : item.name1 }}
                  <ul tabindex="0" class="dow dropdown-content rounded-[0.52vw] z-[1] font-normal" :class="lan === 'zh' ? 'w-[7.81vw]' : 'w-[11.24vw]'">
                    <div class="w-full flex flex-col justify-center  px-[1.04vw] rounded-[0.52vw] bg-[rgba(0,0,0,0.3)] text-[rgba(255,255,255,0.6)] text-[0.94vw] h-[7.13vw]">
                      <li @click="handleChangeMenu(1)" class="mb-[1.47vw] -mt-[0.3vw]"><a>{{ lan === 'zh' ? '技术产品' : 'Technical Products'}}</a></li>
                      <li @click="handleChangeMenu(2)"><a>{{ lan === 'zh' ? '行业方案' : 'Industry Solutions'}}</a></li> 
                    </div>
                  </ul>
                </div>
                {{ item.key === 'product' ? "" : (lan === 'zh' ? item.name : item.name1) }}
              </div>
              
            </div>
            <div class="flex justify-center">
              <div class="cursor-pointer" :class="lan === 'zh' ? 'font-semibold' : ''" @click="handleChangeLang('zh')">中文</div>
              ｜
              <div class="cursor-pointer" :class="lan === 'zh' ? '' : 'font-semibold'" @click="handleChangeLang('en')">EN</div>
            </div>
          </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getLang } from '@/utils/utils'
const props = defineProps({
    type: {
        type: String,
        required: true
    }
})
const lan = ref(getLang())
const tabList = ref([
  {name: '首页', name1: 'Home',key: 'home'},
  {name: '产品', name1: 'Production',key: 'product'},
  {name: '新闻', name1: 'News',key: 'news'},
  {name: '关于我们', name1: 'About Us',key: 'about'},
  {name: '联系我们', name1: 'Contact',key: 'contact'},
])
const tabName = ref(props.type)

const handleChangeTab = (val: any) => {
  if(val === 'product') return
  navigateTo(`/${val === 'home' ? '' : val}`)
}

const handleChangeMenu = (val: any) => {
  navigateTo(`/product?type=${val}`)
  let he: any = document.querySelector('.head')
  he.focus()
}

const handlemove = (e:any,val:string) => {
  e.stopPropagation()
  if (!(val === 'product' || val === '123')) return 
  let he: any = document.getElementById('pro')
  he.focus()
}

const handleLeave = (val: string) => {
  if ((val === 'product')) return 
  let he: any = document.querySelector('.head')
  he.focus()
}

const handleChangeLang = (val: string) => {
  if (val === 'zh') {
    localStorage.setItem('lang', 'zh')
    window.location.reload()
  } else {
    localStorage.setItem('lang', 'en')
    window.location.reload()
  }
}
</script>

<style scoped>
.active::after {
  content: '';
  display: block;
  width: 1.1vw; 
  border-bottom: 0.17vw solid black;
  margin: 0 auto;
  margin-top: 0.4vw;
}
.dow {
  margin-top: 1.46vw;
  background: #fff;
  color: #FFFFFF;
  font-weight: 400;
  li {
    height: 1.1vw;
  }
  li:hover {
    color: #fff;
  }
}
.head:focus-visible {
  outline: transparent;
}
</style>
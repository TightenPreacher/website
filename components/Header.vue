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
                  {{ item.name }}
                  <ul tabindex="0" class="dow dropdown-content rounded-[0.52vw] z-[1] w-[7.81vw] font-normal">
                    <div class="w-full h-full  px-[1.04vw] py-[1.56vw] rounded-[0.52vw] bg-[rgba(0,0,0,0.3)] text-[rgba(255,255,255,0.6)] text-[0.94vw]">
                      <li @click="handleChangeMenu(1)" class="mb-[1.47vw]"><a>技术产品</a></li>
                      <li @click="handleChangeMenu(2)" class="mb-[0.2vw]"><a>行业方案</a></li> 
                    </div>
                  </ul>
                </div>
                {{ item.key === 'product' ? "" : item.name }}
              </div>
              
            </div>
            <div class="flex justify-center">
              <div class=" font-semibold">中文</div>
              ｜
              <div>EN</div>
            </div>
          </div>
    </div>
</template>

<script setup lang="ts">
import { ref} from 'vue';
const props = defineProps({
    type: {
        type: String,
        required: true
    }
})

const tabList = ref([
  {name: '首页', key: 'home'},
  {name: '产品', key: 'product'},
  {name: '新闻', key: 'news'},
  {name: '关于我们', key: 'about'},
  {name: '联系我们', key: 'contact'},
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
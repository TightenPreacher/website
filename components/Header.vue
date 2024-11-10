<template>
    <div class="flex justify-between">
          <img class="h-[4.01vw] w-[10.52vw] mt-[2.86vw]" src="~/assets/img/logo.png" alt="姬器人科技" srcset="">
          <div class="flex h-[1.04vw] mt-[3.85vw] text-[0.94vw]">
            <div class="flex">
              <div v-for="(item) in tabList" :key="item.key" @click="handleChangeTab(item.key)"
                :class="tabName === item.key ? ' h-[1.73vw] text-black font-semibold active':''" class="cursor-pointer mr-[2.65vw] text-[#1F1F1F] font-normal relative"
              >
                {{ item.name }}
              </div>
            </div>
            <div class="">中文 ｜ EN</div>
          </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const emit = defineEmits()

const tabList = ref([
  {name: '首页', key: 'home'},
  {name: '产品', key: 'product'},
  {name: '新闻', key: 'news'},
  {name: '关于我们', key: 'about'},
  {name: '联系我们', key: 'contactUs'},
])
const tabName = ref('home')

const handleChangeTab = (val: string) => {
  tabName.value = val;
  emit('handleChangeTab',val)
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
</style>
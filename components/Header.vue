<template>
    <div class="flex justify-between h-[3.34vw] sticky top-0 stickyNavbar z-50">
          <div>logo</div>
          <div class="flex">
            <div class="flex">
              <div v-for="(item) in tabList" :key="item.key" @click="handleChangeTab(item.key)">{{ item.name }}</div>
            </div>
            <div>中文 ｜ EN</div>
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
.stickyNavbar {
    background: #fff;

    .navbar {
        min-height: 3.34vw!important;
        padding-top: 0!important;
        padding-bottom: 0!important;
        .logo {
            color: #3A3D3C;
        }
        .btn-Md {
            color: #fff;
            height: 1.88vw!important;
            min-height: 1.88vw!important
        }
        .btn-Md:hover {
          --tw-border-opacity: 1;
          border-color: #00AF75;
          --tw-bg-opacity: 1;
          background-color: #00AF75;
      }
    }
}
</style>
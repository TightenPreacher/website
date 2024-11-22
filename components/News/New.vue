<template>
    <div class="bg-cover bg-center" :class="isWeb ? 'h-[100vh]' : 'h-[46.88vw]'" :style="{ backgroundImage: `url(/img/new_bg1.png)` }">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative">
            <div class="h-[3.07vw] text-[2.19vw] leading-[2.55vw] font-semibold text-black mt-[20.31vw]">新闻</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {getClientType} from '@/utils/utils.js'

const isWeb = ref(getClientType() === 'web')
</script>

<style scoped>

</style>
<template>
    <div class="flex justify-center aitem h-[5.84vw]  w-full bg-[#1B222A] items-center text-[1.25vw] leading-[1.88vw] font-medium footer z-50 PingFangMedium">
        <div class="mr-[4.2vw]">联系我们</div>
        <button @click="goTelegram" class="btn text-[1.25vw] px-[1.46vw] flex justify-center items-center font-medium footerBtn rounded-[2.86vw]">
            <img class="h-[1.46vw] w-[1.46vw] mr-[0.4vw]" src="~/assets/img/Telegram.png" alt="" srcset="">
            Telegram
        </button>
    </div>
</template>

<script setup lang="ts">
import { urlConfig } from '~/components/config'
const goTelegram = () => {
    window.open(urlConfig.telegramUrl);
}
</script>

<style scoped>
    .footer {
        color: #fff;
        .footerBtn {
            min-height: 2.86vw!important;
            height: 2.86vw!important;
        }
    }
</style>
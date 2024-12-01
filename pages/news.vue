<template>
    <div class="overflow-hidden overflow-y-auto relative h-[100vh] family" ref="contentRef" @scroll="handleScroll">
        <div id="mains" class="my-0 mx-auto w-full relative">
            <!-- <div id="mains" class="my-0 mx-auto w-[62.5vw]"> -->
            <Header :type="'news'" />
            <MyNews />
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const { $eventBus } = useNuxtApp();

const contentRef = ref(null);

const handleScroll = () => {
    if (contentRef.value) {
        const scrollTop = contentRef.value.scrollTop; // 当前滚动位置
        const scrollHeight = contentRef.value.scrollHeight; // 内容的总高度
        const clientHeight = contentRef.value.clientHeight; // 容器的可见高度

        // 判断是否到达底部
        let val = scrollTop + clientHeight >= (scrollHeight - (window.innerWidth / 100 * 20));
        
        
        // const scrollTop = contentRef.value.scrollTop;
        if (scrollTop > (window.innerHeight)*2 && !val) {
            $eventBus.emit('scroll', true);
        } else {
            $eventBus.emit('scroll', false);
        }
    }
}
</script>

<style scoped>
.family{
    font-family: PingFang SC, PingFang SC;
}
</style>
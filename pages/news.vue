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
        const scrollTop = contentRef.value.scrollTop;
        if (scrollTop > (window.innerHeight)*2) {
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
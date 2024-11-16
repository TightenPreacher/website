<template>
    <div class="carousel-item w-full flex flex-col bg-[#EFEFEF]">
        <New />
        <Content />
    </div>
</template>

<script setup lang="ts">
const New = defineAsyncComponent(() => import('@/components/News/New.vue'))
const Content = defineAsyncComponent(() => import('@/components/News/Content.vue'))

</script>

<style scoped>

</style>
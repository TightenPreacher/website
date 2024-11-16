<template>
    <div class="flex flex-col carousel-item w-full">
        <Empowering />
        <ExMaschine :type="1" />
        <Model />
        <Application />
        <News />
        <Cooperative />
    </div>
</template>

<script setup lang="ts">
const Empowering = defineAsyncComponent(() => import('@/components/Home/Empowering.vue'))
const ExMaschine = defineAsyncComponent(() => import('@/components/Home/ExMaschine.vue'))
const Model = defineAsyncComponent(() => import('@/components/Home/Model.vue'))
const Application = defineAsyncComponent(() => import('@/components/Home/Application.vue'))
const News = defineAsyncComponent(() => import('@/components/Home/News.vue'))
const Cooperative = defineAsyncComponent(() => import('@/components/Home/Cooperative.vue'))

</script>

<style scoped>

</style>
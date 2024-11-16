<template>
    <div class="flex flex-col carousel-item w-full">
        <AboutUs />
        <ExMaschine :type="2" />
        <Team />
    </div>
</template>

<script setup lang="ts">
const AboutUs = defineAsyncComponent(() => import('@/components/About/AboutUs.vue'))
const ExMaschine = defineAsyncComponent(() => import('@/components/Home/ExMaschine.vue'))
const Team = defineAsyncComponent(() => import('@/components/About/Team.vue'))

</script>

<style scoped>

</style>
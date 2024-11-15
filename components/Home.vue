<template>
    <div class="flex flex-col carousel-item w-full">
        <div class="my-0 mx-auto w-[62.5vw] h-full relative">
            <Empowering />
            <ExMaschine />
            <Model />
            <Application />
            <News />
            <Cooperative />
        </div>
    </div>
</template>

<script setup lang="ts">
import Empowering from '@/components/Home/Empowering.vue'
import ExMaschine from '@/components/Home/ExMaschine.vue'
import Model from '@/components/Home/Model.vue'
import Application from '@/components/Home/Application.vue'
import News from '@/components/Home/News.vue'
import Cooperative from '@/components/Home/Cooperative.vue'

</script>

<style scoped>

</style>
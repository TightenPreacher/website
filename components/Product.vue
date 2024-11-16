<template>
    <div class="carousel-item w-full flex flex-col">
        <Mod v-if="menu === 1" />
        <World v-if="menu === 2" />
        <Skill v-if="menu === 2" />
        <Robot v-if="menu === 2" />
        <System v-if="menu === 2" />
    </div>
</template>

<script setup lang="ts">
const Mod = defineAsyncComponent(() => import('@/components/Product/Mod.vue'))
const World = defineAsyncComponent(() => import('@/components/Product/World.vue'))
const Skill = defineAsyncComponent(() => import('@/components/Product/Skill.vue'))
const Robot = defineAsyncComponent(() => import('@/components/Product/Robot.vue'))
const System = defineAsyncComponent(() => import('@/components/Product/System.vue'))

const props = defineProps({
    menu: {
        type: Number,
        required: true
    }
})
</script>

<style scoped>

</style>
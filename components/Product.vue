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
import Mod from '@/components/Product/Mod.vue'
import World from '@/components/Product/World.vue'
import Skill from '@/components/Product/Skill.vue'
import Robot from '@/components/Product/Robot.vue'
import System from '@/components/Product/System.vue'

const props = defineProps({
    menu: {
        type: Number,
        required: true
    }
})
</script>

<style scoped>

</style>
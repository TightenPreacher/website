<template>
    <div class="carousel-item w-full flex flex-col overflow-y-scroll pro" ref="scro">
        <Mod v-if="menu === 1" />
        <World v-if="menu === 2" />
        <Skill v-if="menu === 2" />
        <Robot v-if="menu === 2" />
        <System v-if="menu === 2" />
    </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const Mod = defineAsyncComponent(() => import('@/components/Product/Mod.vue'))
const World = defineAsyncComponent(() => import('@/components/Product/World.vue'))
const Skill = defineAsyncComponent(() => import('@/components/Product/Skill.vue'))
const Robot = defineAsyncComponent(() => import('@/components/Product/Robot.vue'))
const System = defineAsyncComponent(() => import('@/components/Product/System.vue'))

const menu = ref(Number(route.query.type))

watch(() => route.fullPath,
    async(newPath, oldPath) => {
        if (newPath.includes('type=2')){
            menu.value = 2
        }else{
            menu.value = 1
        }
    }
)

</script>

<style scoped>

</style>
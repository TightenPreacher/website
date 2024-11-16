<template>
    <div class="flex flex-col carousel-item w-full">
        <Contact />
        <Form />
        <Address />
    </div>
</template>

<script setup lang="ts">
const Contact = defineAsyncComponent(() => import('@/components/Contact/Contact.vue'))
const Form = defineAsyncComponent(() => import('@/components/Contact/Form.vue'))
const Address = defineAsyncComponent(() => import('@/components/Contact/Address.vue'))

</script>

<style scoped>

</style>
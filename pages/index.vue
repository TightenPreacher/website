<template>
    <div class="overflow-hidden overflow-y-auto relative h-[100vh]">
        <div id="mains" class="my-0 mx-auto w-[62.5vw]">
            <Header @handleChangeTab="handleChangeTab" />
            <Home v-if="tabName === 'home'" />
            <Product v-if="tabName === 'product'" />
            <MyNews v-if="tabName === 'news'" />
            <About v-if="tabName === 'about'" />
            <Contact v-if="tabName === 'contactUs'" />
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const tabName = ref('home');

const handleChangeTab = (val) => {
    console.log('tab名字',val);
    tabName.value = val
}
</script>

<style scoped>

</style>
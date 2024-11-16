<template>
    <div class="overflow-hidden overflow-y-auto relative h-[100vh] family">
        <div id="mains" class="my-0 mx-auto w-full relative">
            <!-- <div id="mains" class="my-0 mx-auto w-[62.5vw]"> -->
            <Header @handleChangeTab="handleChangeTab" @handleChangeMenu="handleChangeMenu" />
            <Home v-if="tabName === 'home'" />
            <Product :menu="menu" v-if="tabName === 'product' && menu !== 0" />
            <MyNews v-if="tabName === 'news'" />
            <About v-if="tabName === 'about'" />
            <ContactUs v-if="tabName === 'contactUs'" />
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabName = ref('home');
const menu = ref(0);

const handleChangeTab = (val) => {
    tabName.value = val
}

const handleChangeMenu = (val) => {
    menu.value = val
}
</script>

<style scoped>
.family{
    font-family: PingFang SC, PingFang SC;
}
</style>
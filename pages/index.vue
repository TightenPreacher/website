<template>
    <div class="overflow-hidden overflow-y-auto relative h-[100vh] family">
        <div id="mains" class="my-0 mx-auto w-full relative">
            <!-- <div id="mains" class="my-0 mx-auto w-[62.5vw]"> -->
            <Header :type="'home'" />
            <Home />
            <Footer />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.family{
    font-family: PingFang SC, PingFang SC;
}
</style>
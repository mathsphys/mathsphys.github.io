<script setup lang="ts">
import HomeContentSubsection from "./subcomponents/HomeContentSubsection.vue"
defineProps<{
    mainHeading: string
}>()
</script>
<template>
    <article>
        <h2>{{mainHeading}}</h2>
        <HomeContentSubsection subsectionHeading="ykul" :buttonNames="['btn1.1','btn1.2', 'btn1.3','btn1.4']"></HomeContentSubsection>
        <HomeContentSubsection subsectionHeading="yky" :buttonNames="['btn2.1','btn2.2', 'btn2.3','btn2.4']"></HomeContentSubsection>
    </article>
</template>
<style scoped>
article {
    display: block;
}
</style>
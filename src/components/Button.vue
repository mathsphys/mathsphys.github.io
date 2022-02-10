<script setup lang="ts">
    defineProps<{ 
        content: string,
        path?: string
        }>()

</script>
<template>
<router-link :to="path">
    <button class="contentButton">{{ content }}</button>
</router-link>
</template>
<style scoped>
.contentButton {
    background: #93A8AC;
    padding: 0.75em;
    margin: 0.8em;
    border: none;
    font-size: 24pt;
    flex: 1 1 auto;
    box-sizing: border-box;
    text-align: center;
}
.contentButton:hover {
    background-color: #424B54;
    color: white;
}
</style>
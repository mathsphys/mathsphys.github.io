<script setup lang="ts">
    defineProps<{ content: string }>()

</script>
<template>
    <button class="contentButton">{{ content }}</button>
</template>
<style scoped>
.contentButton {
    background: #93A8AC;
    padding: 1em;
    margin: 1em;
    border: none;
    font-size: 24pt;
    flex: auto;
    box-sizing: border-box;
}
.contentButton:hover {
    border: solid 3px #000000;
}
</style>
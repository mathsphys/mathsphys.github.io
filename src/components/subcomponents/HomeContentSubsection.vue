<script setup lang="ts">
import Button from "../Button.vue"
defineProps<{
    subsectionHeading: string
    buttonNames: string[]

    //["head1","head1","head1"]
    //[["head1","head1","head1"], ["head1","head1","head1"], ["head1","head1","head1"]]
}>()
</script>
<template>
    <section>
        <h3>{{ subsectionHeading }}</h3>
        <div>
            <Button v-for="button in buttonNames" :key="button" :content="button"></Button>
        </div>

    </section>
</template>
<style scoped>
section {
    display: block;
}
section div {
    display: flex;
    flex: 1 1 auto;
}
</style>
<script setup lang="ts">
import Button from "../Button.vue"
defineProps<{
    subsectionHeading: string
    buttonNames: string[]
    paths: string[]
}>()
</script>
<template>
    <section>
        <h3>{{ subsectionHeading }}</h3>
        <div>
            <Button v-for="buttonName,index in buttonNames"
            :key="buttonName"
            :content="buttonName" 
            :path="paths[index]"></Button>
        </div>
    </section>
</template>
<style scoped>
section {
    display: block;
}
section div {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    flex-wrap: wrap;
}
@media (max-width: 900px) {
  section div{
    flex-direction: column;
  }
}
</style>
<script setup lang="ts">
import Sidebar from "../../../../src/components/Sidebar.vue"
import Header from "../../../components/Header.vue";

let headings : string[] = [
    "Heading 1",
    "Heading 2",
    "Heading 3"
]

let links : string[] = [
    "#heading1",
    "#heading2",
    "#heading3"
]
</script>
<template>
    <Header></Header>
    <Sidebar :headings="headings" :links="links"></Sidebar>
    <main>Proof Sets and Logic</main>
</template>
<style scoped>
main {
   margin-left: 15vw;
   padding: 0 10px; 
}
</style>
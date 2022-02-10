<script setup lang="ts">
    defineProps<{
        headings: string[]
        links: string[]
    }>()
</script>
<template>
<nav>
    <ol>
        <li v-for="(heading, index) in headings" :key="heading">><a :href="links[index]">{{heading}}</a></li>
    </ol>
</nav>
</template>
<style scoped>
nav {
    height: 100%;
    width: 15vw; 
    position: fixed; 
    z-index: 1;
    top: 0; 
    left: 0;
    background-color: #111; 
    overflow-x: hidden;
    padding-top: 20px;
}
nav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
ol {
    list-style-type: square;
}
</style>
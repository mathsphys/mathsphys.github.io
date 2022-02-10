<script setup lang="ts">
import HomeContentSubsection from "./subcomponents/HomeContentSubsection.vue"
defineProps<{
    mainHeading: string
}>()
let buttons : string[][] = [
    ["Mathematical Proof, Sets and Logic", 
    "Algebra and Functions", 
    "Coordinate Geometry", 
    "Sequences and Series", 
    "Differentiation", 
    "Integration", 
    "Numerical Methods", 
    "Vectors"
    ]
];
let paths : string[][] = [
    ["/alevelmaths/proof-sets-logic", 
    "/alevelmaths/algebra-functions", 
    "/alevelmaths/coordinate-geometry", 
    "/alevelmaths/sequences-series",
    "/alevelmaths/differentiation",
    "/alevelmaths/integration",
    "/alevelmaths/numerical-methods",
    "/alevelmaths/vectors"
    ]
];
</script>
<template>
    <article>
        <h2>{{mainHeading}}</h2>
        <HomeContentSubsection 
            subsectionHeading="Pure Mathematics" 
            :buttonNames="buttons[0]"
            :paths="paths[0]"></HomeContentSubsection>
    </article>
</template>
<style scoped>
article {
    display: block;
    padding-left: 3em;
    padding-top: 2em;
}
</style>
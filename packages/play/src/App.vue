<script setup lang="ts">
import { CubePop } from 'pmsui';
// console.log(CubePop,'CubePop');


</script>

<template>
<ErButton type="primary" size="small">222222222</ErButton>
<CubePop :popupOptions="{
        title:'121232',
        show:true }"></CubePop>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

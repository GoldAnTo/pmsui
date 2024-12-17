
<template>
<ErButton @click="btnClick">点击</ErButton>
    <CubePop :popupOptions="popupOptions">
      <template #content>
       <div style="height: 800px;"> 1222</div>
      </template>

      <template #button>
      </template>
    </CubePop>
</template>
<script setup>

import { ref, reactive } from 'vue'
import { CubePop } from "pmsui";

const popupOptions = reactive({
  title:'22222',
  show:false
})
const btnClick = () =>{
  popupOptions.show = true
}
</script>
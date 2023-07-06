<script setup>
import { ref } from 'vue'
import axios from 'axios'
defineProps({
  msg: String,
})

const count = ref(0)
const luckyNum = ref(0)
const location = ref(0)
const updateLuckyNum = () =>{
  let apiLink = window.location.protocol + "//" + window.location.hostname + '/api'
  axios.get(apiLink)
  .then(res =>{
    luckyNum.value = res.data.val
    console.log(res)
  })
  
}
const updateNodejkt = () =>{
  let apiLink = window.location.protocol + "//" + window.location.hostname + '/node/jkt'
  axios.get(apiLink)
  .then(res =>{
    location.value = res.data
    console.log(res)
  })
}
const updateNodesub = () =>{
  let apiLink = window.location.protocol + "//" + window.location.hostname + '/node/sub'
  axios.get(apiLink)
  .then(res =>{
    location.value = res.data
    console.log(res)
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <div class="card">
    <button type="button" @click="updateLuckyNum">your lucky num is {{ luckyNum }}</button>
  </div>
  <h1>Im From {{ location }}</h1>
  <div class="card">
    <button type="button" @click="updateNodejkt">JKT </button>
  </div>
  <div class="card">
    <button type="button" @click="updateNodesub">SUB </button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

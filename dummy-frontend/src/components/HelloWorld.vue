<script setup>
import { ref } from 'vue'
import axios from 'axios'
defineProps({
  msg: String,
})

const count = ref(0)
const luckyNum = ref(0)
const updateLuckyNum = () =>{
  let apiLink = window.location.protocol + "//" + window.location.hostname + '/api'
  axios.get(apiLink)
  .then(res =>{
    luckyNum.value = res.data.val
    console.log(res)
  })
  
}
const updateNode = () =>{
  let apiLink = window.location.protocol + "//" + window.location.hostname + '/node'
  axios.get(apiLink)
  .then(res =>{
    luckyNum.value = res.data
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

  <div class="card">
    <button type="button" @click="updateNode">Msg.payload {{ luckyNum }}</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

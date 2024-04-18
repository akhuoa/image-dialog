<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const data = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{ data }}</p>
</template>

<style scoped>

</style>

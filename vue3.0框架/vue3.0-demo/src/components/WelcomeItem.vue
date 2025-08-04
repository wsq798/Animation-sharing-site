<template>
  <button @click="increment">组合式API:Counts:{{ count }}</button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
onMounted(() => {
  console.log(`组合式API Counts:${count.value}`);
})

</script>
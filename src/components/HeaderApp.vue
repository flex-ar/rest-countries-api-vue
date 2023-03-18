<script setup>
import { ref } from 'vue';

const theme = ref('Dark');
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
  theme.value = theme.value === 'Dark' ? 'Ligth' : 'Dark'
}
</script>

<template>
  <div class="h-20 bg-primary-light dark:bg-primary-dark shadow-md">
    <div class="max-w-7xl m-auto px-4 h-full">
      <div class="h-full flex justify-between items-center">
        <h1 class="text-2xl font-extrabold">Where in the World?</h1>
        <button type="button" class="text-base font-extrabold" @click="toggleTheme">{{theme}} Mode</button>
      </div>
    </div>
  </div>
</template>

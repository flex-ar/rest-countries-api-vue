<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeaderApp from './components/HeaderApp.vue';
</script>

<template>
  <div id="app">
    <div
      class="h-screen overflow-auto bg-secondary-light dark:bg-secondary-dark text-text dark:text-primary-light font-light"
    >
      <HeaderApp />
      <router-view></router-view>
      <!-- <Main /> -->
    </div>
  </div>
</template>

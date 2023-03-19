<script setup>
import { ref, inject } from 'vue';

const active = ref(false);
const { state } = inject('state');

const toggleActive = () => (active.value = !active.value);

const handleFilter = region => {
  state.data = state.data.map(country => ({
    ...country,
    isVisible: country.region === region,
  }));
};

const reset = () => {
  state.data = state.data.map(country => ({ ...country, isVisible: true }));
};
</script>

<template>
  <div class="relative">
    <div
      @click="toggleActive"
      class="flex justify-between items-center bg-primary-light dark:bg-primary-dark shadow-md py-4 px-5 rounded-lg text-base font-semibold w-52 cursor-pointer"
    >
      <div>Filter by Region</div>
      <div>+</div>
    </div>
    <div
      v-show="active"
      class="flex flex-col gap-2 absolute z-10 rounded-lg mt-1 p-5 bg-primary-light dark:bg-primary-dark font-semibold w-full shadow-md"
    >
      <p @click="reset" class="cursor-pointer">All word</p>
      <p @click="_ => handleFilter('Africa')" class="cursor-pointer">Africa</p>
      <p @click="_ => handleFilter('Americas')" class="cursor-pointer">
        America
      </p>
      <p @click="_ => handleFilter('Asia')" class="cursor-pointer">Asia</p>
      <p @click="_ => handleFilter('Europe')" class="cursor-pointer">Europe</p>
      <p @click="_ => handleFilter('Oceania')" class="cursor-pointer">
        Oceania
      </p>
    </div>
  </div>
</template>

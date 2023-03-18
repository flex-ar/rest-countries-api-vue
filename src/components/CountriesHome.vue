<script setup>
import SimpleCountryCard from './SimpleCountryCard.vue';
import { useRouter } from 'vue-router';
import { useCountries } from '../store';
import { ref, computed } from 'vue';

const router = useRouter();
const activeMenu = ref(false);
const buscar = ref('');
const { countries, error, setCountries } = useCountries();
if (!countries.value) setCountries();
const visibleCountries = computed(() => {
  if (!countries.value) return [];
  return countries.value.filter(
    c =>
      c.isVisible &&
      c.name.common.toLowerCase().includes(buscar.value.toLowerCase())
  );
});

const toggleActiveMenu = () => (activeMenu.value = !activeMenu.value);
const handleFilter = region => {
  if (!countries.value) return;
  countries.value = countries.value.map(c => ({
    ...c,
    isVisible: c.region === region,
  }));
};
const resetCountries = () =>
  (countries.value = countries.value.map(c => ({ ...c, isVisible: true })));
const select = name =>
  router.push({ name: 'detail', params: { country: name } });
</script>

<template>
  <div class="max-w-7xl m-auto my-10 px-4">
    <div
      class="flex justify-between gap-y-9 sm:items-center sm:flex-row items-start flex-col"
    >
      <!-- TODO: Searh Country -->
      <div
        class="flex bg-primary-light dark:bg-primary-dark shadow-md sm:w-2/5 w-full py-4 px-7 rounded-lg text-base font-semibold"
      >
        <div class="mr-4">🔎</div>
        <input
          v-model="buscar"
          class="focus:outline-none bg-inherit w-full"
          type="text"
          placeholder="Search for a country..."
        />
      </div>

      <!-- TODO: Filter by Region -->
      <div class="relative">
        <div
          @click="toggleActiveMenu"
          class="flex justify-between items-center bg-primary-light dark:bg-primary-dark shadow-md py-4 px-5 rounded-lg text-base font-semibold w-52 cursor-pointer"
        >
          <div>Filter by Region</div>
          <div>+</div>
        </div>
        <div
          v-show="activeMenu"
          class="flex flex-col gap-2 absolute z-10 rounded-lg mt-1 p-5 bg-primary-light dark:bg-primary-dark font-semibold w-full"
        >
          <p @click="resetCountries" class="cursor-pointer">All word</p>
          <p @click="_ => handleFilter('Africa')" class="cursor-pointer">
            Africa
          </p>
          <p @click="_ => handleFilter('Americas')" class="cursor-pointer">
            America
          </p>
          <p @click="_ => handleFilter('Asia')" class="cursor-pointer">Asia</p>
          <p @click="_ => handleFilter('Europe')" class="cursor-pointer">
            Europe
          </p>
          <p @click="_ => handleFilter('Oceania')" class="cursor-pointer">
            Oceania
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- TODO: Spiner -->

  <div v-if="error">Oops! Error encountered</div>
  <div v-else-if="countries" class="max-w-7xl m-auto py-10 px-4">
    <ul class="grid gap-16 justify-center">
      <!-- TODO: Cards Countries -->
      <li
        v-for="(
          { name, population, region, capital, flags }, index
        ) in visibleCountries"
        @click="_ => select(name.common)"
        :key="index"
        class="rounded-lg bg-primary-light dark:bg-primary-dark overflow-hidden cursor-pointer shadow-lg transition-[transform,box-shadow] hover:scale-105 hover:shadow-2xl"
      >
        <SimpleCountryCard
          :name="name.common"
          :population="population"
          :region="region"
          :capital="capital"
          :flag="flags.png"
        />
      </li>
    </ul>
  </div>
</template>

<style>
.grid {
  grid-template-columns: repeat(auto-fit, minmax(264px, 264px));
}
</style>

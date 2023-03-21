<script setup>
import SimpleCountryCard from '../components/SimpleCountryCard.vue';
import CountriesFilter from '../components/CountriesFilter.vue';
import CountrySearch from '../components/CountrySearch.vue';
import { inject, ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useObserver } from '../hooks/useObserver';

const { state, fetchCountries } = inject('state');
const searchQuery = ref('');
const router = useRouter();
const { loaded, resetLoaded, itemsRef } = useObserver(state.data, 4 * 3);

const filterCountries = query => {
  return state.data?.filter(
    ({ isVisible, name }) =>
      isVisible && name.common.toLowerCase().includes(query)
  );
};

const visibleCountries = computed(() => {
  if (!state.data) return [];
  const query = searchQuery.value.toLowerCase();
  return filterCountries(query);
});

watch(visibleCountries, resetLoaded);

const lazyCountries = computed(() =>
  visibleCountries.value?.slice(0, loaded.value)
);

const select = name =>
  router.push({ name: 'detail', params: { country: name } });

onMounted(() => {
  if (state.data === null) fetchCountries();
});
</script>

<template>
  <div class="max-w-7xl m-auto mt-10 mb-2 px-4">
    <div
      class="flex justify-between gap-y-9 sm:items-center sm:flex-row items-start flex-col"
    >
      <CountrySearch v-model="searchQuery" />
      <CountriesFilter />
    </div>
  </div>

  <div v-if="state.loading">
    <div
      class="w-20 h-20 m-auto my-40 border-t-4 border-primary-dark dark:border-primary-light rounded-full animate-spin"
    />
  </div>
  <div v-else-if="state.error">{{ state.error }}</div>
  <div v-else class="max-w-7xl m-auto py-10 px-4">
    <ul class="grid gap-16 justify-center">
      <li
        ref="itemsRef"
        v-for="(country, index) in lazyCountries"
        @click="_ => select(country.name.common)"
        :key="index"
        class="rounded-lg bg-primary-light dark:bg-primary-dark overflow-hidden cursor-pointer shadow-lg transition-[transform,box-shadow] hover:scale-105 hover:shadow-2xl"
      >
        <SimpleCountryCard :country="country" />
      </li>
    </ul>
  </div>
</template>

<style>
.grid {
  grid-template-columns: repeat(auto-fit, minmax(264px, 264px));
}
</style>

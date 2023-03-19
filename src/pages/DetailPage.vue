<script setup>
import CompleteCountryCard from '../components/CompleteCountryCard.vue';

import { reactive, inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { normalizer } from '../helpers/normalizer';

const localState = reactive({
  country: null,
  loading: true,
  error: null,
});
const { state } = inject('state');
const { params } = useRoute();
const router = useRouter();

const fetchCountry = async () => {
  localState.loading = true;
  try {
    const result = state.data?.find(
      country => country.name.common === params.country
    );

    if (result) localState.country = result;
    else {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${params.country}`
      );
      const data = await response.json();
      localState.country = data.map(normalizer)[0];
    }
  } catch (error) {
    localState.error = 'Country not find';
  }
  localState.loading = false;
};

const handleClick = () => router.push({ name: 'home', path: '/' });

onMounted(() => {
  fetchCountry();
});
</script>

<template>
  <div class="max-w-7xl m-auto px-6">
    <button
      @click="handleClick"
      class="my-16 py-2 px-9 font-semibold shadow-lg rounded-sm dark:bg-primary-dark bg-primary-light"
    >
      Back
    </button>

    <div v-if="localState.loading">
      <div
        class="w-20 h-20 m-auto my-40 border-t-4 border-primary-dark dark:border-primary-light rounded-full animate-spin"
      />
    </div>
    <div v-else-if="localState.error">{{ localState.error }}</div>
    <div v-else>
      <CompleteCountryCard :country="localState.country" />
    </div>
  </div>
</template>

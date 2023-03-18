<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCountries, getAndNormalizeCountriesData } from '../store';
import { pipe, ifElse, isNeitherNullNorUndefined, find } from '../helpers/fp';

const route = useRoute();
const router = useRouter();
const { countries } = useCountries();
const country = ref(null);
const error = ref(null);

// findCountry :: countries -> Promise<country>
const findCountry = pipe(
  find(country => country.name.common === route.params.country),
  ifElse(
    isNeitherNullNorUndefined,
    x => Promise.resolve([x]),
    () => Promise.reject('Country not find')
  )
);

// getCountry :: countries -> Promise<country>
const getCountry = ifElse(isNeitherNullNorUndefined, findCountry, () =>
  getAndNormalizeCountriesData(route.params.country)
);

getCountry(countries.value)
  .then(arr => (country.value = arr[0]))
  .catch(err => (error.value = err));

const arrow = '<-';
const handleClick = () => router.push({ name: 'home', path: '/' });
</script>

<template>
  <div class="max-w-7xl m-auto px-4">
    <button
      @click="handleClick"
      class="flex gap-3 my-24 py-2 px-9 shadow-lg rounded-md dark:bg-primary-dark bg-primary-light"
    >
      <div>{{ arrow }}</div>
      Back
    </button>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="country" class="flex justify-between gap-28">
      <img :src="country.flags.png" alt="flag" class="w-[560px] h-[350px]" />
      <div class="flex flex-col justify-start gap-10">
        <h2 class="text-3xl font-extrabold">{{ country.name.common }}</h2>
        <div class="flex justify-between gap-20 text-lg">
          <div class="flex flex-col gap-2">
            <p>
              <b class="font-extrabold">Native Name:</b>
              {{ country.name.native }}
            </p>
            <p>
              <b class="font-extrabold">Population:</b>
              {{ country.population }}
            </p>
            <p>
              <b class="font-extrabold">Region:</b>
              {{ country.region }}
            </p>
            <p>
              <b class="font-extrabold">Sub Region:</b>
              {{ country.subRegion }}
            </p>
            <p>
              <b class="font-extrabold">Capital:</b>
              {{ country.capital }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p>
              <b class="font-extrabold">Top Level Domain:</b>
              {{ country.topLevelDomain }}
            </p>
            <p>
              <b class="font-extrabold">Currencies:</b>
              {{ country.currencies }}
            </p>
            <p>
              <b class="font-extrabold">Languages:</b>
              {{ country.languages }}
            </p>
          </div>
        </div>
        <div>
          <b class="text-lg font-extrabold">Border Countries:</b>
          {{ country.borderCountries }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { countryCodesList } from '../helpers/countryCodesList';

const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
});
const borderCountries = props.country.borderCountries.map(
  code => countryCodesList[code]
);

const router = useRouter();
const select = name => {
  router.push({ name: 'home', path: '/' }).then(() => {
    router.push({ name: 'detail', params: { country: name } });
  });
};
</script>

<template>
  <div
    class="flex flex-col xl:flex-row items-center xl:items-start pb-10 gap-16 lg:gap-28"
  >
    <img
      :src="country.flags.png"
      alt="flag"
      class="w-[264px] h-[160px] sm:w-[560px] sm:h-[350px] shadow-md"
    />
    <div class="flex flex-col justify-start gap-10">
      <h2 class="text-3xl font-extrabold">
        {{ country.name.common }}
      </h2>
      <div class="flex flex-col sm:flex-row gap-10 sm:gap-20 text-lg">
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
        <ul class="flex flex-wrap gap-4">
          <li>
            <b class="text-lg font-extrabold">Border Countries:</b>
          </li>
          <li
            v-for="name in borderCountries"
            @click="_ => select(name)"
            :key="name"
          >
            <div
              class="text-center min-w-[7rem] px-2 py-1 rounded-sm shadow-lg cursor-pointer bg-primary-light dark:bg-primary-dark"
            >
              <span>
                {{ name }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

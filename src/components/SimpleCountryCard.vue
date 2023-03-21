<script setup>
defineProps({
  country: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <img :src="country.flags.png" class="w-[264px] h-[160px]" />
  <div class="py-7 px-6">
    <b class="text-lg font-extrabold mb-5">{{ country.name.common }}</b>
    <div class="mt-3 text-sm">
      <p class="mb-1">
        <b class="font-extrabold">Population: </b>
        {{ country.population }}
      </p>
      <p class="mb-1">
        <b class="font-extrabold">Region: </b>
        {{ country.region }}
      </p>
      <p class="mb-1">
        <b class="font-extrabold">Capital: </b>
        {{ country.capital }}
      </p>
    </div>
  </div>
</template>

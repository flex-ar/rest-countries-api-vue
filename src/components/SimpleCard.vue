<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: false,
  },
  flag: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <img :src="flag" class="w-[264px] h-[160px]"/>
  <div class="py-7 px-6">
    <b class="text-lg font-extrabold mb-5">{{name}}</b>
    <div class="mt-3 text-sm">
      <p class="mb-1">
        <b class="font-extrabold">Population: </b>
        {{population}}
      </p>
      <p class="mb-1">
        <b class="font-extrabold">Region: </b>
        {{region}}
      </p>
      <p class="mb-1">
        <b class="font-extrabold">Capital: </b>
        {{capital}}
      </p>
    </div>
  </div>
</template>

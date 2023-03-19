<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div
    class="flex bg-primary-light dark:bg-primary-dark shadow-md sm:w-2/5 w-full py-4 px-7 rounded-lg text-base font-semibold"
  >
    <div class="mr-4">🔎</div>
    <input
      @keyup="emit('update:modelValue', $event.target.value)"
      v-text="modelValue"
      type="text"
      class="focus:outline-none bg-inherit w-full"
      placeholder="Search for a country..."
    />
  </div>
</template>

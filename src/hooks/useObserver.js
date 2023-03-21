import { ref, computed, watch } from 'vue';

export const useObserver = (collection, stepLoad) => {
  const loaded = ref(stepLoad);
  const resetLoaded = () => (loaded.value = stepLoad);

  const itemsRef = ref([]);
  const lastItemRef = computed(() => itemsRef.value[loaded.value - 1]);

  const onIntersect = (entries, observer) => {
    const { isIntersecting } = entries[0];
    if (isIntersecting) {
      if (loaded.value >= collection?.length) return observer.disconnect();
      observer.disconnect();
      loaded.value += stepLoad;
    }
  };
  const observer = new IntersectionObserver(onIntersect);

  watch(lastItemRef, value => {
    if (value === undefined) return;
    observer.observe(value);
  });

  return { loaded, resetLoaded, itemsRef };
};

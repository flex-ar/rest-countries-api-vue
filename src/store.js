import { reactive } from 'vue';
import { normalizer } from './helpers/normalizer';

const URL_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all';

const state = reactive({
  data: null,
  loading: false,
  error: null,
});

const fetchCountries = async () => {
  state.loading = true;
  try {
    const response = await fetch(URL_ALL_COUNTRIES);
    const date = await response.json();
    state.data = date.map(normalizer);
  } catch (error) {
    state.error = error;
  }
  state.loading = false;
};

export default {
  state,
  fetchCountries,
};

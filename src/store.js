import { ref, readonly } from 'vue';
import { pipe, isString, ifElse, then, map, promiseCatch } from './helpers/fp';
import { normalizer } from './service/normalizer'

const URL_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all';

// generateUrlWithCountryName :: string -> string
const generateUrlWithCountryName = name => `https://restcountries.com/v3.1/name/${name}`

// getCountryData :: string -> Promise<Response>
const getCountryData = pipe(generateUrlWithCountryName, fetch)

// getCountriesData :: () -> Promise<Response>
const getCountriesData = () => fetch(URL_ALL_COUNTRIES)

// getCountriesOrCountry :: any -> Promise<Response>
const getCountriesOrCountry = ifElse(isString, getCountryData, getCountriesData);

// getAndNormalizeCountriesData :: string? -> Promise<Response>
export const getAndNormalizeCountriesData = pipe(
  getCountriesOrCountry,
  then(response => response.json()),
  then(map(normalizer))
);

const countries = ref(null);
const error = ref(null);

export const useCountries = () => {
  // setCountries :: string? -> countries | error
  const setCountries = pipe(
    getAndNormalizeCountriesData,
    then(json => countries.value = json),
    promiseCatch(err => error.value = err)
  )

  return {
    // countries: readonly(countries),
    // error: readonly(error),
    countries,
    error,
    setCountries
  }
}

import { getProp, map, Maybe, pipe, trace } from '../helpers/fp';

const saveObj = obj => obj ?? {};
const defaultString = value => value || 'none';
const objectToArray = obj => Object.entries(obj);
const getLastElementArray = arr => arr[arr.length -1] ?? {};
const getPropInsideArray = prop => pipe(getLastElementArray, getProp(prop));
const getPropAndConvertToString = func => pipe(saveObj, objectToArray, map(func), x => x.join(', '), defaultString);

const getCapital = pipe(Maybe.of, map(x => x[0]), x => x.get());

export const normalizer = x => ({
  name: {
    common: x.name.common,
    native: getPropAndConvertToString(getPropInsideArray('common'))(x.name.nativeName),
  },
  topLevelDomain: x.tld ? x.tld.join(' ') : '',
  currencies: getPropAndConvertToString(getPropInsideArray('name'))(x.currencies),
  population: x.population,
  region: x.region,
  subRegion: defaultString(x.subregion),
  borderCountries: defaultString(x.borders),
  languages: getPropAndConvertToString(getLastElementArray)(x.languages),
  capital: defaultString(getCapital(x.capital)),
  flags: x.flags,
  isVisible: true,
})
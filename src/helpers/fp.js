export const pipe =
  (...fs) =>
  x =>
    fs.reduce((a, f) => f(a), x);
export const identity = x => x;
export const trace = x => {
  console.log(x);
  return x;
};

export const isString = x => typeof x === 'string';
export const isNeitherNullNorUndefined = x => x !== null && x !== undefined;
export const ifElse = (predicate, isTrue, isFalse) => x =>
  predicate(x) ? isTrue(x) : isFalse(x);

export const getProp = prop => obj => obj[prop];

export const map = f => xs => xs.map(f);
export const find = predicate => xs => xs.find(predicate);
export const filter = f => xs => xs.filter(f);
export const toString = xs => xs.toString();

export const then = f => p => p.then(f);
export const promiseCatch = f => p => p.catch(f);

export class Maybe {
  static of = value => new Maybe(value);

  constructor(value) {
    this.value = value;
  }

  isValid = () => this.value !== null && this.value !== undefined;
  map = f => (this.isValid() ? Maybe.of(f(this.value)) : Maybe.of(null));
  get = () => this.value;
}

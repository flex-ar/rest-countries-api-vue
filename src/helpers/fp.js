export const pipe =
  (...fs) =>
  x =>
    fs.reduce((a, f) => f(a), x);

export const getProp = prop => obj => obj[prop];

export const map = f => xs => xs.map(f);

export class Maybe {
  static of = value => new Maybe(value);

  constructor(value) {
    this.value = value;
  }

  isValid = () => this.value !== null && this.value !== undefined;
  map = f => (this.isValid() ? Maybe.of(f(this.value)) : Maybe.of(null));
  get = () => this.value;
}

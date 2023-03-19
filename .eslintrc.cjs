module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'avoid',
      },
    ],
  },
};

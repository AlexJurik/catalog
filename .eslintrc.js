module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    "$": true,
    "jQuery": true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "max-len": [2, 100, 4, {"ignoreUrls": true}],
  }
}

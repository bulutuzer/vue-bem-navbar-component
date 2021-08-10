module.exports = {
  root: true,

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  plugins: ['vue'],

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
}

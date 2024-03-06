module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
    },
    plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort', 'prettier'],
    extends: ['airbnb/base', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  
  };
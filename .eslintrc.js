module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'prettier'
  ],
  // extends: [
  //   'plugin:@next/next/recommended',
  //   'next',
  //   'standard'
  //   // 'prettier'
  // ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 'off',
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off',
    indent: 'off',
    'no-vars-require': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off'
  },
  globals: {
    React: true
  }
}

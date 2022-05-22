module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['prettier'],
  rules: {
    'newline-before-return': 'error',
    'prettier/prettier': 'error',
  },

  // my old rules ("esLint hands")
  // rules: {
  //   semi: [2, 'always'],
  //   quotes: [2, 'single'],
  //   'object-property-newline': 2,
  //   'comma-dangle': [2, {
  //     arrays: 'never',
  //     objects: 'always',
  //     imports: 'never',
  //     exports: 'never',
  //     functions: 'never',
  //   }],
  //   indent: [2, 2],
  //   'eol-last': [2, 'always'],
  //   'newline-before-return': 2,
  //   'quote-props': [2, 'as-needed'],
  //   'object-curly-spacing': [2, 'always'],
  //   'keyword-spacing': [2, { before: true, }],
  //   'key-spacing': [2, { beforeColon: false, }],
  //   'no-trailing-spaces': 2,
  //   'no-multiple-empty-lines': [2, { max: 1, }] ,
  //   'no-multi-spaces': 2,
  //   'array-element-newline': [2, 'consistent'],
  //   'array-bracket-spacing': ['error', 'never'],
  // },
};

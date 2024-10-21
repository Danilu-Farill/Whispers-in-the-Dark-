export default {
  languageOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
 },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // Reglas generales
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'error',
    'no-explicit-any': 'error',

    // Reglas de React
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 'error',
    'react/prop-types': 'warn',

    // Reglas de TypeScript
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/member-delimiter-style': 'warn',

    // Reglas de React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  extends: [
    ...
     'prettier'
 ]
};





// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import eslintConfigPrettier from 'eslint-config-prettier';
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

// export default tseslint.config(
//   {
//     files: ['**/*.ts'],
//     extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
//     rules: {
//       'no-console': 'warn',
//       '@typescript-eslint/no-unused-vars': 'error',
//     },
//   },
//   {
//     files: ['**/*.js', '**/*.mjs', '**/*.ts'],
//     extends: [eslintPluginPrettierRecommended],
//     rules: {
//       ...eslintConfigPrettier.rules,
//     },
//   },
// );
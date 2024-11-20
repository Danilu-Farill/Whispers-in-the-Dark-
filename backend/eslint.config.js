// eslint.config.js
import eslint from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // Configuración global
  {
    files: ['**/*.{js,ts}'],
    ignores: ['dist/**', 'node_modules/**'],
  },
  
  // Configuración específica para TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-trailing-spaces': 'error',
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
];
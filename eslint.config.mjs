// @ts-check

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
// @ts-expect-error -- package does not ship TypeScript declarations
import expoConfig from 'eslint-config-expo/flat.js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  globalIgnores(['dist/*']),
  ...fixupConfigRules(expoConfig),
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'max-depth': ['error', 4],
    },
    settings: { react: { version: 'detect' } },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      // @ts-expect-error -- v7 types incompatible with flat config Plugin type
      '@typescript-eslint': fixupPluginRules(tsPlugin),
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
    },
  },
]);

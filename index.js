import { fixupPluginRules } from '@eslint/compat';
import { default as eslint, default as js } from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import filenameRules from 'eslint-plugin-filename-rules';
import i18nJsonPlugin from 'eslint-plugin-i18n-json';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import pluginReact from 'eslint-plugin-react';
import pluginReactCompiler from 'eslint-plugin-react-compiler';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import reactRefresh from 'eslint-plugin-react-refresh';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    'node_modules',
    '__mocks__',
    'metro.config.js',
    '.eslintrc.js',
    'src/components/icons/components/',
  ]),
  eslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: pluginReact,
      'react-native': fixupPluginRules(reactNative),
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
    },
    extends: [
      pluginReactHooks.configs.flat['recommended-latest'],
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      pluginReactCompiler.configs.recommended,
    ],
    rules: {
      'react/destructuring-assignment': [
        'error',
        'always',
        { destructureInSignature: 'always' },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: ['arrow-function'],
        },
      ],
      'react/hook-use-state': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-curly-newline': 'error',
      'react/jsx-curly-spacing': ['error', 'never'],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-key': [
        'error',
        { checkFragmentShorthand: true, warnOnDuplicates: true },
      ],
      'react/jsx-newline': 'error',
      'react/jsx-no-bind': [
        'warn',
        {
          ignoreDOMComponents: false,
          ignoreRefs: false,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
        },
      ],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-props-no-spreading': 'error',
      'react/jsx-props-no-spread-multi': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          multiline: 'ignore',
          noSortAlphabetically: true,
          reservedFirst: true,
        },
      ],
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'error',
      'react/no-arrow-function-lifecycle': 'error',
      'react/no-danger': 'error',
      'react/no-deprecated': 'error',
      'react/no-did-mount-set-state': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-multi-comp': 'warn',
      'react/no-redundant-should-component-update': 'error',
      'react/no-unsafe': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-unused-class-component-methods': 'error',
      'react/no-unused-state': 'error',
      'react/no-will-update-set-state': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
      'react/state-in-constructor': ['error', 'never'],

      'react-native/no-color-literals': 'warn',
      'react-native/no-unused-styles': 'error',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-raw-text': [
        'error',
        { skip: ['Button.Text', 'Button.WithIcon'] },
      ],
      'react-native/no-single-element-style-arrays': 'error',

      'react-refresh/only-export-components': 'warn',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'are', 'should', 'has', 'can', 'did', 'will', 'does'],
        },
        {
          selector: 'variable',
          modifiers: ['destructured'],
          format: null,
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',

      'import/no-deprecated': 'warn',
      'import/dynamic-import-chunkname': 'off',
      'import/extensions': 'off',
      'import/newline-after-import': 'error',
      'import/no-cycle': ['error', { ignoreExternal: true }],
      'import/no-default-export': 'off',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-nodejs-modules': 'error',
      'import/no-self-import': 'error',
      'import/no-unresolved': [
        'error',
        {
          ignore: ['$'],
        },
      ],
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '$*/**',
              group: 'parent',
              position: 'before',
            },
          ],
          groups: [['builtin', 'external'], 'parent', ['sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      unicorn: eslintPluginUnicorn,
      'filename-rules': fixupPluginRules(filenameRules),
      '@stylistic': stylistic,
    },
    rules: {
      'consistent-return': 'error',
      'default-case': 'error',
      eqeqeq: ['error', 'always'],
      'no-await-in-loop': 'error',
      'no-promise-executor-return': 'error',
      'max-depth': ['error', 4],
      'max-nested-callbacks': ['error', 4],
      'max-params': ['error', 3],
      'no-console': 'warn',
      'no-else-return': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-undef': 'off',
      'no-useless-return': 'error',
      'object-curly-spacing': ['error', 'always'],
      'prefer-promise-reject-errors': 'error',
      'require-atomic-updates': 'error',

      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-empty-array-spread': 'error',
      'unicorn/error-message': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/no-negated-condition': 'warn',
      'unicorn/no-nested-ternary': 'error',
      'unicorn/no-negation-in-equality-check': 'error',
      'unicorn/prefer-default-parameters': 'error',

      // 'filename-rules/match': [
      //   'error',
      //   {
      //     'index.ts': 'camelCase',
      //     '.js': 'camelCase',
      //     '.ts': 'camelCase',
      //     '.tsx': 'PascalCase',
      //   },
      // ],

      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: [
            'return',
            'directive',
            'export',
            'expression',
            'for',
            'function',
            'if',
            'try',
            'switch',
            'iife',
            'do',
            'throw',
            'while',
            'with',
            'block-like',
            'block',
          ],
        },
        {
          blankLine: 'always',
          prev: ['multiline-block-like', 'block-like', 'multiline-expression'],
          next: [
            'return',
            'directive',
            'export',
            'expression',
            'for',
            'function',
            'if',
            'try',
            'switch',
            'iife',
            'do',
            'throw',
            'while',
            'with',
            'const',
            'let',
            'var',
            'block',
          ],
        },
        {
          blankLine: 'always',
          prev: ['*'],
          next: [
            'return',
            'directive',
            'for',
            'function',
            'if',
            'try',
            'switch',
            'iife',
            'do',
            'throw',
            'while',
            'with',
            'block',
          ],
        },
      ],
    },
  },
  {
    files: ['**/__tests__/**/*'],
    extends: [
      jestPlugin.configs['flat/recommended'],
      jestPlugin.configs['flat/style'],
      testingLibraryPlugin.configs['flat/react'],
    ],
    plugins: {
      react: pluginReact,
      jest: jestPlugin,
      'testing-library': testingLibraryPlugin,
    },
    rules: {
      'max-nested-callbacks': ['error', 8],

      'react/jsx-props-no-spreading': 'off',
    },
  },
  {
    files: ['**/*.json'],
    plugins: { 'i18n-json': i18nJsonPlugin },
    processor: {
      meta: { name: '.json' },
      ...i18nJsonPlugin.processors['.json'],
    },
    rules: {
      ...i18nJsonPlugin.configs.recommended.rules,
      'i18n-json/valid-message-syntax': [
        2,
        {
          syntax: 'non-empty-string',
        },
      ],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/ignore': ['react-native'],
    },
  },
  eslintConfigPrettier,
]);

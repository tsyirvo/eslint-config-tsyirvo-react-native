module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'react',
    'react-native',
    'import',
  ],
  rules: {
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/newline-after-import': 'error',
    'import/no-cycle': ['error', { ignoreExternal: true }],
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
    'import/prefer-default-export': 'error',

    'react/destructuring-assignment': [
      'error',
      'always',
      { destructureInSignature: 'always' },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': [
      'error',
      { when: 'never', attributes: { allowMultiline: false }, children: true },
    ],
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
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: true,
      },
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'warn',
    'react/no-redundant-should-component-update': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': ['error', 'never'],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-inline-styles': 'error',

    '@typescript-eslint/array-type': ['warn', { default: 'array' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description' },
    ],
    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor',
    ],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
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
        prefix: ['is', 'are', 'should', 'has', 'can', 'did', 'will'],
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
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'warn',
      {
        allowComparingNullableBooleansToTrue: false,
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: false,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
      },
    ],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/padding-line-between-statements': [
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
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
  },
  globals: {
    fetch: true,
  },
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '$',
        rootPathSuffix: 'src',
      },
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    '__mocks__',
    'metro.config.js',
    '.eslintrc.js',
    '/e2e/environment.js',
  ],
};

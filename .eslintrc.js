module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './packages/create-your-app/tsconfig.json']
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn'
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json']
      }
    }
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    'lib',
    '.eslintrc.js',
    'commitlint.config.js',
    'lint-staged.config.js',
    'scripts/**/*.js',
    'packages/*/jest.config.js',
    'packages/*/jest.config.cjs',
    '**/*.cjs',
    'packages/**/src/**/__tests__/**/*',
    'packages/template',
    'packages/template/**/*',
    'packages/template/.eslintrc.js',
    'packages/react-cra-ts-h5-template/**/*',
    'packages/react-webpack-template/**/*',
    'packages/react-vite-admin-template/**/*',
    'packages/lib-monorepo-template/**/*',
    'packages/lib-template/**/*',
    'packages/react-vite-h5-template/**/*'
  ],
  overrides: []
};

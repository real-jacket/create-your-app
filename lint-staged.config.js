module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --ignore-pattern "packages/template/**/*"',
    'prettier --write'
  ],
  '*.{json,md,yml,yaml}': ['prettier --write']
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'on',
    '@typescript-eslint/explicit-function-return-type': 'on',
    '@typescript-eslint/explicit-module-boundary-types': 'on',
    '@typescript-eslint/no-explicit-any': 'on',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all', // Áp dụng cho tất cả các biến
        args: 'after-used', // Kiểm tra các tham số hàm sau khi sử dụng
        ignoreRestSiblings: false, // Kiểm tra các phần tử bị bỏ qua trong destructuring
      },
    ],
  },
};

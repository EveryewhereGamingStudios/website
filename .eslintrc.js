module.exports = {
  root: true,
  parser: `@babel/eslint-parser`,
  extends: [`airbnb`, `eslint:recommended`, `plugin:react/recommended`, `plugin:prettier/recommended`, `prettier`],
  plugins: ['react'],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 2018,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  ignorePatterns: ['node_modules/'],
  globals: {},
  rules: {
    quotes: `off`,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [`.js`],
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'prettier/prettier': [
      `error`,
      {
        trailingComma: `es5`,
        semi: true,
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

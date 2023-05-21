module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    semi: ["warn", "always"],
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};

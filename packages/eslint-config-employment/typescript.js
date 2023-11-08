module.exports = {
  extends: ["./index.js", "airbnb-typescript/base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: ["./tsconfig.json"],
    requireConfigFile: false,
    sourceType: "module",
  },
};

module.exports = [
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        XMLHttpRequest: "readonly",
        Date: "readonly",
        JSON: "readonly",
        parseInt: "readonly"
      }
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "off",
      "no-extra-semi": "error"
    }
  }
];

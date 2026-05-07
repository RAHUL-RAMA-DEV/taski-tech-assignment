const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,   // FIX: require, module, console
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly"
      }
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
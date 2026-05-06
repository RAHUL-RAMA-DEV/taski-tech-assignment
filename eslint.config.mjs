import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        test: "readonly"
      }
    },

    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
]);
 

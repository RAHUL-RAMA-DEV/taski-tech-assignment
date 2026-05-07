import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS recommended rules
  js.configs.recommended,

  // Node.js + Jest environment (your app)
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
]);
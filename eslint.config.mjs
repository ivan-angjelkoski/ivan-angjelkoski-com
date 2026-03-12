// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import tseslint from "typescript-eslint";

export default withNuxt(
  tseslint.config({
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  }),
  {
    rules: {
      "vue/disallow-self-closing": "off",
    },
  },
);

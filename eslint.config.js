// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    ignores: [
      ".angular/**",
      "dist/**",
      "node_modules/**",
      "storybook-static/**",
      ".storybook/**",
    ],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.spec.json"],
        ecmaVersion: "latest",
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@typescript-eslint/prefer-enum-initializers": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment":
        "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-loop-func": "off",
      "@typescript-eslint/no-loop-func": "error",
      "max-params": "off",
      "@typescript-eslint/max-params": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      // can be used in the future: "@typescript-eslint/no-restricted-types": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-duplicate-type-constituents": "error",
      "no-array-constructor": "off",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/prefer-readonly": "error",
      // we must turn off the base rule when using the TS one
      //probably not needed if no-non-null-assertion is enabled
      //might cause significant problems
      "@angular-eslint/no-output-native": "error",
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: ["signature", "field", "constructor", "method"],
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "no-console": [
        "error",
        { allow: ["warn", "error", "groupCollapsed", "groupEnd"] },
      ],
      "@angular-eslint/prefer-signals": "error",
      "@angular-eslint/prefer-standalone": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/eqeqeq": ["error"],
      "@angular-eslint/template/no-any": ["error"],
      "@angular-eslint/template/prefer-at-else": ["error"],
      "@angular-eslint/template/no-empty-control-flow": ["error"],
      "@angular-eslint/template/prefer-control-flow": ["error"],
      "@angular-eslint/template/use-track-by-function": ["error"],
      "@angular-eslint/template/prefer-template-literal": ["error"],
      // '@angular-eslint/conditional-complexity': ['warn', { maxComplexity: 5 }],
      // '@angular-eslint/cyclomatic-complexity': ['warn', { maxComplexity: 10 }],
      "@angular-eslint/template/alt-text": ["error"],
      "@angular-eslint/template/button-has-type": ["error"],
      "@angular-eslint/template/click-events-have-key-events": ["error"],
      "@angular-eslint/template/elements-content": ["error"],
      "@angular-eslint/template/no-inline-styles": ["error"],
      "@angular-eslint/template/no-interpolation-in-attributes": ["error"],
      "@angular-eslint/template/no-positive-tabindex": ["error"],
      "@angular-eslint/template/role-has-required-aria": ["error"],
      "@angular-eslint/template/table-scope": ["error"],
      "@angular-eslint/template/valid-aria": ["error"],
      "@angular-eslint/template/attributes-order": ["error"],
      "@angular-eslint/template/prefer-self-closing-tags": ["error"],
      "@angular-eslint/template/prefer-static-string-properties": ["error"],
    },
  },
);

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
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/return-await": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      // we must turn off the base rule when using the TS one
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-unnecessary-type-conversion": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      //probably not needed if no-non-null-assertion is enabled
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
      //might cause significant problems
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-misused-spread": "error",
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
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
      "@angular-eslint/template/no-distracting-elements": ["error"],
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
      "@angular-eslint/template/interactive-supports-focus": ["error"],
      "@angular-eslint/template/label-has-associated-control": ["error"],
      "@angular-eslint/template/mouse-events-have-key-events": ["error"],
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

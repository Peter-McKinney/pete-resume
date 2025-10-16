// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = [
  {
    ignores: [".angular/**"],
  },
  ...tseslint.config(
    {
      files: ["**/*.ts"],
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        ...angular.configs.tsRecommended,
      ],
      processor: angular.processInlineTemplates,
      rules: {
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
  ),
];

module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:qwik/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "prettier", "formatjs", "check-file"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "prefer-spread": "off",
    "no-case-declarations": "off",
    "no-console": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        ignoredMethodNames: ["constructor"],
        overrides: {
          methods: "explicit",
          properties: "explicit",
          constructors: "explicit",
        },
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/comma-spacing": ["warn"],
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "formatjs/no-offset": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "components/*/*",
          "pages/*/*",
          "constants/*/*",
          "features/*/*",
          "hooks/*/*",
          "queries/*/*",
          "schemas/*/*",
          "types/*/*",
          "util/*/*",
          "@constants/*/*",
          "@features/*/*",
          "@hooks/*/*",
          "@queries/*/*",
          "@schemas/*/*",
          "@types/*/*",
          "@util/*/*",
        ],
      },
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "src/(?!pages)**/*.{jsx,tsx}": "CAMEL_CASE",
        "src/(?!pages)**/*.(?!d).{js,ts}": "CAMEL_CASE",
      },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/components/**/": "CAMEL_CASE",
        "src/(?!(pages|components))**/": "CAMEL_CASE",
      },
    ],
    // See https://github.com/formatjs/formatjs/issues/785
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
};

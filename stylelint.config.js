/** @type {import('stylelint').Config} */
module.exports = {
  plugins: ["@stylistic/stylelint-plugin"],
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "@stylistic/indentation": 2,
    "color-function-notation": null,
    "alpha-value-notation": null,
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["composes", "compose-with"],
      },
    ],
  },
  ignoreFiles: [
    "**/node_modules/**",
    "**/dist/**",
    "**/coverage/**",
    "**/.nx/cache/**",
    "**/.nx/workspace-data/**",
  ],
};

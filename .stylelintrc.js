module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
  overrides: [
    {
      files: ['**/*.css'],
      rules: {
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
          },
        ],
      },
    },
    {
      files: ['**/*.scss'],
      rules: {
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
          },
        ],
      },
    },
  ],
};

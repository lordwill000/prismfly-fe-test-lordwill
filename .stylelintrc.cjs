module.exports = {
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
          true,
          {
            'ignoreAtRules': ['tailwind', 'screen', 'include']
          }
        ],
      },
    }
  ],

  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"]
}
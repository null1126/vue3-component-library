module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-less', 'stylelint-order'],
  rules: {
    'declaration-block-single-line-max-declarations': null,
    'property-no-vendor-prefix': null,
    'selector-pseudo-element-colon-notation': null,
    'declaration-block-no-redundant-longhand-properties': null
  },
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: ['dist/**/*', 'node_modules/**/*']
}

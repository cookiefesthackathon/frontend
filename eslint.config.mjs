import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['@app/components/graphics/*'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    '@stylistic/no-trailing-spaces': 'off',
    '@stylistic/function-call-spacing': ['warn', 'never'],
    '@stylistic/implicit-arrow-linebreak': ['warn', 'beside'],
    'vue/html-button-has-type': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': ['warn', { singleline: { max: 5 } }],
  },
})

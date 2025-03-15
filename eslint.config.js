import process from 'node:process'
import antfu from '@antfu/eslint-config'
import prettier from 'eslint-plugin-prettier'

export default antfu(
  {
    vue: true,
    typescript: true,
    ignores: ['dist', 'node_modules', '*.md', '*.json', '*.yaml', '*.yml']
  },
  {
    plugins: {
      prettier
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'ts/no-empty-object-type': 'off',
      'style/comma-dangle': ['error', 'always-multiline']
    }
  }
)

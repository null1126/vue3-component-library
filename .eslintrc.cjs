module.exports = {
  // 使用 Antfu 的 Vue + TypeScript 配置（Vue 核心团队成员维护）
  extends: ['@antfu', 'plugin:prettier/recommended'], // 新增 Prettier 集成
  rules: {
    // 自定义覆盖规则（根据项目需求调整）
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'warn' // 显示 Prettier 规则冲突为警告ß
  },
  // 针对不同文件类型设置解析器
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser'
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser'
    }
  ]
}

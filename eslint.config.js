// https://eslint.org/docs/latest/use/configure/configuration-files
import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default antfu({
  ignores: ['.husky/', '.vscode/', '.yarn/', 'coverage/', 'dist/', 'public/assets/', 'tsconfig.*.json', 'components.d.ts'],
}, oxlint.configs['flat/recommended'])

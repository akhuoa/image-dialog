import pluginVue from 'eslint-plugin-vue'
export default [
  // base, plus rules to prevent errors or unintended behavior.
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      // to add rules
    }
  }
]

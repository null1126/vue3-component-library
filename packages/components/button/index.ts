import type { App, Plugin } from 'vue'
import Button from './src/button.vue'

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('XButton', Button)
  }
}

export default ButtonPlugin
export * from './src/types'

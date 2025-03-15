import type { App, Plugin } from 'vue'
import Radio from './src/radio.vue'

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('XRadio', Radio)
  }
}

export default RadioPlugin
export * from './src/types'

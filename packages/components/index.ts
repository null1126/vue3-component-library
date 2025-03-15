import type { App } from 'vue'
import * as components from './components'

export type { ButtonProps } from './button'
export * from './components'
export type { RadioProps } from './radio'

function install(app: App) {
  for (const key in components) {
    // @ts-expect-error: dynamic access
    app.use(components[key])
  }
}

export default { install }

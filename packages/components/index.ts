import type { App } from 'vue'
import * as components from './components'

export type { ButtonProps } from './button'
export * from './components'

function install(app: App) {
  for (const key in components) {
    // @ts-expect-error: dynamic access
    app.use(components[key])
  }
}

export default { install }

export type { RadioProps } from './radio'
export * from './types/components'

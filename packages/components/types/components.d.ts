import type { ButtonProps } from '../button'
import type { RadioProps } from '../radio'

declare module 'vue' {
  export interface GlobalComponents {
    XButton: import('vue').DefineComponent<ButtonProps>
    XRadio: import('vue').DefineComponent<RadioProps>
  }
}

export {}

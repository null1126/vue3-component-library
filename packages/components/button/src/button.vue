<script lang="ts" setup>
import type { ButtonProps } from './types'
import { computed } from 'vue'
import './style/index.less'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
  round: false,
  plain: false
})

const classes = computed(() => [
  'x-button',
  `x-button--${props.type}`,
  `x-button--${props.size}`,
  {
    'is-disabled': props.disabled,
    'is-loading': props.loading,
    'is-round': props.round,
    'is-plain': props.plain
  }
])
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <span v-if="loading" class="x-button__loading">
      <i class="x-icon-loading" />
    </span>
    <span v-if="$slots.icon" class="x-button__icon">
      <slot name="icon" />
    </span>
    <span class="x-button__content">
      <slot />
    </span>
  </button>
</template>

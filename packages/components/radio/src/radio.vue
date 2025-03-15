<script lang="ts" setup>
import type { RadioProps } from './types'
import { computed } from 'vue'
import './style/index.less'

const props = withDefaults(defineProps<RadioProps>(), {
  modelValue: '',
  label: '',
  disabled: false,
  border: false,
  size: 'medium'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
}>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

const classes = computed(() => [
  'x-radio',
  {
    'is-checked': model.value === props.label,
    'is-disabled': props.disabled,
    'is-bordered': props.border,
    [`x-radio--${props.size}`]: props.size
  }
])
</script>

<template>
  <label :class="classes">
    <span class="x-radio__input">
      <span class="x-radio__inner" />
      <input
        v-model="model"
        :value="label"
        type="radio"
        class="x-radio__original"
        :name="name"
        :disabled="disabled"
      />
    </span>
    <span v-if="$slots.default" class="x-radio__label">
      <slot />
    </span>
    <span v-else class="x-radio__label">{{ label }}</span>
  </label>
</template>

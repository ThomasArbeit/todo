<template>
  <div :class="['input', `input--${props.variant}`]">
    <label v-if="props.label">{{ props.label }}</label>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      v-model="props.modelValue"
      @input="setup.onInput"
      @keyup.enter="$emit('enter')"
    />
  </div>
</template>

<script setup lang="ts">
import { useInput, type InputEmit, type InputProps } from './Input.script';

  const props = defineProps<InputProps>();
  const emit = defineEmits<InputEmit>();
  const setup = useInput(props, emit);
</script>
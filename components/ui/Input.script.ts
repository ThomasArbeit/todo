import type { InputTypeHTMLAttribute } from "vue";

export type InputProps = {
  modelValue?: string,
  label?: string,
  placeholder?: string,
  type: InputTypeHTMLAttribute,
  variant?: string,
}

export type InputEmit = {
  (e: 'update:modelValue', value: string): void,
  (e: 'enter'): void,
}

export function useInput (
  props: InputProps,
  emit: InputEmit,
) {
  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value)
  }

  return {
    onInput
  }
}
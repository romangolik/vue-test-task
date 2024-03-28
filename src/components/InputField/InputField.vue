<template>
  <div class="input-field" :class="classes">
    <label v-if="label" class="input-field__label" :for="name">{{
      label
    }}</label>
    <div class="input-field__input-wrapper">
      <input
        ref="input"
        :value="modelValue"
        class="input-field__input"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :disabled="isDisabled"
        autocomplete="false"
        @input="handleInput"
      />
    </div>
    <span v-if="helperText" class="input-field__helper-text">{{
      helperText
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { InputType } from "./types/input-type.type";

interface IInputProps {
  modelValue?: string | number;
  label?: string;
  name?: string;
  isDisabled?: boolean;
  placeholder?: string;
  inputType?: InputType;
  error?: boolean;
  helperText?: string;
}

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const props = withDefaults(defineProps<IInputProps>(), {
  modelValue: "",
  inputType: "text",
  placeholder: "",
});

const classes = computed(() => ({
  "input-field_disabled": props.isDisabled,
  "input-field_error": props.error,
}));

function getInputValue(event: Event) {
  const target = event.target as HTMLInputElement;
  return target.value.trim();
}

function handleInput(event: Event) {
  const value = getInputValue(event);

  emit("update:modelValue", value);
}
</script>

<style scoped lang="sass">
@import "InputField.scss"
</style>

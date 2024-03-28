<template>
  <InputField
    :model-value="value"
    :label="label"
    :name="name"
    :placeholder="placeholder"
    :is-disabled="isDisabled"
    :input-type="inputType"
    :error="error"
    :helper-text="errorMessage"
    @update:model-value="handleChange"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useField } from "vee-validate";

import InputField, { InputType } from "@/components/InputField";

interface IFormField {
  label?: string;
  name: string;
  isDisabled?: boolean;
  placeholder?: string;
  inputType?: InputType;
}

const props = defineProps<IFormField>();

const {
  value,
  errorMessage: fieldErrorMessage,
  handleChange,
  meta,
} = useField<string>(() => props.name);

const error = computed(() => {
  if (meta.touched) return !!fieldErrorMessage.value;
  return false;
});

const errorMessage = computed(() => {
  if (meta.touched) return fieldErrorMessage.value;
  return "";
});
</script>

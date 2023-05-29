<template>
  <form @submit.prevent="saveForm" class="flex flex-col">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { FormContext } from 'vee-validate'

interface FormInputProps {
  context: FormContext
}
const {
  context: { handleSubmit }
} = defineProps<FormInputProps>()

interface FormInputEmits {
  (e: 'save', formData: any): void
}
const emit = defineEmits<FormInputEmits>()

const saveForm = handleSubmit((formData) => {
  emit('save', formData)
})
</script>

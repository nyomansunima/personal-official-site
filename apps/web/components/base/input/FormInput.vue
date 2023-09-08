<template>
  <form class="flex flex-col" @submit.prevent="saveForm">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { FormContext } from 'vee-validate'

interface FormInputProps {
  context: FormContext
}
const {
  context: { handleSubmit },
} = defineProps<FormInputProps>()

interface FormInputEmits {
  (e: 'save', formData: any): void
}
const emit = defineEmits<FormInputEmits>()

const saveForm = handleSubmit((formData) => {
  emit('save', formData)
})
</script>

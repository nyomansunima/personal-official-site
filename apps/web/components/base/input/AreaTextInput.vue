<template>
  <div class="flex flex-col w-full">
    <label :for="`${name}-input`" v-show="label" class="flex">{{
      label
    }}</label>
    <div
      class="flex w-full py-5 items-center bg-white dark:bg-black min-h-[200px] rounded-3xl ring-1 ring-gray-100 dark:ring-gray-800 focus-within:ring-2 focus-within:ring-black focus-within:dark:ring-gray-700 transition-all duration-300 px-5"
    >
      <i :class="preIcon" v-show="preIcon"></i>
      <textarea
        v-model="value"
        :name="name"
        :id="`${name}-input`"
        :placeholder="placeholder"
        class="flex h-full flex-1 bg-transparent border-transparent outline-transparent ring-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent text-base text-black dark:text-gray-400 placeholder:text-gray-600"
      ></textarea>
      <i :class="sufIcon" class="dark:text-gray-600" v-show="sufIcon"></i>
    </div>

    <span v-show="errorMessage" class="flex ml-3 mt-5">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { BaseInputProps } from '~/types/component'

interface TextAreaInputProps extends BaseInputProps {}
const props = defineProps<TextAreaInputProps>()
const { errorMessage, value, setValue } = useField(() => props.name)
if (props.value) {
  setValue(props.value)
}
</script>

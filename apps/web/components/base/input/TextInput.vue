<template>
  <div class="flex flex-col w-full">
    <label v-show="label" :for="`${name}-input`" class="flex">{{
      label
    }}</label>
    <div
      class="flex w-full items-center bg-white dark:bg-black h-[52px] rounded-2xl ring-1 ring-neutral-100 dark:ring-neutral-800 focus-within:ring-2 focus-within:ring-black focus-within:dark:ring-neutral-700 transition-all duration-300 px-5"
    >
      <i v-show="preIcon" :class="preIcon"></i>
      <input
        :id="`${name}-input`"
        v-model="value"
        :name="name"
        type="text"
        :placeholder="placeholder"
        class="flex h-full flex-1 bg-transparent border-transparent outline-transparent ring-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent text-base text-black dark:text-neutral-300 placeholder:text-neutral-400"
      />
      <i v-show="sufIcon" :class="sufIcon" class="dark:text-neutral-600"></i>
    </div>

    <span
      v-show="errorMessage"
      class="flex ml-3 mt-5 text-neutral-500 dark:text-neutral-600"
      >{{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { BaseInputProps } from '~/types/component'

interface TextInputProps extends BaseInputProps {}
const props = defineProps<TextInputProps>()
const { errorMessage, value, setValue } = useField(() => props.name)
if (props.value) {
  setValue(props.value)
}
</script>

<template>
  <div class="flex flex-col w-full">
    <label :for="`${name}-input`" v-show="label" class="flex">{{
      label
    }}</label>
    <div
      class="flex w-full items-center bg-white h-16 rounded-full ring-1 ring-gray-100 focus-within:ring-2 focus-within:ring-black transition-all duration-300 px-5"
    >
      <i :class="preIcon" v-show="preIcon"></i>
      <input
        v-model="value"
        :name="name"
        :id="`${name}-input`"
        type="text"
        :placeholder="placeholder"
        class="flex h-full flex-1 bg-transparent border-transparent outline-transparent ring-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent text-base text-black placeholder:text-gray-600"
      />
      <i :class="sufIcon" v-show="sufIcon"></i>
    </div>

    <span v-show="errorMessage" class="flex">{{ errorMessage }}</span>
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

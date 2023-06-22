<template>
  <li class="flex flex-col p-5 rounded-2xl border border-gray-100">
    <div class="flex cursor-pointer items-center" @click="toggle">
      <h4 class="text-xl flex-1" data-cursor-size="40" data-cursor-exclusion>
        {{ data.question }}
      </h4>
      <i :class="isExpand ? 'fi fi-sr-angle-up' : 'fi fi-sr-angle-down'"></i>
    </div>
    <p class="text-lg leading-relaxed mt-5 text-gray-600" v-show="isExpand">
      {{ data.answer }}
    </p>
  </li>
</template>

<script setup lang="ts">
import { Faq } from '~/types/content'

const isExpand = ref<boolean>(false)

const toggle = () => {
  isExpand.value = !isExpand.value
}

interface FaqItemProps {
  data: Faq
}
defineProps<FaqItemProps>()
</script>

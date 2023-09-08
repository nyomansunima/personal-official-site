<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'radix-vue'
import { Faq } from '~/types/content'

export interface FaqListProps {
  data: Faq[]
}

defineProps<FaqListProps>()
</script>

<template>
  <AccordionRoot
    class="laptop:w-8/12 flex flex-col gap-4"
    default-value="'item-1'"
    type="single"
    :collapsible="true"
  >
    <template v-for="item in data" :key="item.value">
      <AccordionItem
        class="flex flex-col border border-neutral-100 dark:border-neutral-900 py-3 px-5 rounded-lg"
        :value="item.question"
      >
        <AccordionHeader class="flex w-full">
          <AccordionTrigger
            class="group flex items-center justify-between w-full"
          >
            <span class="laptop:text-xl text-lg font-medium">{{
              item.question
            }}</span>
            <i
              class="fi fi-rr-angle-up text-base text-neutral-400 dark:text-neutral-600 transition-all duration-700 group-data-[state=open]:rotate-180"
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="">
          <p
            class="py-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            {{ item.answer }}
          </p>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

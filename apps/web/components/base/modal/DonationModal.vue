<template>
  <Teleport to="body">
    <div
      v-show="isShow"
      class="flex flex-col fixed top-24 right-16 px-1 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black z-30 w-[280px]"
      ref="modalRef"
    >
      <h3
        class="flex border-b border-b-gray-100 dark:border-b-gray-800 pb-2 font-semibold px-4"
      >
        Donate for open source
      </h3>

      <ul class="flex flex-col w-full gap-1 pt-3">
        <li
          class="flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-500 hover:bg-gray-100 dark:hover:bg-gray-900"
          v-for="{ label, link, icon } in donations"
          :key="link"
        >
          <NuxtLink
            class="flex gap-3 w-full"
            :to="link"
            :external="link.includes('http')"
            :target="link.includes('http') ? '_blank' : '_self'"
          >
            <i :class="icon"></i>

            {{ label }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { donations } from '~/assets/data/menu.json'
import { onClickOutside } from '@vueuse/core'

const modalRef = ref<HTMLDivElement>()
onClickOutside(modalRef, () => emit('close'))

interface DonationModalProps {
  isShow?: boolean
}
defineProps<DonationModalProps>()

interface MainMenuModalEmits {
  (e: 'close'): void
}
const emit = defineEmits<MainMenuModalEmits>()
</script>

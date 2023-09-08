<template>
  <Teleport to="body">
    <div
      v-show="isShow"
      ref="modalRef"
      class="flex flex-col bg-white dark:bg-black fixed z-50 inset-y-0 right-0 h-full w-[400px] py-14 px-10 shadow-2xl border-l border-l-gray-100 dark:border-l-gray-800"
    >
      <h4 class="text-2xl w-8/12 !leading-tight">
        Buy in your favorite place.
      </h4>

      <ul class="flex flex-col mt-10 gap-4">
        <li v-for="(item, i) in list" :key="i" class="flex context-item">
          <Button>{{ item.title }}</Button>
        </li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { gsap } from 'gsap'
const modalRef = ref<HTMLDivElement>()

interface ShopBuyContextModalProps {
  isShow: boolean
  list: { title: string; url: string }[]
}
const props = defineProps<ShopBuyContextModalProps>()

interface ShopBuyContextModalEmits {
  (e: 'close'): void
}
const emit = defineEmits<ShopBuyContextModalEmits>()

// define the click outside handler
onClickOutside(modalRef, () => {
  emit('close')
})

onMounted(() => {
  watch(props, () => {
    if (props.isShow) {
      gsap.from('h4', {
        y: 100,
        opacity: 0,
        ease: 'back',
      })
      gsap.from('li.context-item', {
        x: 100,
        delay: 1,
        opacity: 0,
        stagger: 0.2,
        ease: 'back',
      })
    }
  })
})
</script>

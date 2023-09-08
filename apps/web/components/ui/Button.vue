<script lang="ts" setup>
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'nuxt/dist/app/compat/capi'

const buttonVariants = cva(
  'flex justify-center items-center text-base font-medium gap-3',
  {
    variants: {
      variant: {
        primary: 'bg-accent dark:text-black',
        outline: 'border border-neutral-100 dark:border-neutral-800',
        secondary: 'bg-neutral-100 dark:bg-neutral-900',
      },
      size: {
        base: 'px-7 h-12 rounded-full',
        sm: 'text',
        md: '',
        lg: 'px-8 h-16 text-lg rounded-full',
        xl: '',
        icon: 'h-12 w-12 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'base',
    },
  },
)

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  size?: VariantProps<typeof buttonVariants>['size']
  variant?: VariantProps<typeof buttonVariants>['variant']
  asChild?: boolean
  as?: string
}
const { size, variant } = defineProps<ButtonProps>()

const buttonClass = computed(() =>
  mergeClass(buttonVariants({ size, variant })),
)
</script>

<template>
  <slot v-if="asChild" />
  <component :is="as ?? 'button'" v-else :class="buttonClass">
    <slot />
  </component>
</template>

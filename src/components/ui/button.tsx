import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { mergeClass } from '~/utils/helpers'

const buttonVariants = cva('flex justify-center items-center relative gap-3', {
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground',
      outline: 'border border-border bg-background',
      secondary: 'bg-secondary text-secondary-foreground',
    },
    size: {
      base: 'h-12 px-6 py-2 rounded-xl text-base',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      md: 'h-16 px-10 rounded-full text-lg',
      icon: 'h-11 w-11 rounded-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={mergeClass(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { mergeClass } from '~/utils/helpers'

const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap text-base font-medium leading-none transition-all duration-700',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        outline:
          'border border-border bg-background text-foreground hover:bg-border',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-background hover:border-border border border-transparent',
      },
      size: {
        base: 'h-10 px-5 rounded-full text-sm',
        sm: 'h-9 px-3 rounded-full',
        lg: 'h-14 px-5 rounded-full',
        icon: 'h-10 w-10 rounded-full text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  },
)

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

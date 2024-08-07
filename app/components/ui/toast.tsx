'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, useSonner, toast } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-ambient group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-none group-[.toaster]:rounded-2xl',
          description: 'group-[.toast]:text-foreground/70',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-secondary group-[.toast]:text-secondary-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster, useSonner, toast }

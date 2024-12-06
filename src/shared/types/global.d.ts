import { MotionProps as OriginalMotionProps } from 'motion/react'

declare module 'motion/react' {
  export interface MotionProps extends OriginalMotionProps {
    className?: string
    onClick?: () => void
  }
}

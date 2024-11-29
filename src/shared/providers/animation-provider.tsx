'use client'

import * as React from 'react'
import { ReactLenis } from 'lenis/react'

interface AnimationProviderProps {
  children: React.ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  return (
    <ReactLenis root options={{ duration: 0.9 }}>
      {children}
    </ReactLenis>
  )
}

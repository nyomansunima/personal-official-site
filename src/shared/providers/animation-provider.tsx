'use client'

import * as React from 'react'
import { ReactLenis } from 'lenis/react'
import { LenisOptions } from 'lenis'

interface AnimationProviderProps {
  children: React.ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const options: LenisOptions = {
    autoRaf: true,
    lerp: 0.05,
  }

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  )
}

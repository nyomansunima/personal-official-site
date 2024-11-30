'use client'

import * as React from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({
  children,
}: PageTransitionProps): React.ReactElement {
  return (
    <div className="animate-in duration-700 slide-in-from-bottom-36 fade-in-0">
      {children}
    </div>
  )
}

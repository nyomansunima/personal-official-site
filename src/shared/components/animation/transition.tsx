'use client'

import * as React from 'react'
import { motion } from 'motion/react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({
  children,
}: PageTransitionProps): React.ReactElement {
  return (
    <motion.div
      initial={{ y: 144, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: '1.2', delay: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

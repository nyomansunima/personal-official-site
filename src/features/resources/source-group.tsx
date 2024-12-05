'use client'

import * as React from 'react'
import { SourceData, SourceItem } from './source-item'
import { motion } from 'motion/react'

export interface SourceGroupData {
  title: string
  list: SourceData[]
}

interface SourceGroupProps {
  group: SourceGroupData
}

export function SourceGroup({ group }: SourceGroupProps): React.ReactElement {
  const { title, list } = group

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', duration: '1.2', delay: 0.1 }}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-4"
    >
      <h3 className="text-lg font-medium">{title}</h3>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2 tablet:gap-3 w-full">
        {list.map((sou, index) => (
          <SourceItem source={sou} key={index} />
        ))}
      </div>
    </motion.div>
  )
}

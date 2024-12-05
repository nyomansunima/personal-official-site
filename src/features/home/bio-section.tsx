'use client'

import * as React from 'react'
import { BioItem, BioItemData } from './bio-item'
import bioData from './bio-data.json'
import { motion } from 'motion/react'

const bios = bioData.links as BioItemData[]

export function BioSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', duration: '1.2', delay: 0.1 }}
      viewport={{
        once: true,
      }}
      className="flex flex-col"
    >
      <div className="flex w-full">
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-2 w-full">
          {bios.map((data, index) => (
            <BioItem data={data} key={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

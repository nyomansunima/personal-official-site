import * as React from 'react'
import { BioItem } from './bio-item'
import * as homeService from './home-service'

const bios = await homeService.getBioLinks()

export function BioSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex w-full">
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-2 w-full">
          {bios.map((data, index) => (
            <BioItem data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

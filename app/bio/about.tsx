import Image from 'next/image'
import * as React from 'react'

function Avatar(): React.ReactElement {
  return (
    <div className="flex justify-center items-center bg-ambient border border-border rounded-full h-16 w-16 text-xl transition-all duration-300 hover:scale-95 cursor-pointer">
      <Image
        src={'/images/profile.png'}
        width={52}
        height={52}
        alt="Nyoman Sunima"
        className="rounded-full overflow-hidden"
      />
    </div>
  )
}

export function AboutSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center pt-20 pb-16 laptop:pt-36 laptop:pb-20">
      <Avatar />
      <span className="font-medium mt-4">Nyoman Sunima</span>
      <p className="text-foreground/60 mt-2 tablet:w-6/12 laptop:w-4/12 text-center">
        Welcome, to the shortcut. I'am a product designer, fullstak developer
        and solopreneur that loves to craft digital solutions.
      </p>
    </section>
  )
}

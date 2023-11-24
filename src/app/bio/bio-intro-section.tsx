import Image from 'next/image'

export default function BioIntroSection() {
  return (
    <section className="flex flex-col items-center">
      <picture>
        <Image
          src={'/images/profile.png'}
          height={120}
          width={120}
          quality={100}
          alt="Nyoman Sunima Photo"
          className="rounded-full overflow-hidden"
        />
      </picture>

      <h3 className="text-center mt-10 text-2xl">Nyoman Sunima</h3>
      <p className="text-center mt-3 text-lg">
        5+ years as a product designer and full stack developer. Been focusing
        on crafting apps through research, design, and development. My day to
        day revolves around designing and developing digital products.
      </p>
    </section>
  )
}

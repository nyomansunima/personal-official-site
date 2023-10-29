import Image from 'next/image'

export default function AboutIntroSection() {
  return (
    <section className="flex flex-col items-center container mx-auto gap-20 px-5 laptop:px-20 -mt-32 relative">
      <div className="flex relative laptop:w-5/12 mx-auto justify-center items-end overflow-hidden rounded-3xl mt-20 laptop:mt-0 laptop:rounded-full h-80 laptop:min-h-[700px] border border-neutral-200 dark:border-neutral-800">
        <div className="flex absolute w-full h-full"></div>
        <Image
          src={'/images/photo.png'}
          alt="Nyoman Sunima Profile"
          className="relative flex object-cover"
          height={400}
          width={400}
        />
      </div>
    </section>
  )
}

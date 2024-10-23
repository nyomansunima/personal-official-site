import * as React from 'react'
import Image from 'next/image'

export function SharingSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:pb-56">
      <h2 className="text-2xl laptop:text-3xl !leading-tight font-medium">
        Reading, writing, and sharing
      </h2>

      <div className="flex flex-col gap-y-10 mt-10">
        <p className="!leading-relaxed">
          I'm passionate about sharing my knowledge and experiences with others.
          Whether it's through blog posts, podcasts, or social media, I believe
          that sharing is a powerful tool for personal growth and professional
          development. By sharing my insights and expertise, I can inspire and
          empower others to achieve their goals.
        </p>

        <div className="flex rounded-2xl p-1 border border-border bg-ambient cursor-pointer">
          <picture className="relative w-full h-[200px] laptop:h-[360px] overflow-hidden rounded-xl">
            <Image
              src={
                'https://cdn.hashnode.com/res/hashnode/image/upload/v1729709291876/a59a6504-a98b-4818-955f-efba3364d5b6.jpeg'
              }
              alt="Books"
              fill
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </picture>
        </div>

        <p className="!leading-relaxed">
          I'm dedicated to continuous learning and staying up-to-date with the
          latest trends and technologies. I believe that knowledge is power, and
          by sharing it, I can help others unlock their full potential.
        </p>
        <p className="!leading-relaxed">
          I'm committed to being a positive influence and a role model for
          others. By sharing my journey and experiences, I can inspire and
          motivate others to pursue their dreams and make a difference in the
          world.
        </p>
      </div>
    </section>
  )
}

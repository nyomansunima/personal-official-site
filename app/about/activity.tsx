import * as React from 'react'
import Image from 'next/image'

export function ActivitySection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20">
      <h2 className="text-2xl laptop:text-3xl !leading-tight font-medium">
        I did research, planning, design, develop
        <br className="hidden laptop:block" />& ship the product
      </h2>

      <div className="flex flex-col gap-y-10 mt-10">
        <p className="!leading-relaxed">
          My daily activities revolve around the exciting process of
          transforming concepts into fully-fledged applications. From the very
          inception of an idea, I dive into thorough research. Understanding the
          problem and the target audience is crucial for crafting a solution
          that truly resonates. Armed with insights, I move on to meticulous
          planning, mapping out the journey from concept to launch. This stage
          lays the foundation for a successful product development process.
        </p>

        <div className="flex rounded-2xl p-1 border border-border bg-ambient cursor-pointer">
          <picture className="relative w-full h-[200px] laptop:h-[360px] overflow-hidden rounded-xl">
            <Image
              src={
                'https://cdn.hashnode.com/res/hashnode/image/upload/v1729709277676/dd474a4c-a2fd-4b98-bcf2-3002c6c4aab5.jpeg'
              }
              alt="Research"
              fill
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </picture>
        </div>

        <div className="flex rounded-2xl p-1 border border-border bg-ambient cursor-pointer">
          <picture className="relative w-full h-[200px] laptop:h-[360px] overflow-hidden rounded-xl">
            <Image
              src={
                'https://cdn.hashnode.com/res/hashnode/image/upload/v1729709284152/96cae4e7-4066-4ee4-b569-ccda13574a0f.jpeg'
              }
              alt="Develop"
              fill
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </picture>
        </div>

        <p className="!leading-relaxed">
          I believe in the power of shipping products that make a real impact.
          With careful testing, bug fixes, and optimizations, I ensure that the
          application is polished and ready for launch. The satisfaction of
          seeing the finished product out in the world, making a difference in
          people's lives, is truly gratifying. As an indie maker, I embrace the
          entrepreneurial spirit, taking on the entire process from ideation to
          deployment. I relish the freedom to explore my creativity and the
          ability to execute projects with autonomy. It allows me to deliver
          unique and personalized solutions that truly reflect my vision as a
          designer and developer.
        </p>
        <p className="!leading-relaxed">
          Design is where the magic happens. With a keen eye for aesthetics and
          an understanding of user experience, I create captivating interfaces
          that strike a perfect balance between beauty and functionality. Every
          pixel is carefully considered to ensure a seamless and engaging user
          experience. Once the design is complete, I roll up my sleeves and
          delve into coding. As an experienced developer, I have a deep
          understanding of various programming languages and technologies. I
          take pride in my ability to build applications from scratch, crafting
          clean and efficient code that forms the backbone of the final product.
        </p>
      </div>
    </section>
  )
}

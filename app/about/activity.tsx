import * as React from 'react'

export function ActivitySection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:py-36">
      <h2 className="text-3xl laptop:text-4xl !leading-tight font-medium">
        I did research, planning, design, develop
        <br className="hidden laptop:block" />& ship the product
      </h2>

      <div className="flex flex-col laptop:flex-row gap-y-10 gap-x-14 mt-10">
        <div className="flex flex-col gap-10">
          <p className="text-foreground/80 !leading-relaxed">
            My daily activities revolve around the exciting process of
            transforming concepts into fully-fledged applications. From the very
            inception of an idea, I dive into thorough research. Understanding
            the problem and the target audience is crucial for crafting a
            solution that truly resonates. Armed with insights, I move on to
            meticulous planning, mapping out the journey from concept to launch.
            This stage lays the foundation for a successful product development
            process.
          </p>
          <p className="text-foreground/80 !leading-relaxed">
            I believe in the power of shipping products that make a real impact.
            With careful testing, bug fixes, and optimizations, I ensure that
            the application is polished and ready for launch. The satisfaction
            of seeing the finished product out in the world, making a difference
            in people's lives, is truly gratifying. As an indie maker, I embrace
            the entrepreneurial spirit, taking on the entire process from
            ideation to deployment. I relish the freedom to explore my
            creativity and the ability to execute projects with autonomy. It
            allows me to deliver unique and personalized solutions that truly
            reflect my vision as a designer and developer.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <p className="text-foreground/80 !leading-relaxed">
            Design is where the magic happens. With a keen eye for aesthetics
            and an understanding of user experience, I create captivating
            interfaces that strike a perfect balance between beauty and
            functionality. Every pixel is carefully considered to ensure a
            seamless and engaging user experience. Once the design is complete,
            I roll up my sleeves and delve into coding. As an experienced
            developer, I have a deep understanding of various programming
            languages and technologies. I take pride in my ability to build
            applications from scratch, crafting clean and efficient code that
            forms the backbone of the final product.
          </p>
        </div>
      </div>
    </section>
  )
}

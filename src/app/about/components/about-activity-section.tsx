export default function AboutActivitySection() {
  return (
    <section className="flex flex-col container mx-auto laptop:px-20 px-5 items-center">
      <h2
        className="text-5xl laptop:text-8xl !leading-tight"
        data-animation="text-char-opacity"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span className="laptop:pl-20"></span>I did research, planning, design,
        development & ship the product.
      </h2>

      <div className="grid grid-cols-1 laptop:grid-cols-2 text-xl leading-relaxed gap-10 mt-20 laptop:mt-36">
        <div>
          <p>
            My daily activities revolve around the exciting process of
            transforming concepts into fully-fledged applications. From the very
            inception of an idea, I dive into thorough research. Understanding
            the problem and the target audience is crucial for crafting a
            solution that truly resonates. Armed with insights, I move on to
            meticulous planning, mapping out the journey from concept to launch.
            This stage lays the foundation for a successful product development
            process.
          </p>
        </div>
        <div>
          <p>
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
        <div>
          <p>
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
      </div>
    </section>
  )
}

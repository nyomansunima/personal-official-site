export default function ServiceIntroSection() {
  return (
    <section className="container mx-auto laptop:px-20 px-5">
      <h2
        className="text-5xl laptop:text-8xl font-medium !leading-tight laptop:w-10/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-char-slide-up"
      >
        I craft products that provide high quality solutions.
      </h2>

      <div className="flex flex-col laptop:w-8/12 mt-24">
        <p className="text-xl leading-relaxed">
          In today's fast-paced digital landscape, having a dynamic and
          user-friendly app is no longer a luxury; it's a necessity. I
          understand the importance of staying ahead in the ever-evolving world
          of technology. That's why I offer cutting-edge services that bring
          your vision to life and drive your business forward.
        </p>
      </div>
    </section>
  )
}

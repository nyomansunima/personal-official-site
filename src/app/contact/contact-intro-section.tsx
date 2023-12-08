export default function ContactIntroSection() {
  return (
    <section className="flex container mx-auto laptop:px-20 px-5 py-20 laptop:py-24">
      <div className="flex flex-col laptop:w-11/12 px-5 laptop:px-0">
        <h2
          className="text-5xl laptop:text-8xl !leading-tight"
          data-cursor-size="200"
          data-cursor-exclusion
          data-animation="text-char-slide-up"
        >
          Let's collaborate for lovely
          <span className="border-4 border-black rounded-full px-10 pt-4 pb-3 laptop:mx-10">
            project.
          </span>
        </h2>
      </div>
    </section>
  )
}

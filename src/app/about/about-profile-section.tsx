export default function AboutProfileSection() {
  return (
    <section className="flex flex-col container mx-auto laptop:px-20 px-5">
      <h2
        className="text-5xl laptop:text-8xl !leading-tight"
        data-animation="text-char-slide-up"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span className="laptop:pl-20"></span>
        I'm product designer & creative fullstack developer
      </h2>

      <div className="flex flex-col laptop:w-8/12 text-xl leading-relaxed gap-10 mt-36">
        <div className="flex-none">
          <p>
            Hello, My name is Nyoman Sunima, a product designer and creative
            developer with a passion for solving problems. My journey as a
            designer has been driven by the desire to create innovative
            solutions that address real-world challenges. As a product designer,
            I meticulously blend form and function to deliver seamless
            experiences. I believe that design should not only meet users' needs
            but also exceed their expectations. By putting myself in the users'
            shoes and prioritizing their perspectives, I ensure that every
            decision I make is rooted in empathy and usability. The result?
            Intuitive and delightful user experiences that leave a lasting
            impression.
          </p>
        </div>
        <div className="flex-none">
          <p>
            But my expertise doesn't stop at design. I'm also a creative
            developer equipped with technical skills to bring ideas to life.
            Through my knowledge of programming languages and cutting-edge
            technologies, I turn design concepts into fully functional and
            interactive digital experiences. By combining design and
            development, I create immersive solutions that captivate and engage
            audiences. What truly sets me apart is my insatiable thirst for
            knowledge and growth. I'm constantly exploring new frontiers and
            staying at the forefront of emerging trends and technologies. This
            curiosity fuels my ability to think outside the box and deliver
            forward-thinking solutions that resonate with audiences.
          </p>
        </div>
      </div>
    </section>
  )
}

<template>
  <main class="flex flex-col pt-48 pb-80 gap-40 laptop:gap-80">
    <section
      class="flex flex-col items-center container mx-auto gap-20 px-5 laptop:px-20 -mt-32 relative"
    >
      <div
        class="flex relative laptop:w-5/12 mx-auto justify-center items-end overflow-hidden rounded-3xl mt-20 laptop:mt-0 laptop:rounded-full h-80 laptop:min-h-[700px]"
      >
        <div class="flex absolute w-full h-full">
          <NuxtImg
            src="/images/profile-cover.png"
            class="flex h-full w-full object-fill"
          />
        </div>
        <NuxtImg
          src="/images/photo.png"
          class="relative flex w-[400px] h-[400px] object-cover"
        />
      </div>
    </section>

    <section class="flex flex-col container mx-auto laptop:px-20 px-5">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight"
        animation="text-char-slide-up"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span class="laptop:pl-28"></span>
        I'am product designer & creative developer that train to solve the
        problems.
      </h2>

      <div
        class="flex flex-col laptop:w-8/12 text-xl leading-relaxed gap-10 mt-36"
      >
        <div animation="slide-up" class="flex-none">
          <p animation-target>
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
        <div animation="slide-up" class="flex-none">
          <p animation-target>
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

    <section
      class="flex flex-col container mx-auto laptop:px-20 px-5 items-center"
    >
      <h2
        class="text-5xl laptop:text-8xl text-center !leading-tight"
        animation="text-char-opacity"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        I doing research, planning, design, development & ship the product. I'am
        the indie maker.
      </h2>

      <div
        class="grid grid-cols-1 laptop:grid-cols-2 text-xl leading-relaxed gap-10 mt-20 laptop:mt-36"
      >
        <div animation="slide-up">
          <p animation-target>
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
        <div animation="slide-up">
          <p animation-target>
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
        <div animation="slide-up">
          <p animation-target>
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

    <section class="flex flex-col container mx-auto laptop:px-20 px-5">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight"
        animation="text-line-mask-opacity-scrub"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span class="laptop:pl-28"></span>What's going on today & how the thing
        change to become better everyday.
      </h2>
      <div
        class="grid w-full grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 mt-36"
        animation="item-slide-up-scrub"
        animation-amount="400"
      >
        <AboutTimelineItem
          v-for="(item, i) in timelines"
          :key="i"
          :data="item"
          animation-target
        />
      </div>
    </section>

    <section
      class="flex flex-col container mx-auto laptop:px-20 px-5 items-center"
    >
      <h2
        class="text-5xl laptop:text-8xl !leading-tight"
        animation="text-char-slide-down"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span class="pl-28"></span>I dedicate my time on my career and journey.
        Bacause a great things never came from comfort zones.
      </h2>

      <div
        class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 mt-36 w-full"
        animation="item-slide-up-scrub"
      >
        <AboutCareerItem
          v-for="(item, i) in data.careers"
          :key="i"
          :data="item"
          animation-target
        />
      </div>
    </section>

    <section class="flex flex-col container mx-auto laptop:px-20 px-5">
      <h2
        class="text-5xl laptop:text-8xl !leading-tight"
        animation="text-line-mask-opacity-scrub"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span class="laptop:pl-28"></span>Now everything is a total. Totality
        work and totality dedication.
      </h2>
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 mt-80 gap-x-10 gap-y-40"
        animation="item-slide-up-scrub"
      >
        <div
          class="flex flex-col items-center gap-10"
          v-for="({ count, label }, i) in data.totals"
          :key="i"
          animation-target
        >
          <span class="text-7xl">{{ count }}</span>
          <h3 class="text-xl">{{ label }}</h3>
        </div>
      </div>
    </section>

    <section class="flex container mx-auto laptop:px-20 px-5">
      <NuxtLink
        to="/contact"
        class="text-5xl laptop:text-8xl text-center !leading-tight"
        data-cursor-size="200"
        data-cursor-text="Contact Now"
        animation="slide-up"
      >
        <div animation-target>
          Let's make your idea become reality. We can discuss anything.
        </div>
      </NuxtLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import { AboutDetail } from '~/types/content'
import data from '~/assets/data/about.json'
import AboutCareerItem from '~/components/about/AboutCareerItem.vue'
import { aboutQuery } from '~/lib/queries'

definePageMeta({
  layout: 'main',
})
useSeoMeta({
  title: 'About',
  description: 'Know more about me and what i did',
  ogTitle: 'About | Nyoman Sunima',
  ogDescription: 'Know more about me and what i did',
})

const {
  data: {
    value: { timelines },
  },
} = await useSanityQuery<AboutDetail>(aboutQuery)

// animate the elements
onMounted(() => {
  useAnimation()
})
</script>

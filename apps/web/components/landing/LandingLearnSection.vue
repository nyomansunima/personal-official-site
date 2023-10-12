<script setup lang="ts"></script>

<template>
  <section class="flex flex-col container mx-auto px-5 laptop:px-20">
    <h2
      class="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
      data-cursor-size="200"
      data-cursor-exclusion
      animation="text-char-slide-up"
    >
      I share tips about design, development & crafting app.
    </h2>

    <div class="flex mt-24 gap-5">
      <Button
        as="a"
        href="https://instagram.com/nyomansunima"
        target="_blank"
        variant="outline"
        size="lg"
      >
        <i class="fi fi-brands-instagram" />
        Instagram
      </Button>
      <Button
        as="a"
        href="https://twitter.com/nyomansunima"
        target="_blank"
        variant="outline"
        size="lg"
      >
        <i class="fi fi-brands-twitter" />
        Twitter
      </Button>
      <Button
        as="a"
        href="https://linkedin.com/in/nyomansunima"
        target="_blank"
        variant="outline"
        size="lg"
      >
        <i class="fi fi-brands-linkedin" />
        Linkedin
      </Button>
    </div>
  </section>
</template>

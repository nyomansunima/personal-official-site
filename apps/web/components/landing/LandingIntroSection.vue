<script setup lang="ts"></script>

<template>
  <section class="flex flex-col container mx-auto laptop:px-20 intro px-5">
    <h2
      class="text-5xl laptop:text-8xl !leading-tight"
      animation="text-char-opacity"
    >
      <span class="laptop:pl-20"></span>
      In search of quality.
      <br />
      Designer and developer focused on how the thing worked.
    </h2>

    <div class="flex flex-col mt-24">
      <div class="flex flex-col gap-10 text-xl !leading-relaxed laptop:w-8/12">
        <p>
          5+ years as a product designer and full stack developer. Been focusing
          on crafting apps through research, design, and development. My day to
          day revolves around designing and developing digital products. I've
          been passionate about this work from the start, combining style with
          functionality to create user-friendly experiences.
        </p>
      </div>
    </div>

    <div class="flex items-center flex-wrap gap-5 mt-16">
      <Button
        as="a"
        href="/about"
        size="lg"
        variant="primary"
        data-cursor-size="40"
        data-cursor-stick
        data-cursor-exclusion
      >
        About me <i class="fi fi-sr-video-camera" />
      </Button>
    </div>
  </section>
</template>

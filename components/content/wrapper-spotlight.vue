<template>
  <div class="relative h-[40rem] flex overflow-hidden px-16 antialiased md:items-center md:justify-center lg:px-32">
    <slot />
    <div class="relative z-10 mx-auto max-w-7xl w-full p-4 pt-20 md:pt-0">
      <h1
        class="bg-opacity-50 from-neutral-50 to-neutral-400 bg-gradient-to-b bg-clip-text text-center text-4xl text-transparent font-bold md:text-7xl"
      >
        Spotlight <br> is the new trend.
      </h1>
      <p class="mx-auto mt-4 max-w-lg text-center text-base text-neutral-300 font-normal">
        Spotlight effect is a great way to draw attention to a specific part of the page. Here, we are
        drawing the attention towards the text section of the page. I don&apos;t know why but I&apos;m
        running out of copy.
      </p>
    </div>
  </div>
</template>

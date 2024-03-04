<template>
  <div class="relative hfull wfull flex items-center justify-center">
    <div class="relative h-3/4 max-w-sm w-3/4 md:h-1/2">
      <div
        class="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 from-blue-500 to-teal-500 bg-gradient-to-r blur-3xl"
      />
      <div
        class="relative h-full flex flex-col items-start justify-end overflow-hidden border border-gray-800 rounded-2xl bg-gray-900 px-4 py-8 shadow-xl"
      >
        <div class="mb-4 h-5 w-5 flex items-center justify-center border border-gray-500 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="h-2 w-2 text-gray-300"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
          </svg>
        </div>

        <h1 class="relative z-50 mb-4 text-xl text-white font-bold">
          Meteors because they&apos;re cool
        </h1>

        <p class="relative z-50 mb-4 text-base text-slate-500 font-normal">
          Make something awesome with this super cool meteor effect. It will make people happy when
          they see it. It might even make their day. Just try it eh.
        </p>

        <button class="border border-gray-500 rounded-lg px-4 py-1 text-gray-300">
          Explore
        </button>

        <slot />
      </div>
    </div>
  </div>
</template>
